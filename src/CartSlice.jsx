import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // holds all plants added to the cart
  },
  reducers: {
    // ✅ 1. Add item to cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (plant) => plant.name === item.name
      );

      if (existingItem) {
        // If item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add new item with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // ✅ 2. Remove item from cart by name
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter((plant) => plant.name !== nameToRemove);
    },

    // ✅ 3. Update item quantity
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find((plant) => plant.name === name);

      if (item) {
        item.quantity = amount;
      }
    },
  },
});

// Export actions to use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer to be used in store.js
export default CartSlice.reducer;