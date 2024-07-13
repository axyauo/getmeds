import React, { useEffect } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Heading_h3 from "../../Heading_h3/Heading_h3";

export default function About() {
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
            <li>About</li>
          </ul>
        </div>
      </div>
      <section className="inner_post about">
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-8 col-12">
              <h1 className="heading_h1 my-4">About Us</h1>
              <p>
                MedsApp.com stands out as a prominent and trusted pharmacy with
                extensive experience in providing top-quality medicines at
                affordable prices. At MedsApp.com, you can easily find a variety
                of medications, including those for pain relief, men's health,
                anxiety, and sleep aids. With just a few clicks, you can
                purchase your necessary medications from the comfort of your
                home.
              </p>
              <h2>What Sets Us Apart?</h2>
              <p>
                MedsApp.com offers quick and convenient online access to a broad
                range of medicines. We make it easy to find and purchase any
                medication you need, all at competitive prices. Our extensive
                selection of drugs and health products is sourced from reputable
                suppliers and medically tested, ensuring you receive products of
                the highest quality.
              </p>
              <h2>Convenience</h2>
              <p>
                Shopping at traditional retail stores often involves dealing
                with traffic, parking, and in-store hassles. MedsApp.com
                eliminates these inconveniences by providing an easy and
                comfortable way to purchase medications from your home. Simply
                browse our website to find the medications you need, select your
                desired products, and place your order online.
              </p>
              <p>
                Enter your address, and we'll deliver your medications right to
                your doorstep. Additionally, MedsApp.com offers easy access to
                reliable drug information, making it your go-to source for all
                your pharmaceutical needs.
              </p>
            </div>
            <div className="col-lg-4 col-12">
              <Heading_h3 title="Product Category" />
              <ul>
                <li>
                  <Link to="/buy-adderall-online">Buy Adderall Online</Link>
                </li>
                <li>
                  <Link to="/buy-ambien-online">Buy Ambien Online</Link>
                </li>
                <li>
                  <Link to="/buy-ativan-online">Buy Ativan Online</Link>
                </li>
                <li>
                  <Link to="/buy-butalbital-online">Buy Butalbital Online</Link>
                </li>
                <li>
                  <Link to="/buy-carisoprodol-online">
                    Buy Carisoprodol Online
                  </Link>
                </li>
                <li>
                  <Link to="/buy-clonazepam-online">Buy Clonazepam Online</Link>
                </li>
                <li>
                  <Link to="/buy-fioricet-online">Buy Fioricet Online</Link>
                </li>
                <li>
                  <Link to="/buy-gabapentin-online">Buy Gabapentin Online</Link>
                </li>
                <li>
                  <Link to="/buy-hydrocodone-online">
                    Buy Hydrocodone Online
                  </Link>
                </li>
                <li>
                  <Link to="/buy-klonopin-online">Buy Klonopin Online</Link>
                </li>
                <li>
                  <Link to="/buy-ksalol-online">Buy Ksalol Online</Link>
                </li>
                <li>
                  <Link to="/buy-oxycodone-online">Buy Oxycodone Online</Link>
                </li>
                <li>
                  <Link to="/buy-percocet-online">Buy Percocet Online</Link>
                </li>
                <li>
                  <Link to="/buy-soma-online">Buy Soma Online</Link>
                </li>
                <li>
                  <Link to="/buy-tapentadol-online">Buy Tapentadol Online</Link>
                </li>
                <li>
                  <Link to="/buy-tramadol-online">Buy Tramadol Online</Link>
                </li>
                <li>
                  <Link to="/buy-valium-online">Buy Valium Online</Link>
                </li>
                <li>
                  <Link to="/buy-xanax-online">Buy Xanax Online</Link>
                </li>
                <li>
                  <Link to="/buy-zolpidem-online">Buy Zolpidem Online</Link>
                </li>
                <li>
                  <Link to="/pain-o-soma">Pain O Soma</Link>
                </li>
                <li>
                  <Link to="/xanax-bars">Xanax Bars</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
