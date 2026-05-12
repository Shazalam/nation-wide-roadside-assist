import { Request, Response } from 'express';
import FleetVehicle from '../models/FleetVehicle';
import FleetIncident from '../models/FleetIncident';

export const getFleetStats = async (req: Request, res: Response) => {
  try {
    const totalVehicles = await FleetVehicle.countDocuments();
    const activeIncidents = await FleetIncident.countDocuments({ status: { $ne: 'completed' } });
    const completedToday = await FleetIncident.countDocuments({ 
      status: 'completed',
      'timestamps.completedAt': { $gte: new Date(new Date().setHours(0,0,0,0)) }
    });

    const fleetUtilization = 89.5; // Mock data for demo
    const avgResponseTime = 18.6; // Mock data for demo
    const slaCompliance = 97.8; // Mock data for demo

    res.json({
      totalVehicles,
      activeIncidents,
      completedToday,
      fleetUtilization,
      avgResponseTime,
      slaCompliance,
      networkNodes: 14247
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getActiveIncidents = async (req: Request, res: Response) => {
  try {
    const incidents = await FleetIncident.find({ status: { $ne: 'completed' } })
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(incidents);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createIncident = async (req: Request, res: Response) => {
  try {
    const newIncident = new FleetIncident(req.body);
    await newIncident.save();
    res.status(201).json(newIncident);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
