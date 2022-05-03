import React, { useState } from "react";
import { apiCalls } from "../utilities/apiCalls";

export default function useCategoriesManager() {
  const [categories, setCategories] = useState();

  const getCategories = () => {
    apiCalls.getCategories().then((response) => {
      if (response.data) {
        setCategories(response.data);
      }
    });
  };

  return { categories, getCategories };
}
