import dbConnect from '@/lib/database/db-connect';
import { Partner, IPartner } from '@/models/Partner';

export class PartnerService {
  static async createRequest(data: Partial<IPartner>) {
    await dbConnect();
    
    if (data.email) {
      const existing = await Partner.findOne({ email: data.email });
      if (existing) {
        throw new Error('A partnership request with this email already exists.');
      }
    }

    return await Partner.create(data);
  }

  static async getAllRequests() {
    await dbConnect();
    return await Partner.find({}).sort({ createdAt: -1 });
  }
}
