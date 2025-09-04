// store/cart-store.ts
import { create } from 'zustand';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotal: () => number;
};

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),

  getTotal: () =>
    get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));

export default useCartStore;
