import { configureStore } from "@reduxjs/toolkit";
import cartVisibleReducer from "./cartVisible"; 
import cartReducer from './cart-slice'
const store = configureStore({
  reducer: { 
    ui: cartVisibleReducer, 
    cart:cartReducer,
  },
});

export default store;