import React from "react";
import { useAppContext } from "../../contexts/AppContext";

export default function Cart() {
  const { cart, updateQuantity } = useAppContext();

  if (!cart || cart.length == 0) {
    return <div>The cart is empty</div>;
  }

  return cart.map((cartItem, index) => (
    <div key={index}>
      {cartItem.product.id}
      <label>cantidad</label>
      <input
        type="number"
        value={cartItem.quantity}
        onChange={(e) => updateQuantity(e.target.value, cartItem.product.id)}
      />
      <button>Eliminar del carrito</button>
    </div>
  ));
}
