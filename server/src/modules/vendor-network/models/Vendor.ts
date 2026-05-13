import mongoose, { Schema, Document } from 'mongoose';

export interface IVendor extends Document {
  name: string;
  status: 'online' | 'offline' | 'busy';
  location: {
    lat: number;
    lng: number;
  };
  supportedClasses: string[];
  rating: number;
  completedJobs: number;
}

const VendorSchema: Schema = new Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['online', 'offline', 'busy'], default: 'offline' },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  supportedClasses: [{ type: String }],
  rating: { type: Number, default: 5.0 },
  completedJobs: { type: Number, default: 0 }
}, { timestamps: true });

export const Vendor = mongoose.models.Vendor || mongoose.model<IVendor>('Vendor', VendorSchema);
