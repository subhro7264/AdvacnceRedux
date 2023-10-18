import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart-slice"; 
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;
  // const cart = useSelector((state) => state.cart); // Assuming you have a 'cart' slice in your Redux store

  // const addToCartHandler = () => {
  //   const newTotalQuantity = cart.totalQuantity + 1;

  //   const updatedItems = cart.items.slice(); // create a copy via slice to avoid mutating the original state
  //   const existingItem = updatedItems.find((item) => item.id === id);
  //   if (existingItem) {
  //     const updatedItem = { ...existingItem }; // create a new object + copy existing properties to avoid state mutation
  //     updatedItem.quantity++;
  //     updatedItem.totalPrice = updatedItem.totalPrice + price;
  //     const existingItemIndex = updatedItems.findIndex(
  //       (item) => item.id === id
  //     );
  //     updatedItems[existingItemIndex] = updatedItem;
  //   } else {
  //     updatedItems.push({
  //       id: id,
  //       price: price,
  //       quantity: 1,
  //       totalPrice: price,
  //       name: title,
  //     });
  //   }

  //   const newCart = {
  //     totalQuantity: newTotalQuantity,
  //     items: updatedItems,
  //   };

  //   dispatch(replaceCart(newCart));

  //   // You can send an HTTP request here to update the cart on the server if needed
  //   // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) });


  //  };

  const addToCartHandler = () => {
    dispatch(
      addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
