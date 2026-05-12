import { Request, Response } from 'express';
import Fleet from '../models/Fleet';

export const getFleets = async (req: Request, res: Response) => {
  try {
    const { enterpriseOwner, status, type } = req.query;
    const query: any = {};
    
    if (enterpriseOwner) query.enterpriseOwner = enterpriseOwner;
    if (status) query.status = status;
    if (type) query.type = type;

    const fleets = await Fleet.find(query);
    res.json(fleets);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createFleetAsset = async (req: Request, res: Response) => {
  try {
    const fleet = new Fleet(req.body);
    await fleet.save();
    res.status(201).json(fleet);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateFleetTelemetry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { telemetry, currentLocation } = req.body;

    const fleet = await Fleet.findByIdAndUpdate(
      id,
      { 
        $set: { 
          telemetry, 
          currentLocation: { ...currentLocation, lastUpdated: new Date() } 
        } 
      },
      { new: true }
    );

    if (!fleet) return res.status(404).json({ message: 'Fleet asset not found' });
    res.json(fleet);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getFleetById = async (req: Request, res: Response) => {
  try {
    const fleet = await Fleet.findById(req.params.id);
    if (!fleet) return res.status(404).json({ message: 'Fleet asset not found' });
    res.json(fleet);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
