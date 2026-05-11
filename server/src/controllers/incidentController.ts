import { Request, Response } from 'express';
import Incident from '../models/Incident';
import { DispatchEventEngine } from '../services/dispatchEventEngine';
import { AuthRequest } from '../middleware/authMiddleware';

export const createIncident = async (req: AuthRequest, res: Response) => {
  try {
    const { serviceType, location, vehicle, priority, notes } = req.body;

    const incidentCount = await Incident.countDocuments();
    const incidentId = `INC-${1000 + incidentCount + 1}`;

    const incident = await Incident.create({
      incidentId,
      client: req.user?._id,
      serviceType,
      location,
      vehicle,
      priority,
      notes,
      status: 'pending'
    });

    await DispatchEventEngine.triggerEvent('incident.created', incident);

    res.status(201).json({
      success: true,
      data: incident
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getIncidents = async (req: AuthRequest, res: Response) => {
  try {
    const filter: any = {};
    if (req.user?.role === 'client') filter.client = req.user._id;
    if (req.user?.role === 'vendor') filter.vendor = req.user._id;

    const incidents = await Incident.find(filter)
      .populate('client', 'name email profile.company')
      .populate('vendor', 'name profile.company')
      .sort('-createdAt');

    res.json({ success: true, data: incidents });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateIncidentStatus = async (req: AuthRequest, res: Response) => {
  try {
    const { status } = req.body;
    const incident = await Incident.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!incident) {
      return res.status(404).json({ success: false, message: 'Incident not found' });
    }

    await DispatchEventEngine.triggerEvent(`incident.${status}`, incident);

    res.json({ success: true, data: incident });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
