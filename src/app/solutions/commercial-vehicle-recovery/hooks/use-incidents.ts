import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useIncidents = () => {
  return useQuery({
    queryKey: ['recovery-incidents'],
    queryFn: async () => {
      const { data } = await axios.get('/api/recovery/incidents');
      return data;
    },
  });
};
