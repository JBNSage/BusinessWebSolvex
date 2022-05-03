import React, { createRef } from "react";
import { Formik, Form } from "formik";
import { date, number, object, string } from "yup";
import { TextInput } from "../../components/forms/inputs";
import { useAuthentication, useCardsManager } from "../../hooks";
import { paymentMethodStorage } from "../../utilities/constants";
import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
  const { cards, getCards, addCard, deleteCard } = useCardsManager();
  const { user } = useAuthentication();
  const modalRef = createRef();
  const [currentModal, setCurrentModal] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    getCards();
  }, []);

  const handleFormSubmit = (values) => {
    addCard(values);
    closeModal();
  };

  const openModal = () => {
    const modal = new window.bootstrap.Modal(modalRef.current);
    setCurrentModal(modal);
    modal.show();
  };

  const closeModal = () => {
    currentModal.hide();
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

      <button type="button" className="btn btn-primary" onClick={openModal}>
        Add payment method
      </button>

      <div ref={modalRef} className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCardModalLabel">
                Agregar método de pago
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                validationSchema={validationSchema}
                initialValues={{
                  user: user.id,
                  name: "",
                  number: "",
                  cvv: "",
                  expiration_date: "",
                }}
                onSubmit={handleFormSubmit}
              >
                <Form id="addCardForm">
                  <TextInput
                    name="name"
                    label="Card name"
                    placeholder="Card name"
                  />
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
                </Form>
              </Formik>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <input
                type="submit"
                className="btn btn-primary"
                value="Save changes"
                form="addCardForm"
              />
            </div>
          </div>
        </div>
      </div>
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
