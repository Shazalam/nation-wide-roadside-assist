import { Request, Response } from 'express';
import { DispatchIncident } from '../models/DispatchIncident';
import { TowUnit } from '../models/TowUnit';
import { DispatchQueue } from '../models/DispatchQueue';
import { randomUUID } from 'crypto';

export const createDispatch = async (req: Request, res: Response) => {
  try {
    const { fleetId, vehicleType, location, incidentType, priority } = req.body;
    
    // Simulate routing logic
    const assignedNode = 'NA-CENTRAL';
    const dispatchId = `DSP-${Math.floor(1000 + Math.random() * 9000)}`;

    const incident = await DispatchIncident.create({
      incidentId: dispatchId,
      fleetId,
      vehicleType,
      location,
      incidentType,
      priority,
      status: 'ROUTING',
      assignedNode
    });

    res.status(201).json({
      success: true,
      message: 'Dispatch created and routing initiated',
      data: {
        dispatchId: incident.incidentId,
        status: incident.status,
        assignedNode: incident.assignedNode,
        estimatedVendorMatch: '45s'
      }
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getActiveDispatches = async (req: Request, res: Response) => {
  try {
    const incidents = await DispatchIncident.find({ status: { $ne: 'RESOLVED' } }).sort('-createdAt').limit(50);
    res.status(200).json({ success: true, data: incidents });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const getDispatchQueues = async (req: Request, res: Response) => {
  try {
    // Return simulated queue data or fetch from DB
    const queues = await DispatchQueue.find();
    
    if(queues.length === 0) {
      // Mock data if empty
      return res.status(200).json({
        success: true,
        data: [
          { region: 'NA-EAST', activeIncidents: 142, status: 'NOMINAL', averageEta: 12 },
          { region: 'NA-WEST', activeIncidents: 89, status: 'NOMINAL', averageEta: 15 },
          { region: 'NA-CENTRAL', activeIncidents: 204, status: 'HIGH_LOAD', averageEta: 22 }
        ]
      });
    }

    res.status(200).json({ success: true, data: queues });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const getTowUnits = async (req: Request, res: Response) => {
  try {
    const units = await TowUnit.find().limit(100);
    res.status(200).json({ success: true, data: units });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
