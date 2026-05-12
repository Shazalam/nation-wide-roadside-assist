'use client';

import { useState, useEffect } from 'react';

export interface RoadsideStats {
  activeRequests: number;
  enRoute: number;
  onScene: number;
  completedToday: number;
  totalAnnual: number;
  slaCompliance: number;
  customerSatisfaction: number;
  avgResponseTime: number;
}

export const useRoadsideStats = () => {
  const [stats, setStats] = useState<RoadsideStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/roadside-assistance/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching roadside stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return { stats, loading };
};
