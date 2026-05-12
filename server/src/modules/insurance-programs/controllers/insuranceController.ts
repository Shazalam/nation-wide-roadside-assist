import { Request, Response } from 'express';
import InsuranceClaim from '../models/InsuranceClaim';
import InsurancePartner from '../models/InsurancePartner';

export const insuranceController = {
  getClaims: async (req: Request, res: Response) => {
    try {
      const claims = await InsuranceClaim.find().sort({ createdAt: -1 }).limit(50);
      res.json(claims);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  getStats: async (req: Request, res: Response) => {
    try {
      const partners = await InsurancePartner.find();
      const stats = {
        totalClaims: await InsuranceClaim.countDocuments(),
        slaCompliance: 97.8, // Mock for now
        nationwideCoverage: 'Active',
        ops247: 'Online',
        partnerMetrics: partners.map(p => ({
          name: p.name,
          active: p.activeIncidents,
          sla: p.slaTargets.resolutionRate
        }))
      };
      res.json(stats);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  createClaim: async (req: Request, res: Response) => {
    try {
      const newClaim = new InsuranceClaim(req.body);
      await newClaim.save();
      res.status(201).json(newClaim);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
};
