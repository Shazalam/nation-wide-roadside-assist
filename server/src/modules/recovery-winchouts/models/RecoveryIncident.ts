import mongoose, { Schema, Document } from 'mongoose';

export interface IRecoveryIncident extends Document {
  incidentId: string;
  serviceType: 'light' | 'medium' | 'heavy' | 'super_heavy';
  vehicleClass: number;
  weightLbs: number;
  status: 'reported' | 'validated' | 'dispatched' | 'en_route' | 'on_scene' | 'in_progress' | 'completed';
  priority: 'standard' | 'high' | 'critical';
  location: {
    lat: number;
    lng: number;
    address: string;
    zoneType: 'highway' | 'offroad' | 'hazard' | 'urban';
  };
  telemetry: {
    etaMinutes: number;
    towUnitId?: string;
    lastUpdate: Date;
  };
  fleetId?: string;
  createdAt: Date;
}

const RecoveryIncidentSchema: Schema = new Schema({
  incidentId: { type: String, required: true, unique: true },
  serviceType: { type: String, enum: ['light', 'medium', 'heavy', 'super_heavy'], required: true },
  vehicleClass: { type: Number, min: 1, max: 8, required: true },
  weightLbs: { type: Number, required: true },
  status: { type: String, enum: ['reported', 'validated', 'dispatched', 'en_route', 'on_scene', 'in_progress', 'completed'], default: 'reported' },
  priority: { type: String, enum: ['standard', 'high', 'critical'], default: 'standard' },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true },
    zoneType: { type: String, enum: ['highway', 'offroad', 'hazard', 'urban'], default: 'highway' }
  },
  telemetry: {
    etaMinutes: { type: Number },
    towUnitId: { type: String },
    lastUpdate: { type: Date, default: Date.now }
  },
  fleetId: { type: String }
}, { timestamps: true });

export default mongoose.models.RecoveryIncident || mongoose.model<IRecoveryIncident>('RecoveryIncident', RecoveryIncidentSchema);
