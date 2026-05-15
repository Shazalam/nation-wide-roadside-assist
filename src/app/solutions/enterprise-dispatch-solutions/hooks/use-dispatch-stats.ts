'use client';

import { useState, useEffect } from 'react';

export interface DispatchStats {
  totalEvents: number;
  slaCompliance: number;
  activeIncidents: number;
  avgResponseTime: number;
  resolutionRate: number;
}

export const useDispatchStats = () => {
  const [stats, setStats] = useState<DispatchStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Mock data to prevent API errors
        const mockData: DispatchStats = {
          totalEvents: 145000,
          slaCompliance: 98.6,
          activeIncidents: 124,
          avgResponseTime: 12.5,
          resolutionRate: 99.2
        };
        setStats(mockData);
      } catch (error) {
        console.error('Failed to fetch dispatch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, []);

  return { stats, loading };
};
