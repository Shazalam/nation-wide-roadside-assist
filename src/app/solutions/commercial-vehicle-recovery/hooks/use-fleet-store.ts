import { create } from 'zustand';

interface FleetState {
  activeIncidents: number;
  totalAssets: number;
  slaCompliance: number;
  setMetrics: (metrics: Partial<FleetState>) => void;
}

export const useFleetStore = create<FleetState>((set) => ({
  activeIncidents: 142,
  totalAssets: 4892,
  slaCompliance: 99.1,
  setMetrics: (metrics) => set((state) => ({ ...state, ...metrics })),
}));
