import React from "react";
import { cartStorage } from "../utilities/constants";

export default function useCartManager() {
  const getCart = () => {
    return JSON.parse(localStorage.getItem(cartStorage));
  };

  const [items, setItems] = React.useState(getCart()?.length);

  const addToCart = (product) => {
    const body = { product, quantity: 1 };
    let cart = getCart();

    if (cart) {
      cart.push(body);
    } else {
      cart = [body];
    }
    console.log(
      "🚀 ~ file: useCartManager.js ~ line 8 ~ addToCart ~ cart",
      cart
    );

    setCart(cart);
  };

  const getCartProduct = (productId) => {
    let cart = getCart();

    if (cart) {
      return cart.find((cartItem) => cartItem.product.id == productId);
    }
    return undefined;
  };

  const setCart = (cart) => {
    localStorage.setItem(cartStorage, JSON.stringify(cart));
    setItems(cart.length);
  };

  const updateQuantity = (productId, quantity) => {};

  const removeFromCart = (productId, quantity) => {};

  return {
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartProduct,
    items,
  };
}
