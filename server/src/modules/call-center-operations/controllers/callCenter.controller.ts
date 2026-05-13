import { Request, Response } from 'express';

export const getIncidents = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getDispatch = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getTelemetry = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getEscalations = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getAnalytics = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};
