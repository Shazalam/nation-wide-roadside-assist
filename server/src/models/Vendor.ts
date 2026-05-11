import mongoose, { Schema, Document } from 'mongoose';

export interface IVendor extends Document {
  name: string;
  email: string;
  phone: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  serviceTypes: string[];
  rating: number;
  status: 'certified' | 'warning' | 'suspended';
  coverageRadius: number; // in miles
  capacity: {
    total: number;
    active: number;
  };
  compliance: {
    insuranceVerified: boolean;
    licenseVerified: boolean;
    lastAuditDate: Date;
  };
}

const VendorSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true }
  },
  serviceTypes: [{ type: String }],
  rating: { type: Number, default: 5.0 },
  status: { type: String, enum: ['certified', 'warning', 'suspended'], default: 'certified' },
  coverageRadius: { type: Number, default: 50 },
  capacity: {
    total: { type: Number, default: 5 },
    active: { type: Number, default: 0 }
  },
  compliance: {
    insuranceVerified: { type: Boolean, default: false },
    licenseVerified: { type: Boolean, default: false },
    lastAuditDate: { type: Date, default: Date.now }
  }
}, { timestamps: true });

export default mongoose.model<IVendor>('Vendor', VendorSchema);
