import React from "react";
import { MoneyFormat, ProductShowcase, SectionHeader } from "../../components";
import { useOrdersManager } from "../../hooks";
import moment from "moment";

export default function Orders() {
  const { getOrders, orders } = useOrdersManager();

  React.useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="orders_container">
      <SectionHeader title="My orders" />
      <div className="row order_items_container flex-column spaced">
        {orders?.map((order) => (
          <div className="col order_item rounded overflow-hidden">
            <div className="row estimated_arrival">
              <div className="col-auto">
                <label className="fw-bold">
                  {order.arrivedAt ? "Arrived at" : "Estimated arrival: "}
                </label>
              </div>
              <div className="col-auto">
                <p>
                  {order.arrivedAt
                    ? moment(order.arrivedAt).format("MM-DD-YYYY")
                    : moment(order.estimatedArrival).format("MM-DD-YYYY")}
                </p>
              </div>
              <div className="col d-flex justify-content-end">
                Order no. {order.id}
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#order_${order.id}`}
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Products
                  </button>
                </h2>
                <div
                  id={`order_${order.id}`}
                  className="accordion-collapse collapse "
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    {order.orderDetails.map((detail) => (
                      <ProductShowcase
                        product={detail.product}
                        extraFields={[
                          <MoneyFormat
                            className="justify-content-end"
                            money={detail.price}
                            label={
                              <p className="fw-bold">Buying price: &nbsp;</p>
                            }
                          />,
                        ]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
