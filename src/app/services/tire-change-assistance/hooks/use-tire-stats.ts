'use client';

import { useState, useEffect } from 'react';

export interface TireStats {
  activeIncidents: number;
  techniciansOnDuty: number;
  enRoute: number;
  onScene: number;
  completedToday: number;
  totalAnnual: number;
  slaCompliance: number;
  avgResponseTime: number;
  successRate: number;
}

const MOCK_STATS: TireStats = {
  activeIncidents: 1246,
  techniciansOnDuty: 342,
  enRoute: 412,
  onScene: 284,
  completedToday: 3281,
  totalAnnual: 1800000,
  slaCompliance: 99.2,
  avgResponseTime: 24.6,
  successRate: 99.6
};

export const useTireStats = () => {
  const [stats, setStats] = useState<TireStats | null>(MOCK_STATS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        if (!prev) return MOCK_STATS;
        return {
          ...prev,
          activeIncidents: prev.activeIncidents + (Math.random() > 0.5 ? 3 : -2),
          techniciansOnDuty: prev.techniciansOnDuty + (Math.random() > 0.6 ? 1 : -1),
          enRoute: prev.enRoute + (Math.random() > 0.5 ? 2 : -2),
          onScene: prev.onScene + (Math.random() > 0.5 ? 1 : -1),
          completedToday: prev.completedToday + (Math.random() > 0.8 ? 1 : 0),
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { stats, loading };
};
