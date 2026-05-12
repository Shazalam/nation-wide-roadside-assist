import mongoose, { Schema, Document } from 'mongoose';

export interface IVendorLocation {
  vendorId: string;
  name: string;
  phone: string;
  status: 'available' | 'busy' | 'offline';
  location: {
    lat: number;
    lng: number;
    heading: number;
    lastUpdated: Date;
  };
  capabilities: ('light_duty' | 'medium_duty' | 'heavy_duty' | 'flatbed' | 'lockout' | 'battery')[];
  currentIncidentId?: string;
}

const VendorLocationSchema: Schema = new Schema({
  vendorId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, required: true, enum: ['available', 'busy', 'offline'], default: 'offline' },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    heading: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
  },
  capabilities: [{ type: String, enum: ['light_duty', 'medium_duty', 'heavy_duty', 'flatbed', 'lockout', 'battery'] }],
  currentIncidentId: { type: String }
}, { timestamps: true });

export default mongoose.models.VendorLocation || mongoose.model<IVendorLocation>('VendorLocation', VendorLocationSchema);
