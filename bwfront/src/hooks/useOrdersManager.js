import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { apiCalls } from "../utilities/apiCalls";
import { paymentMethodStorage } from "../utilities/constants";
import useAuthentication from "./useAuthentication";
import useProductsManager from "./useProductsManager";

export default function useOrdersManager() {
  const [orders, setOrders] = React.useState();
  const { cart, calculateCartTotal, clearCart } = useAppContext();
  const { updateProducts } = useProductsManager();
  const { user } = useAuthentication();

  const createOrder = async () => {
    if (!cart || cart.length == 0) {
      return undefined;
    }

    const payment_method = JSON.parse(
      sessionStorage.getItem(paymentMethodStorage)
    );

    const { total, shipping } = calculateCartTotal();

    var products = [];

    const orderDetails = cart.map((cartItem) => {
      let cartItemProduct = cartItem.product;
      console.log(
        "🚀 ~ file: useOrdersManager.js ~ line 29 ~ orderDetails ~ cartItemProduct",
        cartItemProduct.quantity
      );

      cartItemProduct.quantity = cartItemProduct.quantity - cartItem.quantity;

      products.push(cartItemProduct);

      return {
        productId: cartItem.product.id,
        quantity: cartItem.quantity,
        price: cartItem.product.price,
      };
    });

    const body = {
      userId: user.id,
      state: "shipping",
      card: payment_method.number.substr(payment_method.number.length - 4),
      estimatedArrival: new Date(),
      total: parseInt(total.replace(",", "")),
      shippingCost: shipping,
      orderDetails,
    };

    const response = await apiCalls.createOrder(body);

    if (response.data) {
      clearCart();
      updateProducts(products);
    }

    return response;
  };

  const getOrders = () => {
    apiCalls.getOrders().then((response) => {
      if (response.data) {
        setOrders(response.data);
      }
    });
  };

  const cancelOrder = () => {};

  return { orders, createOrder, cancelOrder, getOrders };
}
