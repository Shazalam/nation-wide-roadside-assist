import mongoose from 'mongoose';

const tripContinuationSchema = new mongoose.Schema({
  incidentId: {
    type: String,
    required: true,
    unique: true
  },
  customerId: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    enum: ['rental_vehicle', 'hotel_lodging', 'ride_share', 'flight', 'other'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'options_generated', 'assigned', 'en_route', 'confirmed', 'completed', 'escalated'],
    default: 'pending'
  },
  location: {
    pickup: String,
    dropoff: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  provider: {
    name: String,
    contact: String,
    eta: Number
  },
  metrics: {
    resolutionTime: Number,
    customerSatisfaction: Number,
    slaCompliant: Boolean
  }
}, { timestamps: true });

export const ContinuationIncident = mongoose.model('ContinuationIncident', tripContinuationSchema);
