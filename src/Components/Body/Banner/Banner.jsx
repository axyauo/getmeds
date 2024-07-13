import React from "react";
import "./Banner.css";
import TopCategory from "./TopCategory/TopCategory";
import xanax from "../../images/xanax.jpg";
import Button01 from "../../Button/Button01";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <section className="mt-5 mb-3 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <TopCategory />
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="row">
                <div className="col-lg-8 col-12 mb-2">
                  <div className="banner_img">
                    <img src={xanax} alt="banner-img1" loading="lazy" />
                    <div className="overlay">
                      <a href="#">
                        <h1 className="text-white fw-bold">
                          Does Xanax Change Your Personality?
                        </h1>
                      </a>
                      <Link to="/buy-now">
                        <Button01 name="Shop Now" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="banner_img1">
                    <img src={xanax} alt="banner-img2" loading="lazy" />
                    <div className="overlay1">
                      <a href="#">
                        <h3 className="text-white fw-bold">
                          Does Xanax Change Your Personality?
                        </h3>
                      </a>
                      <Link to="/buy-now">
                        <Button01 name="Shop Now" />
                      </Link>
                    </div>
                  </div>
                  <div className="banner_img1">
                    <img src={xanax} alt="banner-img3" loading="lazy" />
                    <div className="overlay1">
                      <a href="#">
                        <h3 className="text-white fw-bold">
                          Does Xanax Change Your Personality?
                        </h3>
                      </a>
                      <Link to="/buy-now">
                        <Button01 name="Shop Now" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
