import React from "react";
import { useAppContext } from "../../contexts/AppContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useAppContext();

  if (!cart || cart.length == 0) {
    return <div>The cart is empty</div>;
  }

  return cart.map((cartItem, index) => (
    <div key={index}>
      {cartItem.product.id}
      disponible {cartItem.product.quantity}
      <label>cantidad</label>
      <input
        type="number"
        value={cartItem.quantity}
        onChange={(e) => {
          if (cartItem.product.quantity > e.target.value) {
            updateQuantity(cartItem.product.id, e.target.value);
          }
        }}
      />
      <button onClick={() => removeFromCart(cartItem.product.id)}>
        Eliminar del carrito
      </button>
    </div>
  ));
}
