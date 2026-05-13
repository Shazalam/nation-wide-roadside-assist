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
      const response = await fetch('/api/mobile-repairs/stats');
      if (!response.ok) throw new Error('Failed to fetch repair stats');
      return response.json();
    },
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  return { stats, isLoading, error };
};
