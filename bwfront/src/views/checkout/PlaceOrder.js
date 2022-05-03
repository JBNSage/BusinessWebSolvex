import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOrdersManager } from "../../hooks";

export default function PlaceOrder() {
  const { createOrder } = useOrdersManager();
  const [placingOrder, setPlacingOrder] = useState(true);
  const [createdOrder, setCreatedOrder] = useState();

  useEffect(() => {
    createOrder().then((response) => {
      if (response) {
        setCreatedOrder(response);
      }
    });
  }, []);

  if (placingOrder) {
    return <div>Creando orden</div>;
  }

  return (
    <div>
      {createdOrder.id}

      <Link to="../../profile/my-orders">Mis órdenes</Link>
    </div>
  );
}
