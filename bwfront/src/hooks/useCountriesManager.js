import React from "react";
import { apiCalls } from "../utilities/apiCalls";

export default function useCountriesManager() {
  const [countries, setCountries] = React.useState();

  const getCountries = () => {
    apiCalls.getCountries().then((response) => {
      if (response.data) {
        setCountries(response.data);
      }
    });
  };
  return {
    countries,
    getCountries,
  };
}
