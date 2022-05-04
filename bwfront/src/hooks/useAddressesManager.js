import React from "react";
import { apiCalls } from "../utilities/apiCalls";
import useAuthentication from "./useAuthentication";

export default function useAddressesManager() {
  const [addresses, setAddresses] = React.useState([]);
  const { user, storeUser } = useAuthentication();

  console.log(
    "🚀 ~ file: useAddressesManager.js ~ line 7 ~ useAddressesManager ~ addresses",
    addresses
  );

  const getAddresses = async () => {
    const response = await apiCalls.getAddresses(user.id);

    if (response.data) {
      setAddresses(response.data);
    }
  };

  const addAddress = async (values) => {
    const response = await apiCalls.addAddress(values);

    getAddresses();

    return response;
  };

  const deleteAddress = async (addressId) => {
    const response = await apiCalls.deleteAddress(addressId);

    await getAddresses();
  };

  const updateAddress = (addressId, body) => {
    apiCalls.updateAddress(addressId, body).then((response) => {
      if (response.data) {
        var userTMP = JSON.parse(JSON.stringify(user));

        const addressIndex = userTMP.addresses.findIndex(
          (address) => address.id == addressId
        );

        userTMP[addressIndex] = response.data;

        storeUser(userTMP);
      }
    });
    getAddresses();
  };
  return {
    getAddresses,
    addAddress,
    deleteAddress,
    updateAddress,
    addresses,
  };
}
