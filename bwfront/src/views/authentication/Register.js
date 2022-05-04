import React, { useState } from "react";
import { Formik, Form } from "formik";
import { string, object, ref } from "yup";
import { TextInput } from "../../components/forms/inputs";
import { AlertFormError } from "../../components";

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
      <Form>
        <TextInput placeholder="Nombre" label="Nombre" name="firstName" />
        <TextInput placeholder="Apellido" label="Apellido" name="lastName" />
        <TextInput
          placeholder="Correo electrónico"
          label="Correo electrónico"
          name="email"
        />
        <TextInput
          placeholder="Contraseña"
          label="Contraseña"
          name="password"
          type="password"
        />
        <TextInput
          placeholder="Confirmar contraseña"
          label="Confirmar contraseña"
          name="confirmPassword"
          type="password"
        />
        {raiseAlert && <AlertFormError message={raiseAlert} />}
        <button type="submit">Iniciar sesión</button>
      </Form>
    </Formik>
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
