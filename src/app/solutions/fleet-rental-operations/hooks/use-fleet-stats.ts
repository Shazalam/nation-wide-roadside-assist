import { useState, useEffect } from 'react';

export interface FleetStats {
  totalVehicles: number;
  activeIncidents: number;
  completedToday: number;
  fleetUtilization: number;
  avgResponseTime: number;
  slaCompliance: number;
  networkNodes: number;
}

export const useFleetStats = () => {
  const [stats, setStats] = useState<FleetStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Mock data to prevent API errors
        const mockData: FleetStats = {
          totalVehicles: 12480,
          activeIncidents: 156,
          completedToday: 842,
          fleetUtilization: 94.2,
          avgResponseTime: 18.5,
          slaCompliance: 98.2,
          networkNodes: 4500
        };
        setStats(mockData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return { stats, loading, error };
};
