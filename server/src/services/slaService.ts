import Dispatch from '../models/Dispatch';
import AuditLog from '../models/AuditLog';

export class SLAService {
  /**
   * Scans active dispatches for SLA breaches
   */
  static async monitorActiveDispatches() {
    const now = new Date();
    
    const breaches = await Dispatch.find({
      status: { $in: ['pending', 'accepted', 'en_route'] },
      'sla.targetArrivalTime': { $lt: now },
      'sla.isBreached': false
    });

    for (const dispatch of breaches) {
      await this.processBreach(dispatch);
    }

    return breaches.length;
  }

  private static async processBreach(dispatch: any) {
    // 1. Mark as breached
    dispatch.sla.isBreached = true;
    dispatch.sla.breachSeverity = 'major';
    await dispatch.save();

    // 2. Log to Audit Mesh
    await AuditLog.create({
      action: 'SLA_BREACH_DETECTED',
      category: 'dispatch',
      entityId: dispatch._id,
      entityType: 'Dispatch',
      severity: 'critical',
      details: {
        targetTime: dispatch.sla.targetArrivalTime,
        actualTime: new Date(),
        incidentId: dispatch.incidentId
      }
    });

    // 3. Trigger Escalation Logic (e.g., Notify Supervisor)
    console.warn(`[SLA BREACH] Dispatch ${dispatch._id} has exceeded target arrival time.`);
    
    // Here we would typically trigger a webhook or push notification
    // to the Escalation Hub built in the frontend.
  }
}
