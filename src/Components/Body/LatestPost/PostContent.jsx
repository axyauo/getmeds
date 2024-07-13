import React from "react";
import { Link } from "react-router-dom";

export default function PostContent({ value }) {
  return (
    <>
      <Link to={value.link}>
        <div className="posts">
          <div className="upper_div">
            <img src={value.image} alt={value.name} loading="lazy" />
            <div className="date_time">{value.time}</div>
            <div className="overlay_post">
              <i className="bi bi-arrow-right-circle"></i>
            </div>
          </div>
          <div className="lower_div">
            <p>{value.title}</p>
            <h6>{value.name}</h6>
            <span>By {value.posted_by}</span>
          </div>
        </div>
      </Link>
    </>
  );
}
