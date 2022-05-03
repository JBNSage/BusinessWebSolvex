import React, { createContext, useContext } from "react";
import { useCartManager } from "../hooks";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const { items, addToCart, removeFromCart, getCartProduct, updateQuantity } =
    useCartManager();

  return (
    <AppContext.Provider
      value={{
        cartItems: items,
        addToCart,
        removeFromCart,
        getCartProduct,
        updateQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
