import React, { useEffect } from "react";
import "./Blog.css";
// import Navigationbar from "../../Navigation/Navigationbar";
// import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import "../../Body/LatestPost/DataLatestPost";
import DataLatestPost from "../../Body/LatestPost/DataLatestPost";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import PostContent from "../../Body/LatestPost/PostContent";

export default function Post1() {
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
            <li>Blog</li>
          </ul>
        </div>
        <section className=" bg-color1 pt-3 pb-5 mt-5">
          <div className="container">
            <Heading_h3 title="Our Blogs" />
            <div className="row">
              {DataLatestPost.map((value) => (
                <div className="col-lg-4 col-md-6 col-12 my-3" key={value.id}>
                  <PostContent value={value} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
