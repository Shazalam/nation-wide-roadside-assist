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
        const response = await fetch('/api/enterprise-dispatch/stats');
        const data = await response.json();
        setStats(data);
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
