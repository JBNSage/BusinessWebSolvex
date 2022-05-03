import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./siteContentContainer.css";

export default function SiteHeader() {
  return (
    <>
      <header className="row container">
        <div className="nav_col col"></div>
        <div className="logo_col col">
          <img src={require("../../assets/abstergo.png")} alt="site_logo" />
        </div>
        <div className="account_col col">
          <menu>
            <li>
              <Link to="checkout">
                <span className="material-icons-outlined">shopping_cart</span>
              </Link>
            </li>
            <li>
              <Link to="profile">
                <span className="material-icons-outlined">person</span>
              </Link>
            </li>
          </menu>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="row bg-dark container-fluid justify-content-between m-0 position-absolute bottom-0">
        <div className="col-auto">
          <menu>
            <li className="footer_item text-uppercase">
              <Link to="#">Lorem</Link>
            </li>
            <li className="footer_item text-uppercase">
              <Link to="#">FAQ</Link>
            </li>
            <li className="footer_item text-uppercase">
              <Link to="#">Return policy</Link>
            </li>
            <li className="footer_item text-uppercase">
              <Link to="#">Shipping Policy</Link>
            </li>
          </menu>
        </div>
        <div className="col-auto">
          <menu>
            <li className="footer_item text-uppercase">
              <Link to="#">Contact with us</Link>
            </li>
          </menu>
        </div>
      </footer>
    </>
  );
}
