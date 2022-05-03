import React from "react";
import { useProductsManager } from "../../hooks";
import { Link, useSearchParams } from "react-router-dom";
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, getProducts } = useProductsManager();

  React.useEffect(() => {
    const query = `category=${searchParams.get("category")}`;
    getProducts(query);
  }, []);

  return products?.map((product, index) => (
    <Link key={index} to={`./product-details/${product.id}`}>
      {product.id}
    </Link>
  ));
}
