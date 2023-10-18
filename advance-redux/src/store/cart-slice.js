import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./cartVisible";


const initialState = { items: [], totalQuantity: 0 };

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       showNotification({
//         status: "Pending",
//         title: "Sending.....",
//         message: "Data is sending",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://react-1ee49-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending Data Failed");
//       }
//     };
//     try{await sendRequest();
//       dispatch(
//         showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Sent data to cart successfully",
//         })
//       );
    
    
//     }catch(error){
//       dispatch(
//         showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sent data to cart failed",
//         })
//       );
//     }
    
   
//   };
// };


// export const getCartData = () => {
//     return async (dispatch) => {
//       const getData = async () => {
//         const response = await fetch(
//           "https://react-1ee49-default-rtdb.firebaseio.com/cart.json"
//         );
  
//         if (!response.ok) {
//           throw new Error("Fetch Data Failed");
//         }

//         const data= await response.json();
//         return data;
//       };
//       try{
//        const cartData= await getData();
//       dispatch(replaceCart(cartData));
//       }catch(error){
//         dispatch(
//             showNotification({
//               status: "error",
//               title: "Error!",
//               message: "Fetching data to cart failed",
//             })
//           );
//       }
//     };
//   };

export const { addItemToCart, removeItemFromCart, replaceCart } = cart.actions;
export default cart.reducer;
