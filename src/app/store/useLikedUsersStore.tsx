import { create } from "zustand";
interface useLikedUsersState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  likedUsers: LikedUsers[];
  setLikedUsers: (data: LikedUsers[]) => void;
}
export const useLikedUsersStore = create<useLikedUsersState>((set) => ({
  isOpen: false,
  likedUsers: [],
  setIsOpen: (value) => set({ isOpen: value }),
  setLikedUsers: (data) => set({ likedUsers: data }),
}));
