import mongoose, { Schema } from 'mongoose';

const SLAMetricSchema = new Schema({
  metricName: { type: String, required: true },
  currentValue: { type: Number, required: true },
  targetValue: { type: Number, required: true },
  status: { type: String, enum: ['compliant', 'at-risk', 'breached'], default: 'compliant' }
}, { timestamps: true });
export const SLAMetric = mongoose.models.SLAMetric || mongoose.model('SLAMetric', SLAMetricSchema);

const DispatchAnalyticsSchema = new Schema({
  dispatchId: { type: String, required: true },
  timeToAssign: { type: Number, required: true },
  routeEfficiencyScore: { type: Number, default: 0 },
  aiAssisted: { type: Boolean, default: false }
}, { timestamps: true });
export const DispatchAnalytics = mongoose.models.DispatchAnalytics || mongoose.model('DispatchAnalytics', DispatchAnalyticsSchema);

const VendorPerformanceSchema = new Schema({
  vendorId: { type: String, required: true },
  successRate: { type: Number, required: true },
  avgEtaDeviation: { type: Number, default: 0 },
  complianceScore: { type: Number, required: true }
}, { timestamps: true });
export const VendorPerformance = mongoose.models.VendorPerformance || mongoose.model('VendorPerformance', VendorPerformanceSchema);

const FleetTelemetrySchema = new Schema({
  vehicleId: { type: String, required: true },
  classType: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  status: { type: String, default: 'active' }
}, { timestamps: true });
export const FleetTelemetry = mongoose.models.FleetTelemetry || mongoose.model('FleetTelemetry', FleetTelemetrySchema);

const OperationalHeatmapSchema = new Schema({
  region: { type: String, required: true },
  incidentDensity: { type: Number, required: true },
  avgResolutionTime: { type: Number, required: true }
}, { timestamps: true });
export const OperationalHeatmap = mongoose.models.OperationalHeatmap || mongoose.model('OperationalHeatmap', OperationalHeatmapSchema);

const ETAForecastSchema = new Schema({
  incidentId: { type: String, required: true },
  predictedEta: { type: Number, required: true },
  actualEta: { type: Number },
  accuracyScore: { type: Number }
}, { timestamps: true });
export const ETAForecast = mongoose.models.ETAForecast || mongoose.model('ETAForecast', ETAForecastSchema);

const IncidentResolutionSchema = new Schema({
  incidentId: { type: String, required: true },
  resolutionTime: { type: Number, required: true },
  slaMet: { type: Boolean, required: true },
  escalated: { type: Boolean, default: false }
}, { timestamps: true });
export const IncidentResolution = mongoose.models.IncidentResolution || mongoose.model('IncidentResolution', IncidentResolutionSchema);

const CustomerSatisfactionSchema = new Schema({
  incidentId: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  feedback: { type: String }
}, { timestamps: true });
export const CustomerSatisfaction = mongoose.models.CustomerSatisfaction || mongoose.model('CustomerSatisfaction', CustomerSatisfactionSchema);
