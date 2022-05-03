import React, { createRef } from "react";
import { Formik, Form } from "formik";
import { date, number, object, string } from "yup";
import { TextInput } from "../../components/forms/inputs";
import { useAuthentication, useCardsManager } from "../../hooks";
import { paymentMethodStorage } from "../../utilities/constants";
import { useNavigate } from "react-router-dom";
import { ModalForm } from "../../components";

export default function PaymentMethod() {
  const { cards, getCards, addCard, deleteCard } = useCardsManager();
  const { user } = useAuthentication();
  const navigate = useNavigate();

  React.useEffect(() => {
    getCards();
  }, []);

  const handleFormSubmit = (values) => {
    addCard(values);
  };

  const setPaymentMethod = (card) => {
    sessionStorage.setItem(paymentMethodStorage, JSON.stringify(card));
    navigate("../place-order");
  };

  return (
    <div>
      <h2>Select payment method</h2>
      {cards?.map((card, index) => (
        <div key={index} onClick={() => setPaymentMethod(card)}>
          card.id
          <button onClick={() => deleteCard(card.id)}>
            Delete payment method
          </button>
        </div>
      ))}

      <ModalForm
        title="Add payment method"
        values={{
          user: user.id,
          name: "",
          number: "",
          cvv: "",
          expiration_date: "",
        }}
        callback={handleFormSubmit}
        validationSchema={validationSchema}
        actionButtonText="Add payment method"
      >
        <TextInput name="name" label="Card name" placeholder="Card name" />
        <TextInput
          type="number"
          name="number"
          label="Card number"
          placeholder="Card number"
        />
        <TextInput
          type="number"
          name="cvv"
          label="Card cvv"
          placeholder="Card cvv"
        />
        <TextInput
          type="date"
          name="expiration_date"
          label="Card expiration date"
          placeholder="Card expiration date"
        />
      </ModalForm>
    </div>
  );
}
const validationSchema = object({
  name: string().required("This field is required"),
  number: string()
    .min(15, "Card number must be valid")
    .max(16, "Card number must be valid")
    .matches(/^[0-9]*$/g, "This field must be olny digits")
    .required("This field is required"),
  cvv: string()
    .length(3)
    .matches(/^[0-9]*$/g, "This field must be olny digits")
    .required("This field is required"),
  expiration_date: date().required("This field is required"),
});
