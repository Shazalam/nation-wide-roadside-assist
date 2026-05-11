import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceRequest extends Document {
  client: mongoose.Types.ObjectId;
  dispatcher?: mongoose.Types.ObjectId;
  vendor?: mongoose.Types.ObjectId;
  type: 'towing' | 'lockout' | 'jumpstart' | 'fuel' | 'tire';
  status: 'pending' | 'dispatched' | 'en_route' | 'on_site' | 'completed' | 'cancelled';
  location: {
    address: string;
    coordinates: [number, number]; // [longitude, latitude]
  };
  vehicle: {
    make: string;
    model: string;
    year: number;
    vin?: string;
  };
  priority: 'low' | 'medium' | 'high' | 'critical';
  notes?: string;
  eta?: Date;
  completedAt?: Date;
}

const ServiceRequestSchema: Schema = new Schema({
  client: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  dispatcher: { type: Schema.Types.ObjectId, ref: 'User' },
  vendor: { type: Schema.Types.ObjectId, ref: 'User' },
  type: { 
    type: String, 
    enum: ['towing', 'lockout', 'jumpstart', 'fuel', 'tire'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'dispatched', 'en_route', 'on_site', 'completed', 'cancelled'], 
    default: 'pending' 
  },
  location: {
    address: { type: String, required: true },
    coordinates: { type: [Number], required: true }, // GeoJSON format
  },
  vehicle: {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: Number,
    vin: String,
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'], 
    default: 'medium' 
  },
  notes: String,
  eta: Date,
  completedAt: Date,
}, { timestamps: true });

// Index for geo-spatial queries
ServiceRequestSchema.index({ 'location.coordinates': '2dsphere' });

export default mongoose.model<IServiceRequest>('ServiceRequest', ServiceRequestSchema);
