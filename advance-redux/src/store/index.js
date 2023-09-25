import { configureStore } from "@reduxjs/toolkit";
import cartVisibleReducer from "./cartVisible"; 

const store = configureStore({
  reducer: { 
    cart: cartVisibleReducer, 
  },
});

export default store;