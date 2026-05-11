import { Request, Response } from 'express';
import Vendor from '../models/Vendor';
import User from '../models/User';
import { AuthRequest } from '../middleware/authMiddleware';

export const getVendors = async (req: AuthRequest, res: Response) => {
  try {
    const { capability, status, lat, lng, radius } = req.query;
    const filter: any = {};

    if (capability) filter.capabilities = capability;
    if (status) filter.status = status;

    // Geographic search if lat/lng provided
    if (lat && lng) {
      filter.location = {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng as string), parseFloat(lat as string)]
          },
          $maxDistance: parseInt(radius as string || "50") * 1609.34 // Miles to meters
        }
      };
    }

    const vendors = await Vendor.find(filter).populate('userId', 'name email');
    res.json({ success: true, data: vendors });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateVendorCompliance = async (req: AuthRequest, res: Response) => {
  try {
    const { complianceStatus } = req.body;
    const vendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      { 'compliance.status': complianceStatus },
      { new: true }
    );

    res.json({ success: true, data: vendor });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
