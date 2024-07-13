import React, { useEffect } from "react";
import "./Faqs.css";
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
            <li>Faqs</li>
          </ul>
        </div>
      </div>
      <section className="inner_post about">
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-8 col-12">
              <h1 className="heading_h1 my-4">Frequently Asked Questions</h1>
              <h2>
                Here you can get an answer to all your frequently asked
                questions. Such as:
              </h2>
              <p>
                Usamedschoice.com is who is in operation to provide a top-notch
                online shopping experience. Our concerning area is pharmacy as
                we deal with a different variety of medicines such as
                pain-relief, sexual health, and hygiene, anti-anxiety and
                sleeping ads, etc.
              </p>
              <h4>Availability concern</h4>
              <p>Usamedschoice.com is available to you 24/7.</p>
              <h4>How can you do communication?</h4>
              <p>
                You all can get in touch with the pharmacists of
                usamedschoice.com over the online website. We are available on
                different social media channels like Facebook, Twitter,
                Pinterest, and Google+. You can also make a call to our office
                number +1-256-666-6559.
              </p>
              <h4>What is our safety transaction concern?</h4>
              <p>
                Well, this is a compassionate issue. A possibility is always
                exceptional, so we use it to maintain a very safe mode of
                payment. Users can use their debit/credit card to place orders.
              </p>
              <h4>What is our safety concern for medication?</h4>
              <p>
                Delivering you your medicine in a safe state is our first and
                prior area. Hence the medication you order/purchase at
                usamedschoice.com is manufactured in a certified laboratory
                under the unique eyes/guidance. And all are recognized brands
                with world-class specified.
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
