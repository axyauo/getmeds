import React from "react";
import "./HomePageContent.css";
import Heading_h3 from "../../Heading_h3/Heading_h3";
// import img1 from "../FeaturedImages/img-1.webp";
import img1 from "../FeaturedImages/getmedi.png";
import getmedy from "../FeaturedImages/getmedi2.png";

export default function () {
  return (
    <>
      <section id="medical-info" className="content-section py-5">
        <div className="container">
          <hr />
          <Heading_h3 title="Why is Get Meds so Popular Now?" />
          <div className="row">
            <div className="col-lg-7 col-md-12 my-2">
              <div className="content-wrapper">
                <h4>Why Choose Get Meds?</h4>
                <p>
                  We at Get Meds are on a mission to revolutionise the USA
                  Pharmaceutical Industry by providing World Health Organization
                  Quality Medicines at Affordable Prices. The main focus of Get
                  Meds is to provide you with lower price medicine to its
                  consumers while maintaining its quality standards.
                </p>
                <p>
                  Through our extensive network of pharmacies, we are able to
                  get vital medicine delivered at your place across the country.
                  Our team of highly experienced pharmacists and healthcare
                  professionals help you buy generic medicines online at
                  affordable prices.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="side_img">
                <img src={getmedy} alt="side-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="medical-info" className="content-section bg-color1 py-5">
        <div className="container">
          <Heading_h3 title="Reliable, Fast and Secure" />
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="side_img">
                <img src={img1} alt="side-img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="content-wrapper">
                <h4>We are Quick! Save Time: </h4>
                <p>
                  Skip the crowded local store and online store which are very
                  slow in processing your order. Only 4 steps successfully
                  complete your order. Shop Online from us so that you can sit
                  back and relax and wait for the drug to reach you.
                </p>
                <h4>We are Cheap! Save Money: </h4>
                <p>
                  We don’t have any additional expenses in terms of outlet rent,
                  counter employees. Moreover, we import in bulk so our customer
                  can save up to 50% when compared with offline and other online
                  stores.
                </p>
                <h4>We are Reliable! Get Original Pills:</h4>
                <p>
                  When you purchase Tramadol from Getmedy.com, you can be sure
                  of one thing – you are getting the BEST service any online
                  dispensary could offer.
                </p>
              </div>
            </div>
            <div className="col-12 content-wrapper my-2">
              <h4>We are worldwide! Get Express US Delivery:</h4>
              <p>
                We operate to all the states in the United States using US-US
                shipping. We also deliver Tramadol to our customers worldwide.
                You can choose to opt express shipping from us to get the drug
                within 4 days.
              </p>
              <h4>We are safe! Secured Transaction:</h4>
              <p>
                It is completely safe to use our online website to order and
                make an online transaction with our 128-bit encryption. So you
                can shop Tramadol online from us with confidence.
              </p>
              <p>
                Getmedy.com prioritizes your time and privacy above anything.
                This reflects in our swift response in delivery and confidential
                packaging. Even though every process happens at light speed, we
                never compromise on the product quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
