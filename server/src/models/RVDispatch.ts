import mongoose, { Schema, Document } from 'mongoose';

export interface IRVDispatch extends Document {
  vehicle: {
    type: string;
    length_ft: number;
    weight_lbs: number;
    telemetry: {
      lat: number;
      lng: number;
      diagnostic_codes?: string[];
    };
  };
  incident: {
    type: string;
    requires_heavy_duty: boolean;
    passengers: number;
    description?: string;
  };
  status: 'pending' | 'assigned' | 'in_progress' | 'resolved' | 'cancelled';
  assignedVendorId?: mongoose.Types.ObjectId;
  webhookUrl?: string;
  etaMinutes?: number;
  slaCompliance: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const RVDispatchSchema: Schema = new Schema({
  vehicle: {
    type: { type: String, required: true },
    length_ft: { type: Number, required: true },
    weight_lbs: { type: Number, required: true },
    telemetry: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      diagnostic_codes: [{ type: String }]
    }
  },
  incident: {
    type: { type: String, required: true },
    requires_heavy_duty: { type: Boolean, default: false },
    passengers: { type: Number, default: 1 },
    description: { type: String }
  },
  status: {
    type: String,
    enum: ['pending', 'assigned', 'in_progress', 'resolved', 'cancelled'],
    default: 'pending'
  },
  assignedVendorId: { type: Schema.Types.ObjectId, ref: 'Vendor' },
  webhookUrl: { type: String },
  etaMinutes: { type: Number },
  slaCompliance: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.models.RVDispatch || mongoose.model<IRVDispatch>('RVDispatch', RVDispatchSchema);
