import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: false };

const cartVisible = createSlice({
  name: "cartVisible",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cart = !state.cart;
    },
  },
});

export const { toggleCart } = cartVisible.actions;
export default cartVisible.reducer;
