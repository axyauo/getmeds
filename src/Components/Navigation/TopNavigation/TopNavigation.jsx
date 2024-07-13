import React from "react";
import "./TopNavigation.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.webp";

export default function TopNavigation() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="contact_section">
                <ul>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i>
                    <a
                      href="https://maps.app.goo.gl/P2fyxQ3ihDVbEwZc9"
                      target="_blank"
                    >
                      202 Bluff St, Crystal River, FL 34428, Florida 34428, USA
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <a href="tel:+1 315 510 5500"> +1 (315) 510-5500</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:info@getmedy.com">info@getmedy.com</a>
                  </li>
                  <li>
                    <i className="bi bi-clock-fill"></i> 24x7 Open
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="account-section">
                <span className="account-title">MY ACCOUNT</span>
                <div className="small-scrn">
                  <Link to="/">
                    <img src={logo} alt="Logo" loading="lazy" />
                  </Link>
                </div>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="social-icon"
                  title="Facebook"
                >
                  <i className="bi bi-facebook facebook"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="social-icon"
                  title="twitter"
                >
                  <i className="bi bi-twitter twitter"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className="social-icon"
                  title="youtube"
                >
                  <i className="bi bi-youtube youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="social-icon"
                  title="instagram"
                >
                  <i className="bi bi-instagram instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
