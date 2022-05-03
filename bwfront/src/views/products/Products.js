import React from "react";
import { useProductsManager } from "../../hooks";
import { Link, useSearchParams } from "react-router-dom";
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, getProducts } = useProductsManager();
  console.log(
    "🚀 ~ file: Products.js ~ line 7 ~ Products ~ products",
    products
  );

  React.useEffect(() => {
    const query = `category=${searchParams.get("category")}`;

    getProducts(query);
  }, []);

  return products?.map((product) => (
    <Link to={`./product-details/${product.id}`}>{product.id}</Link>
  ));
}
