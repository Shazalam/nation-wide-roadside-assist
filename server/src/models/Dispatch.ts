import mongoose, { Schema, Document } from 'mongoose';

export interface IDispatch extends Document {
  incidentId: mongoose.Types.ObjectId;
  vendorId: mongoose.Types.ObjectId;
  status: 'pending' | 'accepted' | 'en_route' | 'on_site' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignedAt: Date;
  acceptedAt?: Date;
  arrivedAt?: Date;
  completedAt?: Date;
  sla: {
    targetArrivalTime: Date;
    isBreached: boolean;
    breachSeverity?: 'minor' | 'major' | 'critical';
  };
  telemetry: {
    currentLat: number;
    currentLng: number;
    heading: number;
    speed: number;
  };
  payout: {
    baseAmount: number;
    incentives: number;
    currency: string;
    status: 'pending' | 'processed' | 'failed';
  };
}

const DispatchSchema: Schema = new Schema({
  incidentId: { type: Schema.Types.ObjectId, ref: 'Incident', required: true },
  vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'en_route', 'on_site', 'completed', 'cancelled'], default: 'pending' },
  priority: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
  assignedAt: { type: Date, default: Date.now },
  acceptedAt: { type: Date },
  arrivedAt: { type: Date },
  completedAt: { type: Date },
  sla: {
    targetArrivalTime: { type: Date, required: true },
    isBreached: { type: Boolean, default: false },
    breachSeverity: { type: String, enum: ['minor', 'major', 'critical'] }
  },
  telemetry: {
    currentLat: { type: Number },
    currentLng: { type: Number },
    heading: { type: Number },
    speed: { type: Number }
  },
  payout: {
    baseAmount: { type: Number, required: true },
    incentives: { type: Number, default: 0 },
    currency: { type: String, default: 'USD' },
    status: { type: String, enum: ['pending', 'processed', 'failed'], default: 'pending' }
  }
}, { timestamps: true });

export default mongoose.model<IDispatch>('Dispatch', DispatchSchema);
