import mongoose, { Schema, Document } from 'mongoose';

export interface IInsuranceClaim {
  claimId: string;
  policyNumber: string;
  carrier: string;
  status: 'pending_validation' | 'validated' | 'dispatched' | 'active' | 'resolved' | 'billing_ready' | 'closed';
  incidentType: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  memberInfo: {
    name: string;
    phone: string;
    email?: string;
  };
  vehicleInfo: {
    make: string;
    model: string;
    year: number;
    vin?: string;
    color?: string;
  };
  slaCompliance: {
    targetEta: number;
    actualEta?: number;
    isCompliant: boolean;
  };
  billingStatus: 'none' | 'pending' | 'invoiced' | 'paid';
  createdAt: Date;
  updatedAt: Date;
}

const InsuranceClaimSchema: Schema = new Schema({
  claimId: { type: String, required: true, unique: true },
  policyNumber: { type: String, required: true },
  carrier: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending_validation', 'validated', 'dispatched', 'active', 'resolved', 'billing_ready', 'closed'],
    default: 'pending_validation'
  },
  incidentType: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true }
  },
  memberInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String }
  },
  vehicleInfo: {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    vin: { type: String },
    color: { type: String }
  },
  slaCompliance: {
    targetEta: { type: Number, required: true },
    actualEta: { type: Number },
    isCompliant: { type: Boolean, default: true }
  },
  billingStatus: {
    type: String,
    enum: ['none', 'pending', 'invoiced', 'paid'],
    default: 'none'
  }
}, { timestamps: true });

export default mongoose.model<IInsuranceClaim>('InsuranceClaim', InsuranceClaimSchema);
