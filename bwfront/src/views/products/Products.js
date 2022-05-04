import React from "react";
import { useProductsManager } from "../../hooks";
import { Link, useSearchParams } from "react-router-dom";
import { numberWithCommas } from "../../utilities/parsers";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, getProducts } = useProductsManager();

  React.useEffect(() => {
    getProducts(searchParams.get("category"));
  }, []);

  return (
    <div className="products_container">
      <div className="section_header_container pb-4">
        <h2 className="section_header fw-bold">Products</h2>
      </div>
      {products?.map((product, index) => {
        let rating_indicator = [];

        for (let index = 0; index < 5; index++) {
          if (product.rating > index) {
            rating_indicator.push(
              <span class="material-icons-outlined col">star</span>
            );
          } else {
            rating_indicator.push(
              <span class="material-icons-outlined col">star_border</span>
            );
          }
        }

        return (
          <Link
            className="product_item"
            key={index}
            to={`./product-details/${product.id}`}
          >
            <div className="row">
              <div className="col-auto p-0">
                <figure className="product_picture_container m-0">
                  <img
                    className="product_picture"
                    src={product.picture}
                    alt=""
                  />
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
                <div className="product_detail_item row">
                  {rating_indicator}{" "}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
