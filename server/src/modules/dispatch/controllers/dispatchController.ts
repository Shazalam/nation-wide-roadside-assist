import { Request, Response } from 'express';
import DispatchIncident from '../models/DispatchIncident';
import VendorLocation from '../models/VendorLocation';

export const dispatchController = {
  getIncidents: async (req: Request, res: Response) => {
    try {
      const incidents = await DispatchIncident.find().sort({ createdAt: -1 }).limit(50);
      res.json(incidents);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  getStats: async (req: Request, res: Response) => {
    try {
      const totalEvents = 2400000; // Mock total for demo
      const slaCompliance = 97.8;
      const activeIncidents = await DispatchIncident.countDocuments({ status: { $nin: ['completed', 'cancelled'] } });
      
      res.json({
        totalEvents,
        slaCompliance,
        activeIncidents,
        avgResponseTime: 18.5,
        resolutionRate: 99.1
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  getVendors: async (req: Request, res: Response) => {
    try {
      const vendors = await VendorLocation.find({ status: 'available' });
      res.json(vendors);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  createIncident: async (req: Request, res: Response) => {
    try {
      const incident = new DispatchIncident(req.body);
      await incident.save();
      res.status(201).json(incident);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
};
