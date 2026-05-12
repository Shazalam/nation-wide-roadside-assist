import mongoose, { Schema, Document } from 'mongoose';

export interface IFleet extends Document {
  enterpriseOwner: string; // e.g., 'Enterprise', 'Hertz', 'Penske'
  name: string;
  type: 'rental' | 'logistics' | 'commercial' | 'recovery';
  subType: string; // e.g., 'Economy', 'Full-size', 'Freight-liner', 'Flatbed'
  licensePlate: string;
  vin: string;
  status: 'active' | 'maintenance' | 'out_of_service' | 'dispatched';
  currentLocation?: {
    type: string;
    coordinates: [number, number];
    lastUpdated: Date;
  };
  telemetry: {
    fuelLevel?: number;
    mileage?: number;
    batteryStatus?: string;
    engineHealth?: number;
    nextServiceDue?: Date;
  };
  metadata: Map<string, any>;
}

const FleetSchema: Schema = new Schema({
  enterpriseOwner: { type: String, required: true, index: true },
  name: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['rental', 'logistics', 'commercial', 'recovery'], 
    required: true 
  },
  subType: { type: String },
  licensePlate: { type: String, required: true, unique: true },
  vin: { type: String, required: true, unique: true },
  status: { 
    type: String, 
    enum: ['active', 'maintenance', 'out_of_service', 'dispatched'], 
    default: 'active' 
  },
  currentLocation: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], index: '2dsphere' },
    lastUpdated: { type: Date, default: Date.now },
  },
  telemetry: {
    fuelLevel: Number,
    mileage: Number,
    batteryStatus: String,
    engineHealth: { type: Number, min: 0, max: 100 },
    nextServiceDue: Date,
  },
  metadata: { type: Map, of: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export default mongoose.model<IFleet>('Fleet', FleetSchema);
