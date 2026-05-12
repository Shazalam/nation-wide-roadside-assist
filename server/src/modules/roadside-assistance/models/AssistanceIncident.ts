import mongoose, { Schema, Document } from 'mongoose';

export interface IAssistanceIncident {
  incidentId: string;
  type: 'towing' | 'tire_change' | 'fuel_delivery' | 'battery_jump' | 'lockout' | 'mobile_mechanic' | 'winch_out' | 'accident_assistance';
  status: 'pending' | 'dispatched' | 'en_route' | 'on_site' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  customer: {
    name: string;
    phone: string;
    id?: string;
  };
  vehicle: {
    make: string;
    model: string;
    year: number;
    vin?: string;
    color?: string;
    plate?: string;
  };
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  vendor?: {
    id: string;
    name: string;
    phone: string;
    etaMinutes?: number;
  };
  timestamps: {
    created: Date;
    dispatched?: Date;
    enRoute?: Date;
    onSite?: Date;
    completed?: Date;
  };
  sla: {
    targetEta: number;
    actualEta?: number;
    isCompliant: boolean;
  };
  billingId?: string;
}

const AssistanceIncidentSchema: Schema = new Schema({
  incidentId: { type: String, required: true, unique: true },
  type: { 
    type: String, 
    required: true, 
    enum: ['towing', 'tire_change', 'fuel_delivery', 'battery_jump', 'lockout', 'mobile_mechanic', 'winch_out', 'accident_assistance'] 
  },
  status: { 
    type: String, 
    required: true, 
    enum: ['pending', 'dispatched', 'en_route', 'on_site', 'completed', 'cancelled'],
    default: 'pending'
  },
  priority: { 
    type: String, 
    required: true, 
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  customer: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    id: { type: String }
  },
  vehicle: {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    vin: { type: String },
    color: { type: String },
    plate: { type: String }
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true }
  },
  vendor: {
    id: { type: String },
    name: { type: String },
    phone: { type: String },
    etaMinutes: { type: Number }
  },
  timestamps: {
    created: { type: Date, default: Date.now },
    dispatched: { type: Date },
    enRoute: { type: Date },
    onSite: { type: Date },
    completed: { type: Date }
  },
  sla: {
    targetEta: { type: Number, required: true },
    actualEta: { type: Number },
    isCompliant: { type: Boolean, default: true }
  },
  billingId: { type: String }
}, { timestamps: true });

export default mongoose.models.AssistanceIncident || mongoose.model<IAssistanceIncident & Document>('AssistanceIncident', AssistanceIncidentSchema);
