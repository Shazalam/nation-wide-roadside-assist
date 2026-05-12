import mongoose, { Schema, Document } from 'mongoose';

export interface IFleetVehicle {
  vehicleId: string;
  vin: string;
  make: string;
  model: string;
  year: number;
  class: number; // 1-8
  weight_lbs: number;
  type: string; // Box truck, Semi, etc.
  owner: string;
  telemetry: {
    lat: number;
    lng: number;
    speed: number;
    lastUpdated: Date;
  };
}

const FleetVehicleSchema: Schema = new Schema({
  vehicleId: { type: String, required: true, unique: true },
  vin: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  class: { type: Number, required: true, min: 1, max: 8 },
  weight_lbs: { type: Number, required: true },
  type: { type: String, required: true },
  owner: { type: String, required: true },
  telemetry: {
    lat: { type: Number },
    lng: { type: Number },
    speed: { type: Number },
    lastUpdated: { type: Date, default: Date.now }
  }
}, {
  timestamps: true
});

export default mongoose.models.FleetVehicle || mongoose.model<IFleetVehicle>('FleetVehicle', FleetVehicleSchema);
