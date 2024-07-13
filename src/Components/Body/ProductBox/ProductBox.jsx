import React from "react";
import "./ProductBox.css";
import { Link } from "react-router-dom";

export default function ProductBox({ product }) {
  return (
    <>
      <div className="col-lg-4_ col-12_" key={product.id}>
        <div className="sliders">
          <div className="row">
            <div className="col-5">
              <div className="top_slide_img">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
            </div>
            <div className="col-7">
              <div className="top_slide_content">
                <p>{product.title}</p>
                <h6>{product.name}</h6>
                <span>
                  <i className="bi bi-currency-dollar"></i> {product.price}
                </span>
                <p>
                  <i className="bi bi-bar-chart-line-fill"></i>
                  {product.sold_item} Item Sold
                </p>
                <div className="content_box">
                  <Link to={product.link}>
                    <button>Buy Now</button>
                  </Link>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-search"></i>
                  <i className="bi bi-arrow-clockwise"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
