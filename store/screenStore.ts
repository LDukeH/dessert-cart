// stores/useScreenStore.ts
import { create } from "zustand";

type ScreenSize = "mobile" | "tablet" | "desktop";

interface ScreenStore {
  size: ScreenSize;
  setSize: (size: ScreenSize) => void;
}

const useScreenStore = create<ScreenStore>((set) => ({
  size: "desktop", //default screen size
  setSize: (size) => set({ size }),
}));

export default useScreenStore;
