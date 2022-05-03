import React from "react";
import { Formik, Form } from "formik";
import { string, object, ref } from "yup";
import { TextInput } from "../../components/forms/inputs";
import { AlertFormError } from "../../components";
import { useAuthentication } from "../../hooks";

export default function PersonalInformation() {
  const [raiseAlert, setRaiseAlert] = React.useState();
  const { user, updateUser } = useAuthentication();

  const handleSubmit = async (values) => {
    console.log(
      "🚀 ~ file: PersonalInformation.js ~ line 13 ~ handleSubmit ~ values",
      values
    );

    updateUser(values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <TextInput placeholder="Name" label="Name" name="first_name" />
        <TextInput placeholder="Last name" label="Last name" name="last_name" />
        <TextInput placeholder="Email" label="Email" name="email" />
        <TextInput placeholder="Phone" label="Phone" name="phone" />

        {raiseAlert && <AlertFormError message={"Error"} />}
        <button type="submit">Guardar</button>
      </Form>
    </Formik>
  );
}

const validationSchema = object({
  first_name: string().required("This field is required"),
  last_name: string().required("This field is required"),
  email: string()
    .email("It must be a valid email")
    .required("It must be a valid email"),
  phone: string(),
});
