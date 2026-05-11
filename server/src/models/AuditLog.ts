import mongoose, { Schema, Document } from 'mongoose';

export interface IAuditLog extends Document {
  action: string;
  category: 'auth' | 'dispatch' | 'billing' | 'system' | 'security';
  userId?: mongoose.Types.ObjectId;
  entityId?: mongoose.Types.ObjectId;
  entityType?: string;
  details: Schema.Types.Mixed;
  ipAddress?: string;
  userAgent?: string;
  severity: 'info' | 'warning' | 'critical';
}

const AuditLogSchema: Schema = new Schema({
  action: { type: String, required: true },
  category: { type: String, enum: ['auth', 'dispatch', 'billing', 'system', 'security'], required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  entityId: { type: Schema.Types.ObjectId },
  entityType: { type: String },
  details: { type: Schema.Types.Mixed },
  ipAddress: { type: String },
  userAgent: { type: String },
  severity: { type: String, enum: ['info', 'warning', 'critical'], default: 'info' }
}, { timestamps: true });

export default mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);
