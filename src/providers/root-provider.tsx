'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './auth-provider';
import { ReduxProvider } from './redux-provider';
import { GlobalModals } from '@/components/modals/global-modals';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ReduxProvider>
          {children}
          <GlobalModals />
        </ReduxProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
