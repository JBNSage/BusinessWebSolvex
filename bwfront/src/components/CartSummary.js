import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import MoneyFormat from "./MoneyFormat";

export default function CartSummary({ actionButton: { text, link } }) {
  const { calculateCartTotal } = useAppContext();
  const { subTotal, total, tax, shipping } = calculateCartTotal();

  return (
    <div className="cart_summary_container col ">
      <div className="cart_summary p-3 rounded d-flex flex-column align-items-end">
        <p className="fw-bold text-capitalize"> Sub total: {subTotal}</p>
        <p className="fw-bold text-capitalize">Tax: {tax}%</p>

        <MoneyFormat
          money={shipping}
          label={<p className="fw-bold text-capitalize">Shipping: &nbsp;</p>}
        />

        <MoneyFormat
          money={total}
          label={<p className="fw-bold text-capitalize">Total: &nbsp;</p>}
        />

        {text && (
          <Link to={link} className="btn btn-dark">
            {text}
          </Link>
        )}
      </div>
    </div>
  );
}
