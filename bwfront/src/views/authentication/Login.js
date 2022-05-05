import React, { useState } from "react";
import { Formik, Form } from "formik";
import { string, object } from "yup";
import { TextInput } from "../../components/forms/inputs";
import { AlertFormError, AppContainer } from "../../components";
import { Link } from "react-router-dom";

export default function Login({ login }) {
  const [raiseAlert, setRaiseAlert] = useState();

  const handleSubmit = async (values) => {
    //IF LOGIN IS SUCCESSFULL, THE HOOK WILL UPDATE THE ROUTES TREE, IF NOT, THEN WE
    //CAPTURE THE ERROR TO DISPLAY THE ERROR MESSAGE

    const response = await login(values);

    if (response.error) {
      setRaiseAlert("Email or password incorrect");
    }
  };

  return (
    <AppContainer>
      <h2 className="text-uppercase fw-bold text-center mb-5">
        Already registered
      </h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className="authentication_form_container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Form className="w-50">
                <TextInput placeholder="Email" label="Email" name="email" />
                <TextInput
                  placeholder="Password"
                  label="Password"
                  name="password"
                  type="password"
                />
                {raiseAlert && <AlertFormError message={raiseAlert} />}
                <button
                  type="submit"
                  className="btn btn-outline-dark w-100 mt-3"
                >
                  Log in
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>

      <div className="row flex-column mt-5">
        <div className="col">
          <h2 className=" text-uppercase fw-bold text-center mb-3">
            New member
          </h2>
        </div>

        <div className="col d-flex justify-content-center">
          <Link to="register" className="btn btn-dark w-50 ">
            Register
          </Link>
        </div>
      </div>
    </AppContainer>
  );
}

const validationSchema = object({
  email: string()
    .email("It must be a valid email")
    .required("This field is required"),
  password: string().required("This field is required"),
});
