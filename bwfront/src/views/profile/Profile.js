import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Link to="./my-orders">Mis órdenes</Link>
      <Link to="./my-addresses">Mis direcciones</Link>
      <Link to="./payment-methods">Métodos de pago</Link>
      <Link to="./personal-information">Información personal</Link>
    </div>
  );
}
