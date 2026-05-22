'use client';

import { useState, useEffect } from 'react';

export interface DispatchStats {
  activeDispatches: number;
  enRoute: number;
  onScene: number;
  completedToday: number;
  totalAnnual: number;
  slaCompliance: number;
  vendorAvailability: number;
  avgResponseTime: number;
}

const MOCK_STATS: DispatchStats = {
  activeDispatches: 1424,
  enRoute: 718,
  onScene: 391,
  completedToday: 3182,
  totalAnnual: 2400000,
  slaCompliance: 97.8,
  vendorAvailability: 88,
  avgResponseTime: 18.2,
};

export const useDispatchStats = () => {
  const [stats, setStats] = useState<DispatchStats | null>(MOCK_STATS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate real-time dispatch telemetry updates
    const interval = setInterval(() => {
      setStats(prev => {
        if (!prev) return MOCK_STATS;
        return {
          ...prev,
          activeDispatches: prev.activeDispatches + (Math.random() > 0.5 ? 1 : -1),
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
