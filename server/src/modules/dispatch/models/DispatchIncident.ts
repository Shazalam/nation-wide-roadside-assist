import mongoose, { Schema } from 'mongoose';

export interface IDispatchIncident {
  incidentId: string;
  customer: {
    name: string;
    phone: string;
    policyNumber?: string;
  };
  vehicle: {
    make: string;
    model: string;
    year: number;
    vin?: string;
    color?: string;
  };
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  serviceType: 'towing' | 'lockout' | 'battery' | 'tire_change' | 'fuel_delivery' | 'winch_out';
  status: 'pending' | 'assigning' | 'dispatched' | 'en_route' | 'on_site' | 'completed' | 'cancelled' | 'escalated';
  priority: 'low' | 'medium' | 'high' | 'critical';
  vendorId?: string;
  etaMinutes?: number;
  slaTarget: number; // in minutes
  isSlaCompliant: boolean;
  escalationLevel: number;
  timestamps: {
    created: Date;
    assigned?: Date;
    completed?: Date;
  };
}

const DispatchIncidentSchema = new Schema<IDispatchIncident>({
  incidentId: { type: String, required: true, unique: true },
  customer: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    policyNumber: { type: String }
  },
  vehicle: {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    vin: { type: String },
    color: { type: String }
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true }
  },
  serviceType: { 
    type: String, 
    enum: ['towing', 'lockout', 'battery', 'tire_change', 'fuel_delivery', 'winch_out'],
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'assigning', 'dispatched', 'en_route', 'on_site', 'completed', 'cancelled', 'escalated'],
    default: 'pending' 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium' 
  },
  vendorId: { type: String },
  etaMinutes: { type: Number },
  slaTarget: { type: Number, required: true },
  isSlaCompliant: { type: Boolean, default: true },
  escalationLevel: { type: Number, default: 0 },
  timestamps: {
    created: { type: Date, default: Date.now },
    assigned: { type: Date },
    completed: { type: Date }
  }
}, { timestamps: true });

export default mongoose.models.DispatchIncident || mongoose.model<IDispatchIncident>('DispatchIncident', DispatchIncidentSchema);
