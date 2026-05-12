import RecoveryIncident from '../models/RecoveryIncident';
import FleetVehicle from '../models/FleetVehicle';
import TowOperator from '../models/TowOperator';

export class RecoveryService {
  static async createIncident(data: any) {
    // Basic logic to handle incident creation
    const incident = new RecoveryIncident(data);
    return await incident.save();
  }

  static async getNearbyOperators(lat: number, lng: number, radiusKm: number = 50) {
    // Mock logic for finding nearby operators
    // In a real app, use MongoDB geospatial queries
    return await TowOperator.find({
      status: 'available'
    }).limit(10);
  }

  static async updateIncidentStatus(incidentId: string, status: string) {
    return await RecoveryIncident.findOneAndUpdate(
      { incidentId },
      { status },
      { new: true }
    );
  }
}
