import { Request, Response } from 'express';
import Fleet from '../models/Fleet';
import Dispatch from '../models/Dispatch';
import AuditLog from '../models/AuditLog';

export class TelemetryController {
  /**
   * High-volume ingestion point for asset GPS and diagnostic data.
   */
  static async ingest(req: Request, res: Response) {
    try {
      const { assetId, lat, lng, speed, heading, diagnostics } = req.body;

      // 1. Update Fleet Asset State
      const asset = await Fleet.findOneAndUpdate(
        { assetId },
        { 
          'location.coordinates': [lng, lat],
          'telemetry.speed': speed,
          'telemetry.heading': heading,
          'telemetry.diagnostics': diagnostics,
          lastUpdated: new Date()
        },
        { new: true, upsert: true }
      );

      // 2. Update active Dispatch if applicable
      await Dispatch.findOneAndUpdate(
        { 'telemetry.assetId': assetId, status: 'en_route' },
        { 
          'telemetry.currentLat': lat,
          'telemetry.currentLng': lng,
          'telemetry.speed': speed
        }
      );

      // 3. Conditional Alert Logging
      if (diagnostics?.engineTemp > 220) {
        await AuditLog.create({
          action: 'CRITICAL_TELEMETRY_ALERT',
          category: 'system',
          entityId: asset._id,
          entityType: 'Fleet',
          severity: 'warning',
          details: { diagnostic: 'engineTemp', value: diagnostics.engineTemp }
        });
      }

      return res.status(202).json({ status: 'INGESTED', timestamp: new Date() });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  /**
   * Serves real-time coordinates for the dashboard operational map.
   */
  static async getMapSnapshot(req: Request, res: Response) {
    try {
      const activeAssets = await Fleet.find({
        lastUpdated: { $gt: new Date(Date.now() - 1000 * 60 * 5) } // Last 5 mins
      }).select('assetId location telemetry status');

      return res.json(activeAssets);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
