import React from "react";
import { date, object, string } from "yup";

import { ShowPaymentMethods } from "../../components";

export default function CreditCards() {
  return (
    <div>
      <h2>Payment method</h2>
      <ShowPaymentMethods />
    </div>
  );
}
