import mongoose from 'mongoose';

const dispatchQueueSchema = new mongoose.Schema({
  region: { type: String, required: true, unique: true },
  activeIncidents: { type: Number, default: 0 },
  status: { type: String, enum: ['NOMINAL', 'HIGH_LOAD', 'CRITICAL'], default: 'NOMINAL' },
  averageEta: { type: Number, default: 0 } // in minutes
}, { timestamps: true });

export const DispatchQueue = mongoose.model('DispatchQueue', dispatchQueueSchema);
