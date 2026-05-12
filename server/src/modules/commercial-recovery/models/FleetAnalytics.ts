import mongoose, { Schema, Document } from 'mongoose';

export interface IFleetAnalytics extends Document {
  date: Date;
  totalIncidents: number;
  averageResponseTime: number; // in minutes
  slaComplianceRate: number; // percentage
  topIncidentTypes: { type: string, count: number }[];
  regionalData: { region: string, incidentCount: number }[];
}

const FleetAnalyticsSchema: Schema = new Schema({
  date: { type: Date, required: true, default: Date.now },
  totalIncidents: { type: Number, default: 0 },
  averageResponseTime: { type: Number, default: 0 },
  slaComplianceRate: { type: Number, default: 100 },
  topIncidentTypes: [{
    type: { type: String },
    count: { type: Number }
  }],
  regionalData: [{
    region: { type: String },
    incidentCount: { type: Number }
  }]
}, {
  timestamps: true
});

export default mongoose.models.FleetAnalytics || mongoose.model<IFleetAnalytics>('FleetAnalytics', FleetAnalyticsSchema);
