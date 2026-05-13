import mongoose from 'mongoose';

const dispatchIncidentSchema = new mongoose.Schema({
  incidentId: { type: String, required: true, unique: true },
  fleetId: { type: String, required: true },
  vehicleType: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  incidentType: { type: String, required: true },
  priority: { type: String, enum: ['NORMAL', 'HIGH', 'CRITICAL'], default: 'NORMAL' },
  status: { type: String, enum: ['PENDING', 'ROUTING', 'EN_ROUTE', 'ON_SITE', 'RESOLVED'], default: 'PENDING' },
  assignedNode: { type: String },
  assignedTowUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'TowUnit' }
}, { timestamps: true });

export const DispatchIncident = mongoose.model('DispatchIncident', dispatchIncidentSchema);
