import { create } from "zustand";
import CartItem from "@/types/cartItem";

interface CartState {
  cart: CartItem[];
  items: CartItem[];
  fetchData: () => void;
  addToCart: (item: CartItem) => void;
  decreaseQuantity: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  getQuantity: (item: CartItem) => number;
  // Uncomment if you want to implement clearCart functionality
  // clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  items: [],
  fetchData: async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    set({ items: data });
  },
  addToCart: (item: CartItem) =>
    set((state) => {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (itemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[itemIndex].quantity! += 1;
        return { cart: updatedCart };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (item: CartItem) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (cartItem) => cartItem.name !== item.name
      );
      return { cart: updatedCart };
    }),
  decreaseQuantity: (item: CartItem) =>
    set((state) => {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      // If the quantity reaches zero, remove the item from the cart
      if (itemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[itemIndex].quantity! -= 1;
        if (updatedCart[itemIndex].quantity! <= 0) {
          updatedCart.splice(itemIndex, 1);
        }
        return { cart: updatedCart };
      }
      return { cart: state.cart };
    }),
  getQuantity: (item: CartItem) => {
    const itemIndex = get().cart.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    return itemIndex !== -1 ? get().cart[itemIndex].quantity! : 0;
  },
}));

export default useCartStore;
