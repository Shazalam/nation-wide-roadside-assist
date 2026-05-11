import { Request, Response } from 'express';
import Webhook from '../models/Webhook';
import { AuthRequest } from '../middleware/authMiddleware';
import crypto from 'crypto';

export const registerWebhook = async (req: AuthRequest, res: Response) => {
  try {
    const { url, events } = req.body;
    const secret = `whsec_${crypto.randomBytes(16).toString('hex')}`;

    const webhook = await Webhook.create({
      url,
      events,
      secret,
      createdBy: req.user?._id
    });

    res.status(201).json({
      success: true,
      data: webhook
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getMyWebhooks = async (req: AuthRequest, res: Response) => {
  try {
    const webhooks = await Webhook.find({ createdBy: req.user?._id });
    res.json({ success: true, data: webhooks });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteWebhook = async (req: AuthRequest, res: Response) => {
  try {
    const webhook = await Webhook.findOneAndDelete({ 
      _id: req.params.id, 
      createdBy: req.user?._id 
    });

    if (!webhook) {
      return res.status(404).json({ success: false, message: 'Webhook not found' });
    }

    res.json({ success: true, message: 'Webhook removed' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
