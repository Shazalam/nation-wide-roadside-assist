import mongoose, { Schema, Document } from 'mongoose';

export interface IVendorTelemetry extends Document {
  vendorId: string;
  activeTrucks: number;
  availableCapacity: number;
  currentJobs: number;
  averageEta: number;
  location: {
    lat: number;
    lng: number;
  };
  lastPing: Date;
}

const VendorTelemetrySchema: Schema = new Schema({
  vendorId: { type: String, required: true },
  activeTrucks: { type: Number, default: 0 },
  availableCapacity: { type: Number, default: 100 },
  currentJobs: { type: Number, default: 0 },
  averageEta: { type: Number, default: 30 },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  lastPing: { type: Date, default: Date.now }
}, {
  timestamps: true
});

export default mongoose.models.VendorTelemetry || mongoose.model<IVendorTelemetry>('VendorTelemetry', VendorTelemetrySchema);
