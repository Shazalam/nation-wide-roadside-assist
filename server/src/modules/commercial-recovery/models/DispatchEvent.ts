import mongoose, { Schema, Document } from 'mongoose';

export interface IDispatchEvent extends Document {
  incidentId: mongoose.Types.ObjectId;
  operatorId: mongoose.Types.ObjectId;
  eventType: 'assigned' | 'accepted' | 'enroute' | 'arrived' | 'towing' | 'completed';
  timestamp: Date;
  metadata: any;
}

const DispatchEventSchema: Schema = new Schema({
  incidentId: { type: Schema.Types.ObjectId, ref: 'RecoveryIncident', required: true },
  operatorId: { type: Schema.Types.ObjectId, ref: 'TowOperator', required: true },
  eventType: { 
    type: String, 
    enum: ['assigned', 'accepted', 'enroute', 'arrived', 'towing', 'completed'],
    required: true 
  },
  timestamp: { type: Date, default: Date.now },
  metadata: { type: Schema.Types.Mixed }
}, {
  timestamps: true
});

export default mongoose.models.DispatchEvent || mongoose.model<IDispatchEvent>('DispatchEvent', DispatchEventSchema);
