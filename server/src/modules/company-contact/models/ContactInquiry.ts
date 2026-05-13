import mongoose from 'mongoose';

const contactInquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  companyName: { type: String, required: true },
  businessEmail: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  inquiryType: { type: String, required: true },
  fleetSize: { type: String, required: true },
  message: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['received', 'routed', 'assigned', 'resolved'], 
    default: 'received' 
  },
  priority: {
    type: String,
    enum: ['normal', 'high', 'enterprise'],
    default: 'normal'
  }
}, { timestamps: true });

export const ContactInquiry = mongoose.model('ContactInquiry', contactInquirySchema);
