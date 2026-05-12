import mongoose, { Schema, Document } from 'mongoose';

export interface IFleetIncident extends Document {
  incidentId: string;
  vehicleId: string;
  fleetId: string;
  serviceType: 'TOW' | 'BATTERY' | 'TIRE' | 'LOCKOUT' | 'FUEL' | 'RECOVERY';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'dispatched' | 'enroute' | 'on-site' | 'completed' | 'cancelled';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  vendorId?: string;
  eta?: number; // minutes
  slaCompliance: boolean;
  telemetrySnapshot: {
    dtcCodes: string[];
    fuelLevel: number;
    speedAtIncident: number;
  };
  timestamps: {
    reportedAt: Date;
    dispatchedAt?: Date;
    completedAt?: Date;
  };
}

const FleetIncidentSchema: Schema = new Schema({
  incidentId: { type: String, required: true, unique: true },
  vehicleId: { type: String, required: true, index: true },
  fleetId: { type: String, required: true, index: true },
  serviceType: { 
    type: String, 
    enum: ['TOW', 'BATTERY', 'TIRE', 'LOCKOUT', 'FUEL', 'RECOVERY'],
    required: true 
  },
  priority: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
  status: { 
    type: String, 
    enum: ['pending', 'dispatched', 'enroute', 'on-site', 'completed', 'cancelled'],
    default: 'pending' 
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true }
  },
  vendorId: { type: String },
  eta: { type: Number },
  slaCompliance: { type: Boolean, default: true },
  telemetrySnapshot: {
    dtcCodes: [String],
    fuelLevel: Number,
    speedAtIncident: Number
  },
  timestamps: {
    reportedAt: { type: Date, default: Date.now },
    dispatchedAt: { type: Date },
    completedAt: { type: Date }
  }
}, { timestamps: true });

export default mongoose.model<IFleetIncident>('FleetIncident', FleetIncidentSchema);
