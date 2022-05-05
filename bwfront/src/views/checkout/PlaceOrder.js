import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components";
import { useOrdersManager } from "../../hooks";

export default function PlaceOrder() {
  const { createOrder } = useOrdersManager();
  const [placingOrder, setPlacingOrder] = useState(true);
  const [createdOrder, setCreatedOrder] = useState();

  useEffect(() => {
    createOrder().then((response) => {
      if (response == undefined) {
        setPlacingOrder(undefined);
      }

      if (response.data) {
        setCreatedOrder(response.data);
        setPlacingOrder(false);
      }
    });
  }, []);

  if (placingOrder) {
    return <SectionHeader title="Creando orden..." />;
  }

  return (
    <div className="place_order_container">
      {placingOrder !== undefined && (
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Order placed!</h4>
          <p>Your order has been successfully placed</p>
          <hr />
          <p class="mb-0">Order id: {createdOrder.id}</p>
        </div>
      )}

      <Link to="../../profile/my-orders" className="btn btn-dark">
        My orders
      </Link>
    </div>
  );
}
