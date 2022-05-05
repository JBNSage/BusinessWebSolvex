import React from "react";
import { useProductsManager } from "../../hooks";
import { Link, useParams } from "react-router-dom";
import { numberWithCommas } from "../../utilities/parsers";
import {
  ProductShowcase,
  RatingIndicator,
  SectionHeader,
} from "../../components";

export default function Products() {
  const { categoryId } = useParams();

  const { products, getProducts } = useProductsManager();

  React.useEffect(() => {
    getProducts(categoryId);
  }, [categoryId]);

  return (
    <div className="products_container">
      <SectionHeader title="Products" />
      <div className="row flex-column gap-3 products_container spaced">
        {products?.map((product, index) => (
          <ProductShowcase key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
