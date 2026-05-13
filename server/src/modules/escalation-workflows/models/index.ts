import mongoose, { Schema } from 'mongoose';

const EscalationIncidentSchema = new Schema({
  incidentId: { type: String, required: true },
  severity: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'], default: 'Medium' },
  status: { type: String, enum: ['detected', 'assessing', 'escalated', 'recovering', 'resolved'], default: 'detected' },
  type: { type: String, required: true },
  location: { type: String }
}, { timestamps: true });
export const EscalationIncident = mongoose.models.EscalationIncident || mongoose.model('EscalationIncident', EscalationIncidentSchema);

const SLABreachSchema = new Schema({
  incidentId: { type: Schema.Types.ObjectId, ref: 'EscalationIncident' },
  breachType: { type: String, required: true },
  timeOverdue: { type: Number, default: 0 },
  riskScore: { type: Number, default: 0 }
}, { timestamps: true });
export const SLABreach = mongoose.models.SLABreach || mongoose.model('SLABreach', SLABreachSchema);

const VendorFailureSchema = new Schema({
  incidentId: { type: Schema.Types.ObjectId, ref: 'EscalationIncident' },
  vendorId: { type: String, required: true },
  failureReason: { type: String, required: true },
  reassignmentStatus: { type: String, default: 'pending' }
}, { timestamps: true });
export const VendorFailure = mongoose.models.VendorFailure || mongoose.model('VendorFailure', VendorFailureSchema);

const RecoveryWorkflowSchema = new Schema({
  incidentId: { type: Schema.Types.ObjectId, ref: 'EscalationIncident' },
  stepsTaken: [{ type: String }],
  currentStep: { type: String, required: true },
  supervisorAssigned: { type: String }
}, { timestamps: true });
export const RecoveryWorkflow = mongoose.models.RecoveryWorkflow || mongoose.model('RecoveryWorkflow', RecoveryWorkflowSchema);

const FleetDowntimeSchema = new Schema({
  vehicleId: { type: String, required: true },
  class: { type: String, required: true },
  downtimeMinutes: { type: Number, default: 0 },
  financialImpactScore: { type: Number, default: 0 }
}, { timestamps: true });
export const FleetDowntime = mongoose.models.FleetDowntime || mongoose.model('FleetDowntime', FleetDowntimeSchema);

const SupervisorInterventionSchema = new Schema({
  incidentId: { type: Schema.Types.ObjectId, ref: 'EscalationIncident' },
  supervisorId: { type: String, required: true },
  actionTaken: { type: String, required: true },
  resolutionTime: { type: Number }
}, { timestamps: true });
export const SupervisorIntervention = mongoose.models.SupervisorIntervention || mongoose.model('SupervisorIntervention', SupervisorInterventionSchema);

const IncidentAnalyticsSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  totalEscalations: { type: Number, default: 0 },
  recoveryRate: { type: Number, default: 0 },
  avgResolutionTime: { type: Number, default: 0 }
}, { timestamps: true });
export const IncidentAnalytics = mongoose.models.IncidentAnalytics || mongoose.model('IncidentAnalytics', IncidentAnalyticsSchema);
