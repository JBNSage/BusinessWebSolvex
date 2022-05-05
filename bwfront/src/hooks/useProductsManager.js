import React, { useState } from "react";
import { apiCalls } from "../utilities/apiCalls";

export default function useProductsManager() {
  const [products, setProducts] = useState();
  const [singleProduct, setSingleProduct] = useState();

  const getProducts = (category) => {
    if (category) {
      apiCalls.getProductsByCategory(category).then((response) => {
        if (response.data) {
          setProducts(response.data);
        }
      });
    } else {
      apiCalls.getProducts().then((response) => {
        if (response.data) {
          setProducts(response.data);
        }
      });
    }
  };

  const getProductById = async (id) => {
    const response = await apiCalls.getProductById(id);

    if (response.data) {
      setSingleProduct(response.data);
    }
    return response;
  };

  const updateProducts = (products) => {
    console.log(
      "🚀 ~ file: useProductsManager.js ~ line 25 ~ updateProducts ~ products",
      products
    );
    apiCalls.updateProducts(products);
  };

  return {
    products,
    singleProduct,
    getProducts,
    getProductById,
    updateProducts,
  };
}
