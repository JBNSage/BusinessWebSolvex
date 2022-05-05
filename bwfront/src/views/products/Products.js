import React from "react";
import { useProductsManager } from "../../hooks";
import { Link, useParams } from "react-router-dom";
import { numberWithCommas } from "../../utilities/parsers";
import { RatingIndicator, SectionHeader } from "../../components";

export default function Products() {
  const { categoryId } = useParams();
  const { products, getProducts } = useProductsManager();

  React.useEffect(() => {
    getProducts(categoryId);
  }, []);

  return (
    <div className="products_container">
      <SectionHeader title="Products" />
      {products?.map((product, index) => (
        <Link
          className="product_item "
          key={index}
          to={`./product-details/${product.id}`}
        >
          <div className="row m-0">
            <div className="col-auto p-0">
              <figure className="product_picture_container m-0">
                <img className="product_picture" src={product.picture} alt="" />
              </figure>
            </div>
            <div className="product_details_container  col ps-3 p-2 ">
              <div className="product_detail_item product_name mb-2">
                <p className="product_detail fw-bold text-uppercase fs-5">
                  {product.name}
                </p>
              </div>
              <div className="product_detail_item price d-flex align-items-start">
                <p className="dollar_sign fw-bold">US$</p>
                <p className="product_detail fw-bold">
                  {numberWithCommas(product.price)}
                </p>
              </div>
              <div className="product_detail_item provider pt-3 d-flex align-items-start">
                <p className="product_detail">by {product.provider.name}</p>
              </div>
            </div>
            <div className="product_business_details_container col p-2">
              <div className="product_detail_item row justify-content-end">
                <RatingIndicator rating={product.rating} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
