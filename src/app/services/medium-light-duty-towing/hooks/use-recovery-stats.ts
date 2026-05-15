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

const MOCK_STATS: RecoveryStats = {
  activeRecoveries: 3452,
  enRoute: 1240,
  onScene: 890,
  completedToday: 5621,
  totalAnnual: 8500000,
  slaCompliance: 98.4,
  vendorAvailability: 92,
  avgResponseTime: 22
};

export const useRecoveryStats = () => {
  const [stats, setStats] = useState<RecoveryStats | null>(MOCK_STATS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => {
        if (!prev) return MOCK_STATS;
        return {
          ...prev,
          activeRecoveries: prev.activeRecoveries + (Math.random() > 0.5 ? 2 : -2),
          enRoute: prev.enRoute + (Math.random() > 0.5 ? 1 : -1),
          onScene: prev.onScene + (Math.random() > 0.5 ? 1 : -1),
          completedToday: prev.completedToday + (Math.random() > 0.7 ? 1 : 0),
        };
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return { stats, loading };
};
