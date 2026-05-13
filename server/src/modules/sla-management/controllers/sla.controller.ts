import { Request, Response } from 'express';

export const getMetrics = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getVendors = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getDispatch = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getAnalytics = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};

export const getCompliance = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: [] });
};
