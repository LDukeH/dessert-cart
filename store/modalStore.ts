import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  toggleModal: (bool: boolean) => void;
}

const useModalStore = create<ModalState>((set, get) => ({
  isOpen: false,
  toggleModal: (bool: boolean) =>
    set((state) => ({
      isOpen: bool,
    })),
}));

export default useModalStore;
