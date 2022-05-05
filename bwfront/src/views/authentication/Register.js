import React, { useState } from "react";
import { Formik, Form } from "formik";
import { string, object, ref } from "yup";
import { TextInput } from "../../components/forms/inputs";
import { AlertFormError, AppContainer } from "../../components";
import { Link } from "react-router-dom";

export default function Register({ login, register }) {
  const [raiseAlert, setRaiseAlert] = useState();

  const handleSubmit = async (values) => {
    //IF REGISTER IS SUCCESSFULL, WE THEN LOGIN THE REGISTERED USER, IF NOT, THEN WE
    //CAPTURE THE ERROR TO DISPLAY THE ERROR MESSAGE
    const registerResponse = await register(values);

    if (registerResponse.error) {
      setRaiseAlert("An error has ocurred, please try later");
      return;
    }

    //IF LOGIN IS SUCCESSFULL, THE HOOK WILL UPDATE THE ROUTES TREE, IF NOT, THEN WE
    //CAPTURE THE ERROR TO DISPLAY THE ERROR MESSAGE

    const loginResponse = await login({
      email: values.email,
      password: values.password,
    });

    if (loginResponse.error) {
      setRaiseAlert();
    }
  };

  return (
    <AppContainer>
      <h2 className="text-uppercase fw-bold text-center mb-5">
        Become a member
      </h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className="authentication_form_container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Form className="w-50">
                <TextInput
                  placeholder="First name"
                  label="First name"
                  name="firstName"
                />
                <TextInput
                  placeholder="Last name"
                  label="Last name"
                  name="lastName"
                />
                <TextInput placeholder="Email" label="Email" name="email" />
                <TextInput
                  placeholder="Password"
                  label="Password"
                  name="password"
                  type="password"
                />
                <TextInput
                  placeholder="Confirm password"
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                />
                {raiseAlert && <AlertFormError message={raiseAlert} />}
                <button type="submit" className="btn btn-dark w-100 mt-3">
                  Register
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
      <div className="row flex-column mt-3">
        <div className="col d-flex justify-content-center">
          <Link to="../" className="btn btn-outline-dark w-50 ">
            Go back
          </Link>
        </div>
      </div>
    </AppContainer>
  );
}

const validationSchema = object({
  firstName: string().required("This field is required"),
  lastName: string().required("This field is required"),
  email: string()
    .email("It must be a valid email")
    .required("It must be a valid email"),
  password: string().required("This field is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must be equal")
    .required("Passwords must be equal"),
});
