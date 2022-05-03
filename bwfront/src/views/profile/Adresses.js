import React, { useState } from "react";
import { ModalForm } from "../../components";
import { SelectInput, TextInput } from "../../components/forms/inputs";
import {
  useAddressesManager,
  useAuthentication,
  useCountriesManager,
} from "../../hooks";
import { date, number, object, string } from "yup";

export default function Adresses() {
  const { addresses, getAddresses, addAddress } = useAddressesManager();
  const { countries, getCountries } = useCountriesManager();
  const [selectedCountry, setSelectedCountry] = useState();

  const { user } = useAuthentication();
  React.useEffect(() => {
    getAddresses();
    getCountries();
  }, []);

  const handleFormSubmit = (values) => {
    addAddress(values);
  };

  return (
    <div>
      {!addresses || addresses.length == 0
        ? "Aún no tiene direcciones"
        : addresses.map((address) => address.id)}
      <ModalForm
        title="Agregar método de pago"
        values={{
          user: user.id,
          street: "",
          building: "",
          postal_code: "",
          city: "",
        }}
        callback={handleFormSubmit}
        validationSchema={validationSchema}
        actionButtonText="Add payment method"
      >
        <TextInput name="street" label="Street" placeholder="Street" />
        <TextInput
          name="building"
          label="Building, house, etc..."
          placeholder="Building, house, etc..."
        />
        <TextInput
          type="number"
          name="postal_code"
          label="Zip code"
          placeholder="Zip code"
        />
        {countries && (
          <SelectInput
            name="country"
            label="Country"
            placeholder="Country"
            options={countries}
            optionLabel="name"
            onChange={(e) => {
              if (e.target.value) {
                setSelectedCountry(JSON.parse(e.target.value));
                return;
              }
              setSelectedCountry(undefined);
            }}
          />
        )}

        {countries && (
          <SelectInput
            name="city"
            label="City"
            placeholder="City"
            options={selectedCountry?.cities}
            optionLabel="name"
            optionValue="id"
          />
        )}
      </ModalForm>
    </div>
  );
}
const validationSchema = object({
  street: string().required("This field is required"),
  building: string().required("This field is required"),
  postal_code: string()
    .matches(/^[0-9]*$/g, "This field must be olny digits")
    .required("This field is required"),
  city: number().required("This field is required"),
});
