import React from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../utilities/parsers";
import MoneyFormat from "./MoneyFormat";
import RatingIndicator from "./ratingIndicator/RatingIndicator";

export default function ProductShowcase({
  product,
  goToDetails = true,
  extraFields,
}) {
  const RenderContainer = ({ children, ...props }) => {
    if (!goToDetails) {
      return <div {...props}>{children}</div>;
    }

    return (
      <Link {...props} to={`./product-details/${product.id}`}>
        {children}
      </Link>
    );
  };

  return (
    <RenderContainer className="product_item ">
      <div className="row m-0 rounded overflow-hidden">
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
          <MoneyFormat money={product.price} />
          <div className="product_detail_item provider pt-3 d-flex align-items-start">
            <p className="product_detail">by {product.provider.name}</p>
          </div>
        </div>
        <div className="product_business_details_container col p-2 ">
          <div className="product_detail_item row justify-content-end">
            <RatingIndicator rating={product.rating} />
          </div>
          {extraFields?.map((field, index) => (
            <>
              <div
                key={index}
                className="product_detail_item row justify-content-end pt-3"
              >
                {field}
              </div>
            </>
          ))}
        </div>
      </div>
    </RenderContainer>
  );
}
