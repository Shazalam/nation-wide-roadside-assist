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
  activeRecoveries: 1248,
  enRoute: 642,
  onScene: 426,
  completedToday: 2381,
  totalAnnual: 3200000,
  slaCompliance: 97.6,
  vendorAvailability: 85,
  avgResponseTime: 38
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
          activeRecoveries: prev.activeRecoveries + (Math.random() > 0.5 ? 1 : -1),
          enRoute: prev.enRoute + (Math.random() > 0.5 ? 1 : -1),
          onScene: prev.onScene + (Math.random() > 0.5 ? 1 : -1),
          completedToday: prev.completedToday + (Math.random() > 0.8 ? 1 : 0),
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { stats, loading };
};
