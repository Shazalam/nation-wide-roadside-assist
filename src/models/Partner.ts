import mongoose, { Schema, Document } from 'mongoose';

export interface IPartner extends Document {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  companyType: string;
  fleetSize?: string;
  region: string;
  services: string[];
  message: string;
  status: 'pending' | 'contacted' | 'approved' | 'rejected';
}

const PartnerSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    companyType: { type: String, required: true },
    fleetSize: { type: String },
    region: { type: String, required: true },
    services: [{ type: String }],
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

// Force clear model from cache to handle hot-reloads with schema changes
if (mongoose.models.Partner) {
  delete mongoose.models.Partner;
}

export const Partner = mongoose.model<IPartner>('Partner', PartnerSchema);
