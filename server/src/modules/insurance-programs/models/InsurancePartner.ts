import mongoose, { Schema, Document } from 'mongoose';

export interface IInsurancePartner extends Document {
  name: string;
  partnerType: 'carrier' | 'motor_club' | 'fleet_insurer' | 'oem';
  apiKey: string;
  apiConfig: {
    webhookUrl?: string;
    authMethod: 'bearer' | 'oauth2';
  };
  slaTargets: {
    maxEta: number;
    resolutionRate: number;
  };
  activeIncidents: number;
  totalClaimsHandled: number;
  systemStatus: 'optimal' | 'degraded' | 'maintenance';
}

const InsurancePartnerSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  partnerType: { 
    type: String, 
    enum: ['carrier', 'motor_club', 'fleet_insurer', 'oem'],
    required: true 
  },
  apiKey: { type: String, required: true },
  apiConfig: {
    webhookUrl: { type: String },
    authMethod: { type: String, enum: ['bearer', 'oauth2'], default: 'bearer' }
  },
  slaTargets: {
    maxEta: { type: Number, default: 30 },
    resolutionRate: { type: Number, default: 95 }
  },
  activeIncidents: { type: Number, default: 0 },
  totalClaimsHandled: { type: Number, default: 0 },
  systemStatus: { 
    type: String, 
    enum: ['optimal', 'degraded', 'maintenance'],
    default: 'optimal'
  }
}, { timestamps: true });

export default mongoose.model<IInsurancePartner>('InsurancePartner', InsurancePartnerSchema);
