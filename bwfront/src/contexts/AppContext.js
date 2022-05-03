import React, { createContext, useContext } from "react";
import { useCartManager } from "../hooks";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const {
    addToCart,
    removeFromCart,
    getCartProduct,
    updateQuantity,
    cart,
    calculateCartTotal,
  } = useCartManager();

  return (
    <AppContext.Provider
      value={{
        calculateCartTotal,
        addToCart,
        removeFromCart,
        getCartProduct,
        updateQuantity,
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
