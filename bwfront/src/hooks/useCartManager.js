import React, { useState } from "react";
import { cartStorage, deliveryCost, tax } from "../utilities/constants";
import { numberWithCommas } from "../utilities/parsers";

export default function useCartManager() {
  const [cart, setCart] = useState([]);

  React.useEffect(() => {
    setCart(getCart());
  }, []);

  const getCart = () => {
    const storedCart = JSON.parse(localStorage.getItem(cartStorage));

    if (storedCart) {
      return storedCart;
    }

    return [];
  };

  const addToCart = (product) => {
    const body = { product, quantity: 1 };
    let cartTMP = [...cart];

    if (cartTMP) {
      cartTMP.push(body);
    } else {
      cartTMP = [body];
    }

    updateCart(cartTMP);
  };

  const getCartProduct = (productId) => {
    let cartTMP = [...cart];

    if (cartTMP) {
      return cartTMP.find((cartItem) => {
        console.log(
          "🚀 ~ file: useCartManager.js ~ line 29 ~ returncartTMP.find ~ cartItem",
          cartItem
        );
        return cartItem.product.id == productId;
      });
    }
    return undefined;
  };

  const updateCart = (cartTMP) => {
    localStorage.setItem(cartStorage, JSON.stringify(cartTMP));
    setCart(cartTMP);
  };

  const updateQuantity = (productId, quantity) => {
    let cartTMP = [...cart];

    const cartItemIndex = cartTMP.findIndex(
      (cartItem) => cartItem.product.id == productId
    );

    let cartItem = cartTMP[cartItemIndex];

    cartItem.quantity = parseInt(quantity);

    cartTMP[cartItemIndex] = cartItem;

    updateCart(cartTMP);
  };

  const removeFromCart = (productId) => {
    let cartTMP = [...cart];

    const cartItemIndex = cartTMP.findIndex(
      (cartItem) => cartItem.product.id == productId
    );

    cartTMP.splice(cartItemIndex, 1);

    updateCart(cartTMP);
  };

  const calculateCartTotal = () => {
    var total = 0;
    if (cart.length > 0) {
      total = cart.reduce(
        (previousValue, currentItem) =>
          previousValue + currentItem.product.price * currentItem.quantity,
        0
      );
    }
    return {
      subTotal: numberWithCommas(total),
      tax: tax * 100,
      shipping: deliveryCost,
      total: numberWithCommas(total * (tax + 1) + deliveryCost),
    };
  };

  const clearCart = () => {
    const cartTMP = [];
    updateCart(cartTMP);
  };

  return {
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartProduct,
    calculateCartTotal,
    cart,
    clearCart,
  };
}
