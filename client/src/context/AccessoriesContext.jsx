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
  }

  function calculatePrice(itemPrice) {
    setTotalPrice (oldPrice =>  oldPrice += Number(itemPrice));
   console.log(itemPrice);
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

  const contextData = {
    cart,
    itemCount,
    totalPrice,
    clearCart,
    changeAccessoriesState,
    clearIncrementItemCount,
    
  };

  return (
    <AccContext.Provider value={contextData}>
      {props.children}
    </AccContext.Provider>
  );
}
