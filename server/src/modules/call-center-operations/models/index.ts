import mongoose, { Schema } from 'mongoose';

const CallIncidentSchema = new Schema({
  callId: { type: String, required: true },
  callerPhone: { type: String, required: true },
  status: { type: String, enum: ['queued', 'in-progress', 'resolved', 'escalated'], default: 'queued' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  location: { type: String },
  incidentType: { type: String }
}, { timestamps: true });
export const CallIncident = mongoose.models.CallIncident || mongoose.model('CallIncident', CallIncidentSchema);

const DispatchQueueSchema = new Schema({
  callId: { type: Schema.Types.ObjectId, ref: 'CallIncident' },
  status: { type: String, default: 'pending_assignment' },
  estimatedWaitTime: { type: Number, default: 0 }
}, { timestamps: true });
export const DispatchQueue = mongoose.models.DispatchQueue || mongoose.model('DispatchQueue', DispatchQueueSchema);

const VendorAssignmentSchema = new Schema({
  dispatchId: { type: Schema.Types.ObjectId, ref: 'DispatchQueue' },
  vendorId: { type: String, required: true },
  status: { type: String, default: 'assigned' },
  eta: { type: Number }
}, { timestamps: true });
export const VendorAssignment = mongoose.models.VendorAssignment || mongoose.model('VendorAssignment', VendorAssignmentSchema);

const FleetTelemetrySchema = new Schema({
  vendorId: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  status: { type: String, default: 'en_route' }
}, { timestamps: true });
export const FleetTelemetry = mongoose.models.FleetTelemetry || mongoose.model('FleetTelemetry', FleetTelemetrySchema);

const SLAMetricsSchema = new Schema({
  metricType: { type: String, required: true },
  value: { type: Number, required: true },
  target: { type: Number, required: true }
}, { timestamps: true });
export const SLAMetrics = mongoose.models.SLAMetrics || mongoose.model('SLAMetrics', SLAMetricsSchema);

const EscalationWorkflowSchema = new Schema({
  callId: { type: Schema.Types.ObjectId, ref: 'CallIncident' },
  reason: { type: String, required: true },
  escalatedTo: { type: String, required: true },
  status: { type: String, default: 'open' }
}, { timestamps: true });
export const EscalationWorkflow = mongoose.models.EscalationWorkflow || mongoose.model('EscalationWorkflow', EscalationWorkflowSchema);

const OperationalAnalyticsSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  totalCalls: { type: Number, default: 0 },
  avgHandleTime: { type: Number, default: 0 },
  slaCompliance: { type: Number, default: 0 }
}, { timestamps: true });
export const OperationalAnalytics = mongoose.models.OperationalAnalytics || mongoose.model('OperationalAnalytics', OperationalAnalyticsSchema);
