import mongoose, { Schema, Document } from 'mongoose';

export interface IIncident extends Document {
  incidentId: string;
  client: mongoose.Types.ObjectId;
  dispatcher?: mongoose.Types.ObjectId;
  vendor?: mongoose.Types.ObjectId;
  serviceType: 'tow' | 'flat_tire' | 'fuel_delivery' | 'lockout' | 'jump_start';
  status: 'pending' | 'dispatched' | 'en_route' | 'on_scene' | 'completed' | 'cancelled';
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  vehicle: {
    make: string;
    model: string;
    year: number;
    licensePlate: string;
  };
  priority: 'low' | 'medium' | 'high' | 'critical';
  sla: {
    estimatedArrival?: Date;
    actualArrival?: Date;
    completedAt?: Date;
  };
  notes?: string;
}

const IncidentSchema: Schema = new Schema({
  incidentId: { type: String, required: true, unique: true },
  client: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  dispatcher: { type: Schema.Types.ObjectId, ref: 'User' },
  vendor: { type: Schema.Types.ObjectId, ref: 'User' },
  serviceType: { 
    type: String, 
    enum: ['tow', 'flat_tire', 'fuel_delivery', 'lockout', 'jump_start'],
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'dispatched', 'en_route', 'on_scene', 'completed', 'cancelled'],
    default: 'pending'
  },
  location: {
    address: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  },
  vehicle: {
    make: String,
    model: String,
    year: Number,
    licensePlate: String
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  sla: {
    estimatedArrival: Date,
    actualArrival: Date,
    completedAt: Date
  },
  notes: String,
}, { timestamps: true });

export default mongoose.model<IIncident>('Incident', IncidentSchema);
