import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook from react-router-dom
import "./LatestPost.css";
import DataLatestPost from "./DataLatestPost";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import PostContent from "./PostContent";

export default function LatestPost() {
  const location = useLocation();
  let itemsToShow = DataLatestPost;
  if (location.pathname === "/") {
    itemsToShow = DataLatestPost.slice(0, 4);
  }

  return (
    <>
      <section className="bg-color1 pt-3 pb-5 mt-5">
        <div className="container">
          <Heading_h3 title="Latest Blog" />
          <div className="row">
            {itemsToShow.map((value) => (
              <div className="col-lg-3 col-md-6 col-12" key={value.id}>
                <PostContent value={value} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
