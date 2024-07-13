import React from "react";
import "./TopCategory.css";
import DataTopCategory from "./DataTopCategory";
import { Link } from "react-router-dom";

export default function TopCategory() {
  return (
    <>
      <ul className="top_category">
        <li className="top_category_heading">
          <h2>
            <i className="bi bi-list-task"></i> Top Category
          </h2>
        </li>
        {DataTopCategory.map((medicine) => (
          <li key={medicine.id}>
            <Link to={medicine.link}>{medicine.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
