import { Request, Response } from 'express';

export const getVendors = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getDispatches = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getCoverage = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getTelemetry = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getAnalytics = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};
