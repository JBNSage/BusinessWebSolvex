import React from "react";
import { date, object, string } from "yup";

import { SectionHeader, ShowPaymentMethods } from "../../components";

export default function CreditCards() {
  return (
    <div>
      <SectionHeader title="Payment methods" />
      <ShowPaymentMethods />
    </div>
  );
}
