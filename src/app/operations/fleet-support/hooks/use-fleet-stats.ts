'use client';

import { useState, useEffect } from 'react';

export interface FleetStats {
  activeVehicles: number;
  activeIncidents: number;
  avgResponseTime: number;
  fleetUptime: number;
  slaCompliance: number;
  vendorResponse: number;
  onTimeArrivals: number;
  customerSatisfaction: number;
  dispatchEvents: number;
}

const MOCK_STATS: FleetStats = {
  activeVehicles: 18247,
  activeIncidents: 432,
  avgResponseTime: 24.6,
  fleetUptime: 99.4,
  slaCompliance: 98.8,
  vendorResponse: 94.3,
  onTimeArrivals: 96.7,
  customerSatisfaction: 4.8,
  dispatchEvents: 4800000
};

export const useFleetStats = () => {
  const [stats, setStats] = useState<FleetStats | null>(MOCK_STATS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        if (!prev) return MOCK_STATS;
        return {
          ...prev,
          activeVehicles: prev.activeVehicles + (Math.random() > 0.5 ? 5 : -3),
          activeIncidents: prev.activeIncidents + (Math.random() > 0.6 ? 2 : -1),
          dispatchEvents: prev.dispatchEvents + (Math.random() > 0.7 ? 1 : 0),
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { stats, loading };
};
