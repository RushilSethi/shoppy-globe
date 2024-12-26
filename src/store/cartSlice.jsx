import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...item, quantity });
      }
    },
    removeOneFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (cartItem) => cartItem.id !== itemId
          );
        }
      }
    },
    removeItemFromCart: (state, action) => {
        const itemId = action.payload;
        state.items = state.items.filter((cartItem) => cartItem.id !== itemId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeOneFromCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
