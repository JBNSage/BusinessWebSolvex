import React, { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import * as Views from "./views";
import { useAuthentication } from "./hooks";

export default function AppRoutes() {
  const { login, user, register } = useAuthentication();
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/">
              <Route index element={<Views.Home />} />
              <Route path="categories" element={<Views.Categories />} />
              <Route
                path="products/product-details/:productId"
                element={<Views.ProductDetails />}
              />
              <Route path="profile">
                <Route index element={<Views.Profile />} />
                <Route path="addresses" element={<Views.Adresses />} />
                <Route path="credit-cards" element={<Views.CreditCards />} />
                <Route path="my-orders" element={<Views.Orders />} />
              </Route>
              <Route path="checkout">
                <Route index element={<Views.Cart />} />
                <Route path="preview-order" element={<Views.PreviewOrder />} />
                <Route
                  path="order-placed/:orderId"
                  element={<Views.OrderPlaced />}
                />
                <Route path="buy-now" element={<Views.BuyNow />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/authenticate">
              <Route index element={<Views.Login login={login} />} />
              <Route
                path="register"
                element={<Views.Register login={login} register={register} />}
              />
              <Route path="reset-password" element={<Views.ResetPassword />} />
            </Route>
            <Route path="*" element={<Navigate to="/authenticate" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
