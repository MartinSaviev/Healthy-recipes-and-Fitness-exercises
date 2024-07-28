/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext({
  accessToken: "",
  email: "",
  username: "",
  _id: "data._id",
  changeAuthState: () => null,
});

export function ContextProvider(props) {
    
  const [data, setData] = useState({});

  const changeAuthState = (state) => {
    setData(state);
  };

  const contextData = {
    accessToken: data.accessToken,
    email: data.email,
    username: data.username,
    _id: data._id,
    changeAuthState,
  };

  return (
    <UserContext.Provider value={contextData}>
      {props.children}
    </UserContext.Provider>
  );
}
