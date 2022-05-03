import React, { useState } from "react";
import { apiCalls } from "../utilities/apiCalls";

export default function useProductsManager() {
  const [products, setProducts] = useState();
  const [singleProduct, setSingleProduct] = useState();

  const getProducts = (query) => {
    console.log(
      "🚀 ~ file: useProductsManager.js ~ line 8 ~ getProducts ~ query",
      query
    );
    apiCalls.getProducts().then((response) => {
      if (response.data) {
        setProducts(response.data);
      }
    });
  };

  const getProductById = (id, query) => {
    apiCalls.getProductById(id, query).then((response) => {
      if (response.data) {
        setSingleProduct(response.data);
      }
    });
  };

  return { products, singleProduct, getProducts, getProductById };
}
