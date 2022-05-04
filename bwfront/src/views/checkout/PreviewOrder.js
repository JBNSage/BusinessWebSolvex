import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

export default function PreviewOrder() {
  const { cart, calculateCartTotal } = useAppContext();
  const { subTotal, total, tax, shipping } = calculateCartTotal();

  return (
    <div>
      {cart.map((cartItem, index) => (
        <div key={index}>
          {cartItem.product.id}
          <label>cantidad</label>
          {cartItem.quantity}
        </div>
      ))}
      Sub total: {subTotal}
      Tax: {tax}% Shipping : {shipping}
      Total: {total}
      <Link to="../payment-method">Continue</Link>
    </div>
  );
}
