import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import "./ProductGrid.css";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import DataProductGrid from "./DataProductGrid";
import Shopproduct from "./Shopproduct";

export default function ProductGrid() {
  const location = useLocation();
  const productsToDisplay =
    location.pathname === "/" ? DataProductGrid.slice(0, 4) : DataProductGrid;

  return (
    <>
      <section className="py-3">
        <div className="container">
          <Heading_h3 title="Product Grid" />
          <div className="row">
            {productsToDisplay.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-12">
                <Shopproduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
