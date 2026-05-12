import mongoose, { Schema } from 'mongoose';

export interface IVendorLocation {
  vendorId: string;
  name: string;
  status: 'available' | 'busy' | 'offline';
  capabilities: string[];
  currentLocation: {
    lat: number;
    lng: number;
  };
  lastUpdate: Date;
}

const VendorLocationSchema = new Schema<IVendorLocation>({
  vendorId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  status: { type: String, enum: ['available', 'busy', 'offline'], default: 'available' },
  capabilities: [String],
  currentLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  lastUpdate: { type: Date, default: Date.now }
});

export default mongoose.models.VendorLocation || mongoose.model<IVendorLocation>('VendorLocation', VendorLocationSchema);
