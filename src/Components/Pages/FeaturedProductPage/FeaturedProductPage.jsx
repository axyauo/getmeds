import React, { useEffect } from "react";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import ProductBox from "../../Body/ProductBox/ProductBox";
import DataFeaturedProduct from "../../Body/FeaturedProduct/DataFeaturedProduct";
import { Link } from "react-router-dom";

export default function FeaturedProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <i className="bi bi-chevron-double-right"></i>
            <li>Featured Product</li>
          </ul>
        </div>
      </div>
      <section className="bg-color1 py-5">
        <div className="container">
          <Heading_h3 title="Featured Product" />
          <div className="row">
            {DataFeaturedProduct.map((product) => (
              <div className="col-lg-4 col-12">
                <ProductBox product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
