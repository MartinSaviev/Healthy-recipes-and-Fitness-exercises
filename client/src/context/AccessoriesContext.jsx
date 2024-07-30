/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AccContext = createContext({
  cart: [],
  itemCount: 0,
  changeAccessoriesState: () => null,
  clearCart: () => null,
});

export function AccContextProvider(props) {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  function clearCart()  {
    setCart([]);
    
  }
  
  function changeAccessoriesState (itemId)  {
    setCart((prevCart) => {
      const isAlreadyAdded = prevCart.some((item) => item._id === itemId._id);
      if (!isAlreadyAdded) {
        setItemCount((prevCount) => prevCount + 1);
        return [...prevCart, itemId];
      }
      return prevCart;
    });
  }

  const contextData = {
    cart,
    itemCount,
    clearCart,
    setItemCount,
    changeAccessoriesState,
  };

  return (
    <AccContext.Provider value={contextData}>
      {props.children}
    </AccContext.Provider>
  );
}
