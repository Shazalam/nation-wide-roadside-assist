import mongoose, { Schema, Document } from 'mongoose';

export interface IRecoveryIncident extends Document {
  incidentId: string;
  vehicleId: mongoose.Types.ObjectId;
  type: 'Heavy-Duty Towing' | 'Winch-Out' | 'Accident Recovery' | 'Trailer Recovery' | 'Mobile Repair';
  status: 'reported' | 'classifying' | 'dispatching' | 'enroute' | 'on-site' | 'resolved' | 'billing';
  priority: 'low' | 'medium' | 'high' | 'critical';
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  details: string;
  reportedAt: Date;
  resolvedAt?: Date;
}

const RecoveryIncidentSchema: Schema = new Schema({
  incidentId: { type: String, required: true, unique: true },
  vehicleId: { type: Schema.Types.ObjectId, ref: 'FleetVehicle', required: true },
  type: { 
    type: String, 
    required: true,
    enum: ['Heavy-Duty Towing', 'Winch-Out', 'Accident Recovery', 'Trailer Recovery', 'Mobile Repair']
  },
  status: { 
    type: String, 
    required: true,
    enum: ['reported', 'classifying', 'dispatching', 'enroute', 'on-site', 'resolved', 'billing'],
    default: 'reported'
  },
  priority: { 
    type: String, 
    required: true,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  location: {
    address: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  },
  details: { type: String },
  reportedAt: { type: Date, default: Date.now },
  resolvedAt: { type: Date }
}, {
  timestamps: true
});

export default mongoose.models.RecoveryIncident || mongoose.model<IRecoveryIncident>('RecoveryIncident', RecoveryIncidentSchema);
