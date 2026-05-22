import mongoose from 'mongoose';

const towUnitSchema = new mongoose.Schema({
  unitId: { type: String, required: true, unique: true },
  vendorId: { type: String, required: true },
  type: { type: String, enum: ['LIGHT_DUTY', 'MEDIUM_DUTY', 'HEAVY_DUTY', 'ROTATOR'], required: true },
  status: { type: String, enum: ['AVAILABLE', 'EN_ROUTE', 'ON_SITE', 'OUT_OF_SERVICE'], default: 'AVAILABLE' },
  currentLocation: {
    lat: { type: Number },
    lng: { type: Number }
  },
  assignedIncident: { type: mongoose.Schema.Types.ObjectId, ref: 'DispatchCenterIncident' }
}, { timestamps: true });

export const TowUnit = mongoose.model('TowUnit', towUnitSchema);
