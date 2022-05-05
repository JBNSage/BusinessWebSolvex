import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MoneyFormat, RatingIndicator, SectionHeader } from "../../components";
import { useAppContext } from "../../contexts/AppContext";
import { useProductsManager } from "../../hooks";
import { numberWithCommas } from "../../utilities/parsers";

export default function ProductDetails() {
  const { productId } = useParams();
  const { singleProduct, getProductById } = useProductsManager();
  const { addToCart, getCartProduct } = useAppContext();
  const [isInCart, setIsInCart] = useState(false);

  React.useEffect(() => {
    getProductById(parseInt(productId));

    let product = getCartProduct(parseInt(productId));

    if (product) {
      setIsInCart(true);
    }
  }, []);

  const handleAddToCart = () => {
    addToCart(singleProduct);

    setIsInCart(true);
  };

  if (!singleProduct) {
    return null;
  }

  return (
    <div className="product_details_container ">
      <SectionHeader
        title={singleProduct.name}
        rightComponent={<RatingIndicator rating={singleProduct.rating} />}
      />

      <div className="product_details spaced">
        <div className="row">
          <div className="col">
            <figure className="product_picture_container">
              <img
                src={singleProduct.picture}
                alt=""
                className="product_picture "
              />
            </figure>
          </div>
          <div className="col">
            <div className="row flex-column gap-3">
              <div className="product_available_amount col d-flex justify-content-end fw-bold">
                <p> Available: {singleProduct.quantity}</p>
              </div>

              <div className="provider col d-flex justify-content-end">
                <p className="product_detail_item provider">
                  by {singleProduct.provider.name}
                </p>
              </div>
              <div className="col d-flex justify-content-end">
                <MoneyFormat money={singleProduct.price} />
              </div>
              <div className="add_to_cart col d-flex justify-content-end">
                {singleProduct.quantity > 0 &&
                  (isInCart ? (
                    <p className="alert alert-secondary">
                      Already added to cart
                    </p>
                  ) : (
                    <button className="btn btn-dark" onClick={handleAddToCart}>
                      Add to cart
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
