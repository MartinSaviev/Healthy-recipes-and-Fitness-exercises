/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  itemCount: 0,
  totalPrice: 0,
  dataFromServer: () => null,
  clearCart: () => null,
  calculatePrice: () => null,
  clearIncrementItemCount: () => null,
  removeItemFromCart: () => null,
  incrementItemCount: () => null,
  decrementItemCount: () => null,
});

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function clearIncrementItemCount(zero) {
    setItemCount(Number(zero));
  }

  function clearCart() {
    setCart([]);
    setItemCount(0);
    setTotalPrice(0);
  }

  function calculatePrice(itemPrice) {
    setTotalPrice((oldPrice) => oldPrice + Number(itemPrice));
  }

  function decrementPrice(itemPrice) {
    setTotalPrice((oldPrice) => oldPrice - Number(itemPrice));
  }

  function dataFromServer(itemData) {
    setCart((prevCart) => {
      const isAlreadyAdded = prevCart.some((item) => item._id === itemData._id);
      if (!isAlreadyAdded) {
        calculatePrice(itemData.price);
        setItemCount((prevCount) => prevCount + 1);
        return [...prevCart, { ...itemData, quantity: 1 }];
      }
      return prevCart;
    });
  }

  function removeItemFromCart(itemId) {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item._id === itemId);
      if (itemToRemove) {
        decrementPrice(itemToRemove.price * itemToRemove.quantity);
        setItemCount((prevCount) => prevCount - itemToRemove.quantity);
        return prevCart.filter((item) => item._id !== itemId);
      }
      return prevCart;
    });
  }

  function incrementItemCount(itemId) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item._id === itemId) {
          item.quantity += 1;
          calculatePrice(item.price);
        }
        return item;
      });
    });
  }

  function decrementItemCount(itemId) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item._id === itemId && item.quantity > 1) {
          item.quantity -= 1;
          decrementPrice(item.price);
        }
        return item;
      });
    });
  }

  const contextData = {
    cart,
    itemCount,
    totalPrice,
    clearCart,
    dataFromServer,
    clearIncrementItemCount,
    removeItemFromCart,
    incrementItemCount,
    decrementItemCount,
  };

  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
}
