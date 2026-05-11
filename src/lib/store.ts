import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  _id?: string;
  name: string;
  email: string;
  role: 'admin' | 'dispatcher' | 'vendor' | 'client';
}

interface AppState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      setAuth: (user, token) => {
        // Synchronize with cookie for middleware
        if (typeof window !== 'undefined') {
          document.cookie = `token=${token}; path=/; max-age=2592000; samesite=lax`;
        }
        set({ user, token, isAuthenticated: true });
      },
      logout: () => {
        if (typeof window !== 'undefined') {
          document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
        set({ user: null, token: null, isAuthenticated: false });
      },
      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'nationwide-trans-storage',
    }
  )
);
