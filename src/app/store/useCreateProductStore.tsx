import { create } from "zustand";
interface useCreateProductState {
  open: boolean;
  setIsOpen: (value: boolean) => void;
  handleClose: (value: boolean) => void;
}
export const useCreateProductStore = create<useCreateProductState>((set) => ({
  open: false,
  setIsOpen: (value) => set({ open: value }),
  handleClose: (value) => set({ open: value }),
}));
