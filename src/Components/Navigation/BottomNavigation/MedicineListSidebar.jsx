import React from "react";
import "./BottomNavigation.css";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import { Link } from "react-router-dom";

const MedicineListSidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`medicine-list-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <Heading_h3 title="Product Categories" />
        <button className="close-btn" onClick={onClose}>
          <i className="bi bi-x"></i>
        </button>
      </div>
      <ul className="medicine-list">
        <li>
          <Link to="/buy-adderall-online">Buy Adderall Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Ambien Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Ativan Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Butalbital Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Carisoprodol Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Clonazepam Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Fioricet Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Gabapentin Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Hydrocodone Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Klonopin Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Ksalol Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Oxycodone Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Percocet Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Soma Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Tapentadol Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Tramadol Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Valium Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Xanax Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Buy Zolpidem Online</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Pain O Soma</Link>
        </li>
        <li>
          <Link to="/buy-adderall-online">Xanax Bars</Link>
        </li>
      </ul>
    </div>
  );
};

export default MedicineListSidebar;
