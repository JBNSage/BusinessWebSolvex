import React from "react";
import { Link } from "react-router-dom";
import { CartSummary, ProductShowcase, SectionHeader } from "../../components";
import { useAppContext } from "../../contexts/AppContext";

export default function PreviewOrder() {
  const { cart } = useAppContext();

  return (
    <div className="preview_order_container">
      <SectionHeader title="Verify your order details" />
      <div className="row preview_order">
        <div className="col-8">
          {cart.map((cartItem, index) => (
            <ProductShowcase key={index} product={cartItem.product} />
          ))}
        </div>
        <div className="col">
          <CartSummary
            actionButton={{ text: "Continue", link: "../payment-method" }}
          />
        </div>
      </div>
    </div>
  );
}
