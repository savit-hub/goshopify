import React, { createContext, useState } from "react";

export const myContext = createContext({});

function ContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <myContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
