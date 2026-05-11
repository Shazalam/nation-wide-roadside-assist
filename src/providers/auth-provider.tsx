'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { useRouter, usePathname } from 'next/navigation';

const AuthContext = createContext<{
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
} | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated, isLoading, logout, setAuth } = useStore();
  const router = useRouter();
  const pathname = usePathname();

  // Basic session sync or validation could go here
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
