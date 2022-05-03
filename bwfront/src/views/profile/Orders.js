import React from "react";
import { useOrdersManager } from "../../hooks";

export default function Orders() {
  const { getOrders, orders } = useOrdersManager();

  React.useEffect(() => {
    getOrders();
  }, []);

  return <div>{orders?.map((order) => order.id)}</div>;
}
