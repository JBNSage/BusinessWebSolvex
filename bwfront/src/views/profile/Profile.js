import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile_options">
      <div className="row profile_options_container">
        {profileOptions.map((option, index) => (
          <Link
            to={option.link}
            key={index}
            className="col profile_options_item_container  p-3"
          >
            <div className="profile_options_item py-5  rounded">
              <div className="row flex-column  justify-content-center align-items-center">
                <div className="col-auto">
                  <span class="material-icons-outlined profile_icon">
                    {option.icon}
                  </span>
                </div>
                <div className="col-auto fw-bold fs-5">{option.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const profileOptions = [
  { icon: "add_location", name: "My addresses", link: "./my-addresses" },
  { icon: "list_alt", name: "My orders", link: "./my-orders" },
  { icon: "credit_card", name: "Payment methods", link: "./payment-methods" },
  {
    icon: "person",
    name: "Personal information",
    link: "./personal-information",
  },
];
