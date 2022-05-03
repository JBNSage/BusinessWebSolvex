import React, { useState } from "react";
import { ModalForm } from "../../components";
import { SelectInput, TextInput } from "../../components/forms/inputs";
import {
  useAddressesManager,
  useAuthentication,
  useCountriesManager,
} from "../../hooks";
import { date, number, object, string } from "yup";

export default function Addresses() {
  const { addresses, getAddresses, addAddress, deleteAddress, updateAddress } =
    useAddressesManager();
  const { countries, getCountries } = useCountriesManager();
  const [selectedCountry, setSelectedCountry] = useState();
  const [currentCities, setCurrentCities] = useState();

  const { user } = useAuthentication();
  React.useEffect(() => {
    getAddresses();
    getCountries();
  }, []);

  const handleFormSubmitOnCreate = (values) => {
    console.log("create", values);
    addAddress(values);
  };

  const handleFormSubmitOnUpdate = (values) => {
    const { addressId, ...body } = values;

    updateAddress(addressId, body);
  };

  const getCountryCities = (countryId) => {
    var countryTMP = undefined;
    if (countryId) {
      countryTMP = countries.find((country) => country.id == countryId);
    }

    setCurrentCities(countryTMP?.cities);
    setSelectedCountry(countryTMP?.id);
  };

  const inputs = (
    <>
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
        <>
          <SelectInput
            name="country"
            label="Country"
            placeholder="Country"
            options={countries}
            value={selectedCountry}
            optionValue="id"
            optionLabel="name"
            onChange={(e) => {
              if (e.target.value) {
                getCountryCities(e.target.value);
                return;
              }
              getCountryCities(undefined);
            }}
          />

          <SelectInput
            name="city"
            label="City"
            placeholder="City"
            options={currentCities}
            optionLabel="name"
            optionValue="id"
          />
        </>
      )}
    </>
  );

  return (
    <div>
      {!addresses || addresses.length == 0
        ? "Aún no tiene direcciones"
        : addresses.map((address, index) => (
            <div key={index}>
              {address.id}
              <button
                onClick={() => {
                  deleteAddress(address.id);
                }}
              >
                delete address
              </button>
              <ModalForm
                id={`editAddress-${address.id}`}
                onOpen={() => getCountryCities(address.city.country)}
                title="Edit address"
                values={{
                  addressId: address.id,
                  user: user.id,
                  street: address.street,
                  building: address.building,
                  postal_code: address.postal_code,
                  city: address.city.id,
                }}
                callback={handleFormSubmitOnUpdate}
                validationSchema={validationSchema}
                actionButtonText="Edit address"
              >
                {inputs}
              </ModalForm>
            </div>
          ))}
      <ModalForm
        id="addAddress"
        title="Add address"
        values={{
          user: user.id,
          street: "",
          building: "",
          postal_code: "",
          city: "",
        }}
        callback={handleFormSubmitOnCreate}
        validationSchema={validationSchema}
        actionButtonText="Add address"
      >
        {inputs}
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
