import { create } from "zustand";
interface useUploadFileState {
  open: boolean;
  setIsOpen: (value: boolean) => void;
  handleClose: (value: boolean) => void;
}
export const useUploadFileStore = create<useUploadFileState>((set) => ({
  open: false,
  setIsOpen: (value) => set({ open: value }),
  handleClose: (value) => set({ open: value }),
}));
