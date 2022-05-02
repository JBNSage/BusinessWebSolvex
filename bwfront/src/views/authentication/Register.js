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
      setRaiseAlert();
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
        {raiseAlert && <AlertFormError message={"Error"} />}
        <button type="submit">Iniciar sesión</button>
      </Form>
    </Formik>
  );
}

const validationSchema = object({
  firstName: string().required("Este campo es obligatorio"),
  lastName: string().required("Este campo es obligatorio"),
  email: string()
    .email("El correo debe ser un correo válido")
    .required("El correo debe ser un correo válido"),
  password: string().required("Este campo es obligatorio"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas deben ser iguales")
    .required("Las contraseñas deben ser iguales"),
});
