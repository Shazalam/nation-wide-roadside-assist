import { Request, Response } from 'express';
import { ContactInquiry } from '../models/ContactInquiry';

export const submitInquiry = async (req: Request, res: Response) => {
  try {
    const { fullName, companyName, businessEmail, phoneNumber, inquiryType, fleetSize, message } = req.body;

    const newInquiry = await ContactInquiry.create({
      fullName,
      companyName,
      businessEmail,
      phoneNumber,
      inquiryType,
      fleetSize,
      message,
      status: 'received',
      priority: fleetSize === '1000+ Vehicles' ? 'enterprise' : 'normal'
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry routed to operations successfully',
      data: newInquiry
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getInquiries = async (req: Request, res: Response) => {
  try {
    // Assuming auth middleware is protecting this route for admins
    const inquiries = await ContactInquiry.find().sort('-createdAt');
    res.status(200).json({
      success: true,
      data: inquiries
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

export const requestDemo = async (req: Request, res: Response) => {
  try {
    // Specialized demo request endpoint
    const { businessEmail, companyName } = req.body;
    
    // In a real system, this would trigger an email or CRM webhook
    res.status(200).json({
      success: true,
      message: 'Infrastructure demo requested successfully',
      details: {
        email: businessEmail,
        company: companyName,
        assignedSpecialist: 'SLA-Team-Alpha'
      }
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getEnterpriseSupportStatus = async (req: Request, res: Response) => {
  try {
    // Simulated health check for the developer support page
    res.status(200).json({
      success: true,
      data: {
        status: "operational",
        dispatchLatency: "42ms",
        activeNodes: 1240,
        supportTier: "ENTERPRISE"
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
