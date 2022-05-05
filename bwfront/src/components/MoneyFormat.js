import React from "react";
import { numberWithCommas } from "../utilities/parsers";

export default function MoneyFormat({ money, label, className }) {
  return (
    <div className={`product_detail_item price d-flex ${className}`}>
      {label}
      <p className="dollar_sign fw-bold ">US$</p>
      <p className="product_detail fw-bold text-capitalize ">
        {numberWithCommas(money)}
      </p>
    </div>
  );
}
