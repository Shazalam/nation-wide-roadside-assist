import axios from 'axios';
import crypto from 'crypto';
import Webhook from '../models/Webhook';
import AuditLog from '../models/AuditLog';

export class DispatchEventEngine {
  /**
   * Triggers an event across the mesh and notifies subscribers via webhooks
   */
  static async triggerEvent(eventType: string, data: any) {
    console.log(`[EVENT ENGINE] Triggering: ${eventType}`);

    // 1. Log the event to Audit Mesh
    await AuditLog.create({
      action: eventType,
      category: 'dispatch',
      entityId: data._id || data.id,
      entityType: 'Dispatch',
      details: data,
      severity: this.getSeverity(eventType)
    });

    // 2. Find active webhooks subscribed to this event
    const webhooks = await Webhook.find({ 
      isActive: true, 
      events: { $in: [eventType, '*'] } 
    });

    // 3. Dispatch webhooks asynchronously
    for (const hook of webhooks) {
      this.sendWebhook(hook, eventType, data).catch(err => {
        console.error(`[WEBHOOK ERROR] Failed to send to ${hook.url}:`, err.message);
      });
    }
  }

  private static async sendWebhook(hook: any, eventType: string, data: any) {
    const payload = JSON.stringify({
      id: `evt_${crypto.randomBytes(8).toString('hex')}`,
      type: eventType,
      created: Math.floor(Date.now() / 1000),
      data: data
    });

    const signature = crypto
      .createHmac('sha256', hook.secret)
      .update(payload)
      .digest('hex');

    await axios.post(hook.url, payload, {
      headers: {
        'Content-Type': 'application/json',
        'X-NT-Signature': signature,
        'User-Agent': 'Nationwide-Trans-Webhook-Engine/4.2.1'
      },
      timeout: 5000
    });
  }

  private static getSeverity(eventType: string): 'info' | 'warning' | 'critical' {
    if (eventType.includes('cancelled') || eventType.includes('failed')) return 'warning';
    if (eventType.includes('breached')) return 'critical';
    return 'info';
  }
}
