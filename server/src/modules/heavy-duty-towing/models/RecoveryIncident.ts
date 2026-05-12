import mongoose, { Schema, Document } from 'mongoose';

export interface IRecoveryIncident {
  incidentId: string;
  type: 'Heavy-Duty Towing' | 'Medium-Duty Recovery' | 'Super Heavy Recovery' | 'Tractor Trailer Recovery' | 'Semi Truck Towing' | 'RV & Bus Recovery' | 'Winch-Out Operations' | 'Accident Recovery';
  status: 'pending' | 'dispatched' | 'en_route' | 'on_site' | 'recovery_in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  vehicle: {
    vin: string;
    make: string;
    model: string;
    year: number;
    class: number; // 1-8
    weightClass: 'Light' | 'Medium' | 'Heavy' | 'Super Heavy';
  };
  location: {
    lat: number;
    lng: number;
    address: string;
    highway?: string;
    mileMarker?: string;
  };
  assignedVendor?: {
    vendorId: string;
    name: string;
    operatorName: string;
    vehicleId: string;
    eta: string;
  };
  telemetry: {
    lat?: number;
    lng?: number;
    speed?: number;
    heading?: number;
  };
  timestamps: {
    reported: Date;
    dispatched?: Date;
    enRoute?: Date;
    onScene?: Date;
    completed?: Date;
  };
}

const RecoveryIncidentSchema: Schema = new Schema({
  incidentId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  status: { type: String, required: true, default: 'pending' },
  priority: { type: String, required: true, default: 'medium' },
  customer: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String }
  },
  vehicle: {
    vin: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    class: { type: Number, required: true },
    weightClass: { type: String, required: true }
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true },
    highway: { type: String },
    mileMarker: { type: String }
  },
  assignedVendor: {
    vendorId: { type: String },
    name: { type: String },
    operatorName: { type: String },
    vehicleId: { type: String },
    eta: { type: String }
  },
  telemetry: {
    lat: { type: Number },
    lng: { type: Number },
    speed: { type: Number },
    heading: { type: Number }
  },
  timestamps: {
    reported: { type: Date, default: Date.now },
    dispatched: { type: Date },
    enRoute: { type: Date },
    onScene: { type: Date },
    completed: { type: Date }
  }
}, { timestamps: true });

export default mongoose.models.RecoveryIncident || mongoose.model<IRecoveryIncident & Document>('RecoveryIncident', RecoveryIncidentSchema);
