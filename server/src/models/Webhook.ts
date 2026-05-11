import mongoose, { Schema, Document } from 'mongoose';

export interface IWebhook extends Document {
  url: string;
  events: string[];
  secret: string;
  isActive: boolean;
  createdBy: mongoose.Types.ObjectId;
}

const WebhookSchema: Schema = new Schema({
  url: { type: String, required: true },
  events: [{ type: String, required: true }],
  secret: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model<IWebhook>('Webhook', WebhookSchema);
