import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import { MoneyFormat, ProductShowcase, SectionHeader } from "../../components";
import { numberWithCommas } from "../../utilities/parsers";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, calculateCartTotal } =
    useAppContext();

  if (!cart || cart.length == 0) {
    return <div>The cart is empty</div>;
  }
  const { subTotal, total, tax, shipping } = calculateCartTotal();

  const decreaseQuantity = (inputId, cartItem) => {
    const input = document.getElementById(inputId);

    let inputValueTMP = input.value - 1;

    if (inputValueTMP > 0) {
      updateQuantity(cartItem.product.id, inputValueTMP);
      input.value = input.value - 1;
    }
  };
  const increaseQuantity = (inputId, cartItem) => {
    const input = document.getElementById(inputId);

    let inputValueTMP = parseInt(input.value) + 1;
    console.log(
      "🚀 ~ file: Cart.js ~ line 30 ~ increaseQuantity ~ inputValueTMP",
      inputValueTMP
    );

    if (cartItem.product.quantity >= inputValueTMP) {
      updateQuantity(cartItem.product.id, inputValueTMP);
      input.value = input.value + 1;
    }
  };

  return (
    <div className="cart_container">
      <SectionHeader title="cart" />
      <div className="row">
        <div className="col-8">
          {cart.map((cartItem, index) => (
            <ProductShowcase
              key={index}
              product={cartItem.product}
              goToDetails={false}
              extraFields={[
                <p className="fw-bold text-capitalize text-end">
                  Available: {cartItem.product.quantity}
                </p>,
                <div className="row">
                  <div className="col-auto p-0 ">
                    <span
                      class="material-icons-outlined btn btn-light"
                      onClick={() =>
                        decreaseQuantity(`quantityInput_${index}`, cartItem)
                      }
                    >
                      remove
                    </span>
                  </div>
                  <div className="col p-0 ">
                    <input
                      id={`quantityInput_${index}`}
                      type="number"
                      className="form-control w-100 me-2 text-center"
                      disabled
                      value={cartItem.quantity}
                      onChange={(e) => {
                        if (
                          cartItem.product.quantity >= e.target.value &&
                          e.target.value > 0
                        ) {
                          updateQuantity(cartItem.product.id, e.target.value);
                        }
                      }}
                    />
                  </div>
                  <div className="col-auto p-0 ">
                    <span
                      class="material-icons-outlined btn btn-light"
                      onClick={() =>
                        increaseQuantity(`quantityInput_${index}`, cartItem)
                      }
                    >
                      add
                    </span>
                  </div>
                </div>,
              ]}
            />
            // <div key={index}>
            //   {cartItem.product.id}
            //   disponible {cartItem.product.quantity}
            //   <label>cantidad</label>
            //   <input
            //     type="number"
            //     value={cartItem.quantity}
            //     onChange={(e) => {
            //       if (
            //         cartItem.product.quantity >= e.target.value &&
            //         e.target.value > 0
            //       ) {
            //         updateQuantity(cartItem.product.id, e.target.value);
            //       }
            //     }}
            //   />
            //   <button onClick={() => removeFromCart(cartItem.product.id)}>
            //     Eliminar del carrito
            //   </button>
            // </div>
          ))}
        </div>
        <div className="cart_summary_container col ">
          <div className="cart_summary p-3 rounded d-flex flex-column align-items-end">
            <p className="fw-bold text-capitalize"> Sub total: {subTotal}</p>
            <p className="fw-bold text-capitalize">Tax: {tax}%</p>

            <MoneyFormat
              money={shipping}
              label={
                <p className="fw-bold text-capitalize">Shipping: &nbsp;</p>
              }
            />

            <MoneyFormat
              money={total}
              label={<p className="fw-bold text-capitalize">Total: &nbsp;</p>}
            />

            <Link to="./preview-order" className="btn btn-dark">
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
