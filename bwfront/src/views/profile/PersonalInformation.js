import React from "react";
import { Formik, Form } from "formik";
import { string, object, ref } from "yup";
import { TextInput } from "../../components/forms/inputs";
import { AlertFormError } from "../../components";
import { useAuthentication } from "../../hooks";

export default function PersonalInformation({ logOut }) {
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
    <div className="personal_information spaced">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextInput placeholder="Name" label="Name" name="firstName" />
          <TextInput
            placeholder="Last name"
            label="Last name"
            name="lastName"
          />
          <TextInput placeholder="Email" label="Email" name="email" />
          <TextInput placeholder="Phone" label="Phone" name="phone" />

          {raiseAlert && <AlertFormError message={"Error"} />}
          <div className="row justify-content-between">
            <div className="col-auto">
              <button type="submit" className="btn btn-dark mt-3">
                Save
              </button>
            </div>
            <div className="col-auto">
              <button
                type="button"
                onClick={logOut}
                className="btn btn-dark mt-3"
              >
                Log out
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

const validationSchema = object({
  firstName: string().required("This field is required"),
  lastName: string().required("This field is required"),
  email: string()
    .email("It must be a valid email")
    .required("It must be a valid email"),
  phone: string().nullable(),
});
