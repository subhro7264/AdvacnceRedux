import { showNotification } from "./cartVisible";
import { replaceCart } from './cart-slice';

// Fetch cart data from Firebase
export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://react-1ee49-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetch Data Failed");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await getData();
      dispatch(replaceCart(cartData));
    } catch (error) {
      console.error("Error fetching cart data:", error);
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching data to cart failed",
        })
      );
    }
  };
};

// Send cart data to Firebase
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Data is sending",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-1ee49-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Data Failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent data to cart successfully",
        })
      );
    } catch (error) {
      console.error("Error sending cart data:", error);
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sent data to cart failed",
        })
      );
    }
  };
};
