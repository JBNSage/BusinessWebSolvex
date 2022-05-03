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
  const deleteAddress = () => {};
  return {
    getAddresses,
    addAddress,
    deleteAddress,
    addresses,
  };
}
