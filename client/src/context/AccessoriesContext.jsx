/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AccContext = createContext({
  cart: [],
  itemCount: 0,
  changeAccessoriesState: () => null,
});

export function AccContextProvider(props) {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const changeAccessoriesState = (itemId) => {
    setCart((prevCart) => {
      const isAlreadyAdded = prevCart.some((item) => item._id === itemId._id);
      if (!isAlreadyAdded) {
        setItemCount((prevCount) => prevCount + 1);
        return [...prevCart, itemId];
      }
      return prevCart;
    });
  };

  const contextData = {
    cart,
    itemCount,
    changeAccessoriesState,
  };

  return (
    <AccContext.Provider value={contextData}>
      {props.children}
    </AccContext.Provider>
  );
}
