import mongoose, { Schema, Document } from 'mongoose';

export interface ITowOperator extends Document {
  operatorId: string;
  name: string;
  company: string;
  certification: string[];
  equipment: {
    type: 'Light' | 'Medium' | 'Heavy' | 'Super Heavy';
    capacity_lbs: number;
    hasWinch: boolean;
  };
  status: 'available' | 'assigned' | 'busy' | 'offline';
  location: {
    lat: number;
    lng: number;
    lastUpdated: Date;
  };
  rating: number;
}

const TowOperatorSchema: Schema = new Schema({
  operatorId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  company: { type: String, required: true },
  certification: [{ type: String }],
  equipment: {
    type: { type: String, enum: ['Light', 'Medium', 'Heavy', 'Super Heavy'], required: true },
    capacity_lbs: { type: Number, required: true },
    hasWinch: { type: Boolean, default: false }
  },
  status: { 
    type: String, 
    enum: ['available', 'assigned', 'busy', 'offline'], 
    default: 'available' 
  },
  location: {
    lat: { type: Number },
    lng: { type: Number },
    lastUpdated: { type: Date, default: Date.now }
  },
  rating: { type: Number, default: 5 }
}, {
  timestamps: true
});

export default mongoose.models.TowOperator || mongoose.model<ITowOperator>('TowOperator', TowOperatorSchema);
