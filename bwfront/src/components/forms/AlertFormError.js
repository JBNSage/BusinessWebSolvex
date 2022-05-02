import React from "react";
import "./inputs.css";

export default function AlertFormError({ message }) {
  return <div className="input_error_message">{message}</div>;
}
