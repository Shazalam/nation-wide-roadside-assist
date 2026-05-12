'use client';

import { useState, useEffect } from 'react';

export interface RecoveryStats {
  activeRecoveries: number;
  enRoute: number;
  onScene: number;
  completedToday: number;
  totalAnnual: number;
  slaCompliance: number;
  vendorAvailability: number;
  avgResponseTime: number;
}

export const useRecoveryStats = () => {
  const [stats, setStats] = useState<RecoveryStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/heavy-duty-recovery/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching recovery stats:', error);
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
