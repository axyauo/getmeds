import React from "react";
import { Link } from "react-router-dom";

export default function Shopproduct({ product }) {
  return (
    <>
      <div className="sliders">
        <div className="top_slide_img">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className="top_slide_content text-center">
          <p>{product.title}</p>
          <h6>{product.name}</h6>
          <span>
            <i className="bi bi-currency-rupee"></i> {product.price}
          </span>
          <p>
            <i className="bi bi-bar-chart-line-fill"></i> {product.sold_item}{" "}
            Item Sold
          </p>
          <div className="content_box flex-column">
            <Link to={product.link}>
              <button>Buy Now</button>
            </Link>
            <div className="mt-2">
              <i className="bi bi-heart"></i>
              <i className="bi bi-search"></i>
              <i className="bi bi-arrow-clockwise"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
