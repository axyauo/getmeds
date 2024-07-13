import React from "react";
import logo from "../../images/logo.webp";
import "./MiddleNavigation.css";
import { Link } from "react-router-dom";

export default function MiddleNavigation() {
  return (
    <>
      <section className="bg-black middle-nav">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-12">
              <div className="logo_img">
                <Link to="/">
                  <img src={logo} alt="Logo" loading="lazy" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 align-content-center">
              <div className="searchBox desktop_view">
                <form className="form-inline-custom ">
                  <input
                    className=""
                    type="search"
                    placeholder="Search Products..."
                    aria-label="Search"
                  />
                  <select className="select_box">
                    <option value="">-- Select Category --</option>
                    <option value="1">Xanax Bars</option>
                    <option value="2">Buy Adderall Online</option>
                    <option value="3">Buy Ambien Online</option>
                    <option value="4">Buy Ativan Online</option>
                    <option value="5">Buy Butalbital Online</option>
                    <option value="6">Buy Carisoprodol Online</option>
                    <option value="7">Buy Clonazepam Online</option>
                    <option value="8">Buy Fioricet Online</option>
                    <option value="9">Buy Gabapentin Online</option>
                    <option value="10">Buy Hydrocodone Online</option>
                    <option value="11">Buy Klonopin Online</option>
                    <option value="12">Buy Ksalo Online</option>
                    <option value="13">Buy Oxycodone Online</option>
                    <option value="14">Buy Percocet Online</option>
                    <option value="15">Buy Soma Online</option>
                    <option value="16">Buy Tapentadol Online</option>
                    <option value="17">Buy Tramadol Online</option>
                    <option value="18">Buy Valium Online</option>
                    <option value="19">Buy Xanax Online</option>
                  </select>
                  <button className="search_btn" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 align-content-center desktop_view">
              <div className="cartValue d-flex ">
                <button>
                  <i className="bi bi-cart-fill"></i>
                </button>
                <span className="af-cart-amount gbl-bdge-bck-c">$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
