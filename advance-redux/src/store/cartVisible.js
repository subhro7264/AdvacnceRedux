import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, notification:null };

const cartVisible = createSlice({
  name: "cartVisible",
  initialState,
  reducers: {
    toggleCart(state) {
      state.show = !state.show;
    },
 
  showNotification(state,action){
    state.notification={
      status:action.payload.status,
      title:action.payload.title,
      message:action.payload.message,
    };
  },
},
});

export const { toggleCart,showNotification } = cartVisible.actions;
export default cartVisible.reducer;
