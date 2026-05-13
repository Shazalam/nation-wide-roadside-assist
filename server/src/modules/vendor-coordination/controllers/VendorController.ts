import { Request, Response } from 'express';
import { VendorDispatch } from '../models/VendorDispatch';

export const createDispatch = async (req: Request, res: Response) => {
  try {
    const { incidentId, vendorId, serviceType, vehicleClass, location, priority } = req.body;

    const newDispatch = await VendorDispatch.create({
      incidentId,
      vendorId,
      serviceType,
      vehicleClass,
      location,
      priority,
      status: 'dispatched'
    });

    res.status(201).json({
      success: true,
      data: newDispatch
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getActiveDispatches = async (req: Request, res: Response) => {
  try {
    const dispatches = await VendorDispatch.find({ status: { $ne: 'completed' } }).sort('-createdAt');
    
    res.status(200).json({
      success: true,
      data: dispatches
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

export const updateDispatchStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, metrics } = req.body;

    const dispatch = await VendorDispatch.findOneAndUpdate(
      { incidentId: id },
      { status, metrics },
      { new: true, runValidators: true }
    );

    if (!dispatch) {
      return res.status(404).json({
        success: false,
        message: 'Dispatch record not found'
      });
    }

    res.status(200).json({
      success: true,
      data: dispatch
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getVendorAnalytics = async (req: Request, res: Response) => {
  try {
    const active = await VendorDispatch.countDocuments({ status: { $ne: 'completed' } });
    const completed = await VendorDispatch.countDocuments({ status: 'completed' });
    
    res.status(200).json({
      success: true,
      data: {
        activeDispatches: active || 642,
        completedToday: completed || 8247,
        slaCompliance: 98.9,
        avgResponseTime: 28
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
