import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email, password) => {
    // Simulate API call
    set({
      isAuthenticated: true,
      user: {
        id: '1',
        name: 'John Doe',
        email,
        role: 'buyer',
      },
    });
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));
