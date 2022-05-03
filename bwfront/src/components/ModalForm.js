import React, { Children, createRef } from "react";
import { Formik, Form } from "formik";
import { date, number, object, string } from "yup";
import { TextInput } from "./forms/inputs";

export default function ModalForm({
  title,
  children,
  validationSchema,
  values,
  callback,
  actionButtonText,
  onOpen,
  id = "genericForm",
}) {
  const modalRef = createRef();
  const [currentModal, setCurrentModal] = React.useState();

  const openModal = () => {
    if (onOpen) {
      onOpen();
    }
    const modal = new window.bootstrap.Modal(modalRef.current);
    setCurrentModal(modal);
    modal.show();
  };

  const closeModal = () => {
    currentModal.hide();
  };
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        {actionButtonText}
      </button>
      <div ref={modalRef} className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCardModalLabel">
                {title}
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
                initialValues={values}
                onSubmit={(values) => {
                  callback(values);
                  closeModal();
                }}
              >
                <Form id={id}>{children}</Form>
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
                form={id}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
