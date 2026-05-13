import mongoose, { Schema, Document } from 'mongoose';

export interface IRepairIncident extends Document {
  incidentId: string;
  type: string;
  status: 'requested' | 'dispatching' | 'en_route' | 'on_scene' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  vehicle: {
    make: string;
    model: string;
    year: number;
    vin?: string;
    fleetId?: string;
  };
  technician?: {
    id: string;
    name: string;
    truckId: string;
  };
  telemetry: {
    etaMinutes?: number;
    distanceMiles?: number;
    lastUpdate: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

const RepairIncidentSchema: Schema = new Schema({
  incidentId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['requested', 'dispatching', 'en_route', 'on_scene', 'in_progress', 'completed', 'cancelled'],
    default: 'requested' 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium' 
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true }
  },
  vehicle: {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number },
    vin: { type: String },
    fleetId: { type: String }
  },
  technician: {
    id: { type: String },
    name: { type: String },
    truckId: { type: String }
  },
  telemetry: {
    etaMinutes: { type: Number },
    distanceMiles: { type: Number },
    lastUpdate: { type: Date, default: Date.now }
  }
}, { timestamps: true });

export default mongoose.models.RepairIncident || mongoose.model<IRepairIncident>('RepairIncident', RepairIncidentSchema);
