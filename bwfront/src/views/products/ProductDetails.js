import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import { useProductsManager } from "../../hooks";

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

  return (
    <div>
      {singleProduct && (
        <div>
          {singleProduct.id}
          disponible {singleProduct.quantity}
          {singleProduct.quantity > 0 &&
            (isInCart ? (
              <p>Already added to cart</p>
            ) : (
              <button onClick={handleAddToCart}>add to cart</button>
            ))}
        </div>
      )}
    </div>
  );
}
