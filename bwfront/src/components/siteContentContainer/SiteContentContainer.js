import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./siteContentContainer.css";
import { useAppContext } from "../../contexts/AppContext";
import SectionHeader from "../sectionHeader/SectionHeader";

export default function SiteHeader() {
  const { cart } = useAppContext();

  return (
    <>
      <header className="container pt-4">
        <div className="row justify-content-end align-items-center">
          <div className="logo_col position-absolute start-50 w-auto text-uppercase ">
            <Link to="/">
              <h1 className="fw-bold m-0">EC</h1>
            </Link>
          </div>
          <div className="account_col col-auto z-index-1 ">
            <menu className="list-group list-group-horizontal mt-0">
              <li className="header_list_item">
                <Link to="checkout">
                  <span className="material-icons-outlined fs-3">
                    shopping_cart
                  </span>
                  {cart?.length > 0 && (
                    <span className="badge bg-secondary">{cart?.length}</span>
                  )}
                </Link>
              </li>
              <li className="header_list_item">
                <Link to="profile">
                  <span className="material-icons-outlined fs-3">person</span>
                </Link>
              </li>
            </menu>
          </div>
        </div>
      </header>
      <main className="container pt-5  mt-5">
        <Outlet />
      </main>
      <footer className="row bg-dark container-fluid justify-content-between m-0 position-absolute bottom-0 p-4">
        <div className="col-auto">
          <menu className="list-group m-0">
            <li className="footer_list_item text-uppercase">
              <Link to="#">Lorem</Link>
            </li>
            <li className="footer_list_item text-uppercase">
              <Link to="#">FAQ</Link>
            </li>
            <li className="footer_list_item text-uppercase">
              <Link to="#">Return policy</Link>
            </li>
            <li className="footer_list_item text-uppercase">
              <Link to="#">Shipping Policy</Link>
            </li>
          </menu>
        </div>
        <div className="col-auto">
          <menu className="list-group m-0">
            <li className="footer_list_item text-uppercase">
              <Link to="#">Contact with us</Link>
            </li>
          </menu>
        </div>
      </footer>
    </>
  );
}
