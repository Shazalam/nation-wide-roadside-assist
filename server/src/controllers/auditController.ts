import { Request, Response } from 'express';
import AuditLog from '../models/AuditLog';

export const getAuditLogs = async (req: Request, res: Response) => {
  try {
    const { category, severity, entityId } = req.query;
    const filter: any = {};

    if (category) filter.category = category;
    if (severity) filter.severity = severity;
    if (entityId) filter.entityId = entityId;

    const logs = await AuditLog.find(filter)
      .sort('-createdAt')
      .limit(100);

    res.json({ success: true, data: logs });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
