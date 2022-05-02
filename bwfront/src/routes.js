import React, { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import {} from "./Views";
import { AuthenticationLayout, Nav } from "./Components";
import * as Views from "./views";
// import {useAuthentication} from "./Hooks";

export default function AppRoutes() {
  //   const { token, saveUser, logOut } = useAuthentication();
  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="*" element={<Navigate to="/employees" />} />
      </Routes>
    </BrowserRouter>
  );
}
