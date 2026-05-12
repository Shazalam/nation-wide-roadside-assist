import mongoose, { Schema, Document } from 'mongoose';

export interface IFleetVehicle {
  vehicleId: string;
  fleetId: string; // The rental/logistics company ID
  vin: string;
  make: string;
  model: string;
  year: number;
  type: 'rental' | 'logistics' | 'commercial' | 'oem';
  status: 'active' | 'in-service' | 'maintenance' | 'down';
  currentLocation: {
    lat: number;
    lng: number;
    address?: string;
  };
  telemetry: {
    odometer: number;
    fuelLevel: number;
    batteryHealth: number;
    lastSignal: Date;
  };
  metadata: Record<string, any>;
}

const FleetVehicleSchema: Schema = new Schema({
  vehicleId: { type: String, required: true, unique: true },
  fleetId: { type: String, required: true, index: true },
  vin: { type: String, required: true, unique: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  type: { type: String, enum: ['rental', 'logistics', 'commercial', 'oem'], required: true },
  status: { type: String, enum: ['active', 'in-service', 'maintenance', 'down'], default: 'active' },
  currentLocation: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String }
  },
  telemetry: {
    odometer: { type: Number, default: 0 },
    fuelLevel: { type: Number, default: 100 },
    batteryHealth: { type: Number, default: 100 },
    lastSignal: { type: Date, default: Date.now }
  },
  metadata: { type: Schema.Types.Mixed, default: {} }
}, { timestamps: true });

export default mongoose.model<IFleetVehicle>('FleetVehicle', FleetVehicleSchema);
