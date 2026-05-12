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
        const response = await fetch('/api/fleet-operations/stats');
        if (!response.ok) throw new Error('Failed to fetch fleet stats');
        const data = await response.json();
        setStats(data);
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
