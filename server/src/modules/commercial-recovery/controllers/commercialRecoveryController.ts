import { Request, Response } from 'express';
import RecoveryIncident from '../models/RecoveryIncident';
import FleetVehicle from '../models/FleetVehicle';
import TowOperator from '../models/TowOperator';
import DispatchEvent from '../models/DispatchEvent';
import VendorTelemetry from '../models/VendorTelemetry';
import FleetAnalytics from '../models/FleetAnalytics';

// Incidents
export const getIncidents = async (req: Request, res: Response) => {
  try {
    const incidents = await RecoveryIncident.find().populate('vehicleId').sort({ createdAt: -1 });
    res.json(incidents);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createIncident = async (req: Request, res: Response) => {
  try {
    const incident = new RecoveryIncident(req.body);
    const savedIncident = await incident.save();
    res.status(201).json(savedIncident);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Dispatch
export const getDispatchEvents = async (req: Request, res: Response) => {
  try {
    const events = await DispatchEvent.find()
      .populate('incidentId')
      .populate('operatorId')
      .sort({ timestamp: -1 });
    res.json(events);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Fleet
export const getFleet = async (req: Request, res: Response) => {
  try {
    const vehicles = await FleetVehicle.find();
    res.json(vehicles);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Vendors
export const getVendors = async (req: Request, res: Response) => {
  try {
    const operators = await TowOperator.find();
    res.json(operators);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Analytics
export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const analytics = await FleetAnalytics.find().sort({ date: -1 }).limit(30);
    res.json(analytics);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Telemetry
export const getTelemetry = async (req: Request, res: Response) => {
  try {
    const telemetry = await VendorTelemetry.find();
    res.json(telemetry);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
