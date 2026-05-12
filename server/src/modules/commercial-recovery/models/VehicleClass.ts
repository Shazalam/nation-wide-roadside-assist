import mongoose, { Schema, Document } from 'mongoose';

export interface IVehicleClass extends Document {
  class: number;
  weightRange: string;
  category: 'Light' | 'Medium' | 'Heavy' | 'Super Heavy';
  examples: string[];
  recommendedEquipment: string[];
}

const VehicleClassSchema: Schema = new Schema({
  class: { type: Number, required: true, unique: true },
  weightRange: { type: String, required: true },
  category: { type: String, enum: ['Light', 'Medium', 'Heavy', 'Super Heavy'], required: true },
  examples: [{ type: String }],
  recommendedEquipment: [{ type: String }]
});

export default mongoose.models.VehicleClass || mongoose.model<IVehicleClass>('VehicleClass', VehicleClassSchema);
