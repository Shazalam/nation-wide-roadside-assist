import dbConnect from '@/lib/database/db-connect';
import { Dispatch, IDispatch } from '@/models/Dispatch';

export class DispatchService {
  static async createRequest(data: Partial<IDispatch>) {
    await dbConnect();
    
    if (data.phone) {
      const active = await Dispatch.findOne({ 
        phone: data.phone, 
        status: { $in: ['pending', 'assigned', 'in-progress'] } 
      });

      if (active) {
        throw new Error('An active dispatch request already exists for this number.');
      }
    }

    return await Dispatch.create(data);
  }

  static async getById(id: string) {
    await dbConnect();
    return await Dispatch.findById(id);
  }
}
