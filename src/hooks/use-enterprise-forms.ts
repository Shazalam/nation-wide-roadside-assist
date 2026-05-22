import { useMutation } from '@tanstack/react-query';
import api from '@/lib/api-client';

export const usePartnerRequest = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post('/partner', data);
      return response.data;
    },
  });
};

export const useDispatchRequest = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post('/dispatch', data);
      return response.data;
    },
  });
};
