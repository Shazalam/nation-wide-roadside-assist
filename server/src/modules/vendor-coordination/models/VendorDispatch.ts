import mongoose from 'mongoose';

const vendorDispatchSchema = new mongoose.Schema({
  incidentId: {
    type: String,
    required: true,
    unique: true
  },
  vendorId: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    enum: ['towing', 'mechanic', 'fuel', 'tire', 'winch_out', 'battery', 'lockout', 'accident'],
    required: true
  },
  vehicleClass: {
    type: String,
    enum: ['Class_1', 'Class_2', 'Class_3', 'Class_4', 'Class_5', 'Class_6', 'Class_7', 'Class_8'],
    required: true
  },
  status: {
    type: String,
    enum: ['dispatched', 'en_route', 'on_scene', 'completed', 'canceled'],
    default: 'dispatched'
  },
  location: {
    pickup: String,
    dropoff: String
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  metrics: {
    eta: Number,
    responseDuration: Number,
    slaCompliant: Boolean
  }
}, { timestamps: true });

export const VendorDispatch = mongoose.model('VendorDispatch', vendorDispatchSchema);
