import React, { useState } from "react";
import { Formik, Form } from "formik";
import { string, object } from "yup";
import { TextInput } from "../../components/forms/inputs";
import { AlertFormError } from "../../components";
import { Link } from "react-router-dom";

export default function Login({ login }) {
  const [raiseAlert, setRaiseAlert] = useState();

  const handleSubmit = async (values) => {
    //IF LOGIN IS SUCCESSFULL, THE HOOK WILL UPDATE THE ROUTES TREE, IF NOT, THEN WE
    //CAPTURE THE ERROR TO DISPLAY THE ERROR MESSAGE

    const response = await login(values);

    if (response.error) {
      setRaiseAlert();
    }
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
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
          {raiseAlert && <AlertFormError message={"Error"} />}
          <button type="submit">Iniciar sesión</button>
        </Form>
      </Formik>
      <Link to="register">Registrarse</Link>
      <Link to="reset-password">¿Olvidó su contraseña?</Link>
    </>
  );
}

const validationSchema = object({
  email: string()
    .email("El correo debe ser un correo válido")
    .required("Este campo es obligatorio"),
  password: string().required("Este campo es obligatorio"),
});
