import { Request, Response } from 'express';
import { ContinuationIncident } from '../models/ContinuationIncident';

export const createContinuation = async (req: Request, res: Response) => {
  try {
    const { incidentId, serviceType, customerId, location } = req.body;

    const newContinuation = await ContinuationIncident.create({
      incidentId,
      customerId,
      serviceType,
      location,
      status: 'pending'
    });

    res.status(201).json({
      success: true,
      data: newContinuation
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getContinuations = async (req: Request, res: Response) => {
  try {
    const continuations = await ContinuationIncident.find().sort('-createdAt');
    
    res.status(200).json({
      success: true,
      data: continuations
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

export const updateContinuationStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, provider } = req.body;

    const continuation = await ContinuationIncident.findOneAndUpdate(
      { incidentId: id },
      { status, provider },
      { new: true, runValidators: true }
    );

    if (!continuation) {
      return res.status(404).json({
        success: false,
        message: 'Continuation incident not found'
      });
    }

    res.status(200).json({
      success: true,
      data: continuation
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getContinuationAnalytics = async (req: Request, res: Response) => {
  try {
    const active = await ContinuationIncident.countDocuments({ status: { $nin: ['completed', 'escalated'] } });
    const completed = await ContinuationIncident.countDocuments({ status: 'completed' });
    const total = active + completed;
    
    // Mock analytics for the dashboard
    res.status(200).json({
      success: true,
      data: {
        activeAssistance: active || 1248,
        completedToday: completed || 1952,
        resolutionRate: 98.7,
        avgResolutionTime: 42
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
