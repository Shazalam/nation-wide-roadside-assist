import mongoose, { Schema, Document } from 'mongoose';

export interface IDispatch extends Document {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  vehicleType: string;
  fleetSize?: string;
  details: string;
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
}

const DispatchSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    vehicleType: { type: String, required: true },
    fleetSize: { type: String },
    details: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'assigned', 'in-progress', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

// Force clear model from cache to handle hot-reloads with schema changes
if (mongoose.models.Dispatch) {
  delete mongoose.models.Dispatch;
}

export const Dispatch = mongoose.model<IDispatch>('Dispatch', DispatchSchema);
