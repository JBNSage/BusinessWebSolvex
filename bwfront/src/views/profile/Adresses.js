import React, { useState } from "react";
import { ModalForm, SectionHeader } from "../../components";
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
        name="postalCode"
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
            name="cityId"
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
    <div className="addresses_container ">
      <SectionHeader title="Addresses" />
      <div className="addresses_container spaced">
        {!addresses || addresses.length == 0
          ? "A??n no tiene direcciones"
          : addresses.map((address, index) => (
              <div
                key={index}
                className="address_item rounded overflow-hidden p-2"
              >
                <div className="row">
                  <div className="col text-capitalize">{`${address.street}, ${address.building}, ${address.city.name}`}</div>
                </div>

                <div className="mt-2">
                  <ModalForm
                    id={`editAddress-${address.id}`}
                    onOpen={() => getCountryCities(address.city.countryId)}
                    title="Edit address"
                    values={{
                      addressId: address.id,
                      userId: user.id,
                      street: address.street,
                      building: address.building,
                      postalCode: address.postalCode,
                      cityId: address.cityId,
                    }}
                    callback={handleFormSubmitOnUpdate}
                    validationSchema={validationSchema}
                    actionButtonText="Edit address"
                  >
                    {inputs}
                  </ModalForm>
                  <button
                    className="btn btn-dark ms-2"
                    onClick={() => {
                      deleteAddress(address.id);
                    }}
                  >
                    delete address
                  </button>
                </div>
              </div>
            ))}

        <div className="add_address mt-3">
          <ModalForm
            id="addAddress"
            title="Add address"
            values={{
              userId: user.id,
              street: "",
              building: "",
              postalCode: "",
              cityId: "",
            }}
            callback={handleFormSubmitOnCreate}
            validationSchema={validationSchema}
            actionButtonText="Add address"
          >
            {inputs}
          </ModalForm>
        </div>
      </div>
    </div>
  );
}
const validationSchema = object({
  street: string().required("This field is required"),
  building: string().required("This field is required"),
  postalCode: string()
    .matches(/^[0-9]*$/g, "This field must be olny digits")
    .required("This field is required"),
  cityId: number().required("This field is required"),
});
