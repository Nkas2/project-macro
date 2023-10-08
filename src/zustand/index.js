import { create } from "zustand";

export const useLogin = create((set) => ({
  isLogin: false,
  updateLogin: (login) => set(() => ({ isLogin: login })),
}));
