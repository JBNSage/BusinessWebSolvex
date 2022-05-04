import React from "react";
import { useAuthentication, useCardsManager } from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { paymentMethodStorage } from "../utilities/constants";
import { date, number, object, string } from "yup";
import ModalForm from "./ModalForm";
import { TextInput } from "./forms/inputs";
import moment from "moment";

export default function ShowPaymentMethods() {
  const { cards, getCards, addCard, deleteCard, editCard } = useCardsManager();
  const { user } = useAuthentication();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    getCards();
  }, []);

  const handleFormSubmitOnAdd = (values) => {
    addCard(values);
  };

  const handleFormSubmitOnEdit = (values) => {
    const { cardId, ...body } = values;

    editCard(cardId, body);
  };

  const setPaymentMethod = (card) => {
    sessionStorage.setItem(paymentMethodStorage, JSON.stringify(card));
    navigate("../place-order");
  };

  const inputs = (
    <>
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
        name="expirationDate"
        label="Card expiration date"
        placeholder="Card expiration date"
      />
    </>
  );

  return (
    <div>
      {cards?.map((card, index) => (
        <div
          key={index}
          onClick={
            location.pathname == "/checkout/payment-method"
              ? () => setPaymentMethod(card)
              : undefined
          }
        >
          {console.log(card)}
          card.id
          {location.pathname == "/profile/payment-methods" && (
            <>
              <button onClick={() => deleteCard(card.id)}>
                Delete payment method
              </button>
              <ModalForm
                id={`editPaymentMethod-${card.id}`}
                title="Edit payment method"
                values={{
                  userId: user.id,
                  cardId: card.id,
                  name: card.name,
                  number: card.number,
                  cvv: card.cvv,
                  expirationDate: moment(card.expirationDate).format(
                    "YYYY-MM-DD"
                  ),
                }}
                callback={handleFormSubmitOnEdit}
                validationSchema={validationSchema}
                actionButtonText="Edit payment method"
              >
                {inputs}
              </ModalForm>
            </>
          )}
        </div>
      ))}

      <ModalForm
        id="addPaymentMethod"
        title="Add payment method"
        values={{
          userId: user.id,
          name: "",
          number: "",
          cvv: "",
          expirationDate: "",
        }}
        callback={handleFormSubmitOnAdd}
        validationSchema={validationSchema}
        actionButtonText="Add payment method"
      >
        {inputs}
      </ModalForm>
    </div>
  );
}
const validationSchema = object({
  name: string().required("This field is required"),
  number: string()
    .min(15, "Card number must be 15 or 16 digits")
    .max(16, "Card number must be 15 or 16 digits")
    .matches(/^[0-9]*$/g, "This field must be olny digits")
    .required("This field is required"),
  cvv: string()
    .length(3)
    .matches(/^[0-9]*$/g, "This field must be olny digits")
    .required("This field is required"),
  expirationDate: date().required("This field is required"),
});
