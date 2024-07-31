/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AccContext = createContext({
  cart: [],
  itemCount: 0,
  totalPrice: 0,
  changeAccessoriesState: () => null,
  clearCart: () => null,
  calculatePrice: () => null,
  clearIncrementItemCount: () => null,
  removeItemFromCart: () => null,
  incrementItemCount: () => null,
  decrementItemCount: () => null,
});

export function AccContextProvider(props) {
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

  function changeAccessoriesState(itemData) {
    setCart((prevCart) => {
      const isAlreadyAdded = prevCart.some((item) => item._id === itemData._id);
      if (!isAlreadyAdded) {
        calculatePrice(itemData.price);
        setItemCount((prevCount) => prevCount + 1);
        return [...prevCart, itemData];
      }
      return prevCart;
    });
  }

  function removeItemFromCart(itemId) {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item._id === itemId);
      if (itemToRemove) {
        decrementPrice(itemToRemove.price);
        setItemCount((prevCount) => prevCount - 1);
        return prevCart.filter((item) => item._id !== itemId);
      }
      return prevCart;
    });
  }

  const contextData = {
    cart,
    itemCount,
    totalPrice,
    clearCart,
    changeAccessoriesState,
    clearIncrementItemCount,
    removeItemFromCart,
  };

  return (
    <AccContext.Provider value={contextData}>
      {props.children}
    </AccContext.Provider>
  );
}
