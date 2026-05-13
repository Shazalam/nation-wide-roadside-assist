import { Request, Response } from 'express';
import RecoveryIncident from '../models/RecoveryIncident';

export const getRecoveryStats = async (req: Request, res: Response) => {
  try {
    const stats = {
      activeIncidents: 1248,
      enRoute: 642,
      onScene: 426,
      completedToday: 2381,
      avgResponseTime: 32,
      slaCompliance: 99.1,
      rotatorAvailability: 85,
      customerSatisfaction: 4.9,
      regionalHeatmap: [
        { lat: 40.7128, lng: -74.0060, intensity: 0.8 }, // NYC
        { lat: 34.0522, lng: -118.2437, intensity: 0.6 }, // LA
        { lat: 41.8781, lng: -87.6298, intensity: 0.9 }, // Chicago
        { lat: 29.7604, lng: -95.3698, intensity: 0.7 }  // Houston
      ]
    };
    
    // In a production environment, we'd aggregate from MongoDB.
    // For the enterprise demo, we return these calibrated metrics.
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recovery stats', error });
  }
};

export const createIncident = async (req: Request, res: Response) => {
  try {
    const incident = new RecoveryIncident(req.body);
    await incident.save();
    res.status(201).json(incident);
  } catch (error) {
    res.status(400).json({ message: 'Error creating recovery incident', error });
  }
};

export const getIncidents = async (req: Request, res: Response) => {
  try {
    const incidents = await RecoveryIncident.find().sort({ createdAt: -1 }).limit(50);
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching incidents', error });
  }
};
