import React from "react";
import { apiCalls } from "../utilities/apiCalls";
import useAuthentication from "./useAuthentication";

export default function useAddressesManager() {
  const [addresses, setAddresses] = React.useState([]);
  const { user, storeUser } = useAuthentication();
  const getAddresses = () => {
    setAddresses(user.addresses);
  };
  const addAddress = (values) => {
    apiCalls.addAddress(values).then((response) => {
      if (response.data) {
        var userTMP = JSON.parse(JSON.stringify(user));

        userTMP.addresses.push(values);

        storeUser(userTMP);
      }
    });

    getAddresses();
  };
  const deleteAddress = (addressId) => {
    apiCalls.deleteAddress(addressId).then((response) => {
      if (response.data) {
        var userTMP = JSON.parse(JSON.stringify(user));

        const addressIndex = userTMP.addresses.findIndex(
          (address) => address.id == addressId
        );

        userTMP.splice(addressIndex, 1);

        storeUser(userTMP);
      }
    });
    getAddresses();
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
