import { create } from "zustand";

interface CartItem {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: String;
  price: number;
}

interface CartState {
  cart: CartItem[];
  fetchData: () => void;
  //   addToCart: (item: CartItem) => void;
  //   removeFromCart: (index: number) => void;
  //   clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  fetchData: async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    set({ cart: data });
  },
}));

export default useCartStore;
