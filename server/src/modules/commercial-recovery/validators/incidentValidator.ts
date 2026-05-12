import { Request, Response, NextFunction } from 'express';

export const validateIncident = (req: Request, res: Response, next: NextFunction) => {
  const { incidentId, vehicleId, type, location } = req.body;

  if (!incidentId || !vehicleId || !type || !location) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (!location.address || !location.coordinates || !location.coordinates.lat || !location.coordinates.lng) {
    return res.status(400).json({ message: 'Invalid location data' });
  }

  next();
};
