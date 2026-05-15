import { useQuery } from '@tanstack/react-query';

interface RepairStats {
  activeIncidents: number;
  enRoute: number;
  onScene: number;
  completedToday: number;
  avgEta: number;
  slaCompliance: number;
  technicianAvailability: number;
  customerSatisfaction: number;
  regionalActivity: { region: string; count: number }[];
}

export const useRepairStats = () => {
  const { data: stats, isLoading, error } = useQuery<RepairStats>({
    queryKey: ['mobile-repair-stats'],
    queryFn: async () => {
      // Mock data to prevent API errors
      return {
        activeIncidents: 84,
        enRoute: 15,
        onScene: 12,
        completedToday: 312,
        avgEta: 38.5,
        slaCompliance: 97.6,
        technicianAvailability: 92,
        customerSatisfaction: 4.8,
        regionalActivity: [
          { region: 'Northeast', count: 24 },
          { region: 'Southeast', count: 18 },
          { region: 'Midwest', count: 15 },
          { region: 'West', count: 27 }
        ]
      };
    },
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  return { stats, isLoading, error };
};
