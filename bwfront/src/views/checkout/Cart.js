import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, calculateCartTotal } =
    useAppContext();

  if (!cart || cart.length == 0) {
    return <div>The cart is empty</div>;
  }
  const { subTotal, total, tax, shipping } = calculateCartTotal();
  return (
    <div>
      {cart.map((cartItem, index) => (
        <div key={index}>
          {cartItem.product.id}
          disponible {cartItem.product.quantity}
          <label>cantidad</label>
          <input
            type="number"
            value={cartItem.quantity}
            onChange={(e) => {
              if (
                cartItem.product.quantity >= e.target.value &&
                e.target.value > 0
              ) {
                updateQuantity(cartItem.product.id, e.target.value);
              }
            }}
          />
          <button onClick={() => removeFromCart(cartItem.product.id)}>
            Eliminar del carrito
          </button>
        </div>
      ))}
      Sub total: {subTotal}
      Tax: {tax}% Shipping : {shipping}
      Total: {total}
      <Link to="./preview-order">Proceed to checkout</Link>
    </div>
  );
}
