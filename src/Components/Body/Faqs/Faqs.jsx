import React from "react";
import "./Faqs.css";
import Heading_h3 from "../../Heading_h3/Heading_h3";

export default function Faqs() {
  return (
    <>
      <section>
        <div className="container my-5">
          <Heading_h3 title="Frequently Asked Questions" />
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How long time we take to reach you?
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our shipping includes seven business days to reach your
                  doorsteps. Make sure your provided address is correct so that
                  we can find you easily.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is our delivery area concern?
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We provide our medicines delivery to all the USA zoned
                  peoples. We can comfortably deliver our order to any address
                  under the USA.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is our cost concern?
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Along with providing a genuine medicine, we maintain an equal
                  legacy with the charges. Importantly we neither add any extra
                  charges nor add any hidden fee. We only add shipping charges
                  based on product weight.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What is our safety concern for medication?
                </button>
              </h3>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Delivering you your medicine in a safe state is our first and
                  prior area. Hence the medication you order/purchase at
                  usamedschoice.com is manufactured in a certified laboratory
                  under the unique eyes/guidance. And all are recognized brands
                  with world-class specified.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
