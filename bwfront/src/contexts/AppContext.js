import React, { createContext, useContext, useState } from "react";
import { useCartManager } from "../hooks";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  return (
    <AppContext.Provider
      value={{
        ...useCartManager(),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
