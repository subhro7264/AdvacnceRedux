import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { showNotification } from "./store/cartVisible";
import Notification from "./components/UI/Notification";


let isInitial=true;
function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.ui.show);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  

  useEffect(() => {
    const sendCartData = async () => {
 
      try {
        dispatch(
          showNotification({
            status: "Pending",
            title: "Sending.....",
            message: "Data is sending",
          })
        );

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

        dispatch(
          showNotification({
            status: "success",
            title: "Success!",
            message: "Sent data to cart successfully",
          })
        );
      } catch (error) {
        console.error(error);
        dispatch(
          showNotification({
            status: "error",
            title: "Error!",
            message: "Sent data to cart failed",
          })
        );
      }
    };
if(isInitial){
  isInitial=false;
  return;
}
    if (cart.items.length > 0) {
      sendCartData();
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && 
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
