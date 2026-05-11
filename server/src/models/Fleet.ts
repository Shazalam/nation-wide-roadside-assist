import mongoose, { Schema, Document } from 'mongoose';

export interface IFleet extends Document {
  owner: mongoose.Types.ObjectId;
  name: string;
  type: 'towing_truck' | 'flatbed' | 'service_vehicle';
  licensePlate: string;
  status: 'active' | 'maintenance' | 'out_of_service';
  currentLocation?: {
    coordinates: [number, number];
    lastUpdated: Date;
  };
  telemetry: {
    fuelLevel?: number;
    mileage?: number;
    batteryStatus?: string;
  };
}

const FleetSchema: Schema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['towing_truck', 'flatbed', 'service_vehicle'], 
    required: true 
  },
  licensePlate: { type: String, required: true, unique: true },
  status: { 
    type: String, 
    enum: ['active', 'maintenance', 'out_of_service'], 
    default: 'active' 
  },
  currentLocation: {
    coordinates: [Number],
    lastUpdated: { type: Date, default: Date.now },
  },
  telemetry: {
    fuelLevel: Number,
    mileage: Number,
    batteryStatus: String,
  },
}, { timestamps: true });

FleetSchema.index({ 'currentLocation.coordinates': '2dsphere' });

export default mongoose.model<IFleet>('Fleet', FleetSchema);
