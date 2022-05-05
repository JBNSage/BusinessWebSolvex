import React from "react";
import "./appContainer.css";

export default function AppContainer({ children }) {
  return <main className="container pt-5  mt-5">{children}</main>;
}
