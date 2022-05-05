import React from "react";
import { Link } from "react-router-dom";
import "./sectionHeader.css";

export default function SectionHeader({ title, rightComponent }) {
  if (!title) {
    return null;
  }

  return (
    <div className="section_header_container pb-4">
      <div className="row justify-content-between">
        <div className="section_title col-auto">
          <h2 className="section_header fw-bold text-capitalize">{title}</h2>
        </div>
        <div className="section_right_header col-auto">
          <h2 className="section_header fw-bold text-capitalize">
            {rightComponent}
          </h2>
        </div>
      </div>
    </div>
  );
}
