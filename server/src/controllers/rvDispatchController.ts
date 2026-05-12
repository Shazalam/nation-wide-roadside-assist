import { Request, Response } from 'express';
import RVDispatch from '../models/RVDispatch';

export const createDispatch = async (req: Request, res: Response) => {
  try {
    const { vehicle, incident, webhookUrl } = req.body;

    // Advanced Dispatch Intelligence Mock Logic
    // In production, this would call specialized routing algorithms based on weight, length, etc.
    const etaMinutes = incident.requires_heavy_duty ? 45 : 22;

    const dispatch = new RVDispatch({
      vehicle,
      incident,
      webhookUrl,
      etaMinutes,
      status: 'pending'
    });

    await dispatch.save();

    res.status(201).json({
      success: true,
      message: 'RV Dispatch initialized successfully',
      data: dispatch
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getDispatchStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dispatch = await RVDispatch.findById(id);

    if (!dispatch) {
      return res.status(404).json({ success: false, message: 'Dispatch not found' });
    }

    res.status(200).json({
      success: true,
      data: dispatch
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateDispatchTelemetry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { lat, lng } = req.body;

    const dispatch = await RVDispatch.findById(id);

    if (!dispatch) {
      return res.status(404).json({ success: false, message: 'Dispatch not found' });
    }

    dispatch.vehicle.telemetry.lat = lat;
    dispatch.vehicle.telemetry.lng = lng;
    await dispatch.save();

    // Trigger webhook if necessary
    
    res.status(200).json({
      success: true,
      data: dispatch
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
