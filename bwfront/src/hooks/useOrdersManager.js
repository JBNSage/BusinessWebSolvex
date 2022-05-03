import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { apiCalls } from "../utilities/apiCalls";
import { paymentMethodStorage } from "../utilities/constants";
import useAuthentication from "./useAuthentication";

export default function useOrdersManager() {
  const [orders, setOrders] = React.useState();
  const { cart, calculateCartTotal } = useAppContext();
  const { user } = useAuthentication();

  const createOrder = async () => {
    const payment_method = JSON.parse(
      sessionStorage.getItem(paymentMethodStorage)
    );

    const { total, shipping } = calculateCartTotal();

    const products = cart.map((cartItem) => ({
      id: cartItem.product.id,
      quantity: cartItem.quantity,
      price: cartItem.product.price,
    }));

    const body = {
      user: user.id,
      state: "shipping",
      card: payment_method.number.substr(payment_method.number.length - 4),
      estimated_arrival: new Date(),
      total: parseInt(total.replace(",", "")),
      shipping_cost: shipping,
      products,
    };

    const response = await apiCalls.createOrder(body);

    if (response.data) {
      return response.data;
    }

    return undefined;
  };

  const getOrders = () => {};

  const cancelOrder = () => {};

  return { createOrder, cancelOrder, getOrders };
}
