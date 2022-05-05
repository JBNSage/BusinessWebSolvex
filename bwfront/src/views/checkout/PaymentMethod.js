import React from "react";
import { SectionHeader, ShowPaymentMethods } from "../../components";

export default function PaymentMethod() {
  return (
    <div>
      <SectionHeader title="Select payment method" />
      <ShowPaymentMethods />
    </div>
  );
}
