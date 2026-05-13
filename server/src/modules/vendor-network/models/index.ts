import mongoose, { Schema } from 'mongoose';

// DispatchIncident
const DispatchIncidentSchema = new Schema({
  incidentId: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, enum: ['pending', 'assigned', 'in-progress', 'completed'], default: 'pending' },
  location: { type: String, required: true },
  eta: { type: String },
  vendorAssigned: { type: Schema.Types.ObjectId, ref: 'Vendor' }
}, { timestamps: true });
export const DispatchIncident = mongoose.models.DispatchIncident || mongoose.model('DispatchIncident', DispatchIncidentSchema);

// FleetCoverage
const FleetCoverageSchema = new Schema({
  region: { type: String, required: true },
  activeVendors: { type: Number, default: 0 },
  densityScore: { type: Number, default: 0 }
}, { timestamps: true });
export const FleetCoverage = mongoose.models.FleetCoverage || mongoose.model('FleetCoverage', FleetCoverageSchema);

// SLAMetrics
const SLAMetricsSchema = new Schema({
  metricName: { type: String, required: true },
  value: { type: Number, required: true },
  target: { type: Number, required: true },
  period: { type: String, required: true }
}, { timestamps: true });
export const SLAMetrics = mongoose.models.SLAMetrics || mongoose.model('SLAMetrics', SLAMetricsSchema);

// VendorAvailability
const VendorAvailabilitySchema = new Schema({
  vendorId: { type: Schema.Types.ObjectId, ref: 'Vendor', required: true },
  isAvailable: { type: Boolean, default: true },
  lastPing: { type: Date, default: Date.now }
}, { timestamps: true });
export const VendorAvailability = mongoose.models.VendorAvailability || mongoose.model('VendorAvailability', VendorAvailabilitySchema);

// RecoveryOperation
const RecoveryOperationSchema = new Schema({
  incidentId: { type: Schema.Types.ObjectId, ref: 'DispatchIncident', required: true },
  vehicleClass: { type: String, required: true },
  equipmentUsed: [{ type: String }],
  success: { type: Boolean, default: true }
}, { timestamps: true });
export const RecoveryOperation = mongoose.models.RecoveryOperation || mongoose.model('RecoveryOperation', RecoveryOperationSchema);

// OperationalAnalytics
const OperationalAnalyticsSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  totalDispatches: { type: Number, default: 0 },
  avgResponseTime: { type: Number, default: 0 },
  activeRegions: { type: Number, default: 0 }
}, { timestamps: true });
export const OperationalAnalytics = mongoose.models.OperationalAnalytics || mongoose.model('OperationalAnalytics', OperationalAnalyticsSchema);
