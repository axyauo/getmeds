import React from "react";
import "./TestimonialPerson.css";
import DataTestimonialPerson from "./DataTestimonialPerson";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialPerson() {
  let testimonial = DataTestimonialPerson.map((testimo) => (
    <div className="col-lg-4 col-md-6 col-12" key={testimo.id}>
      <div className="testimonial position-relative">
        <div className="testi_img">
          <img src={testimo.image} alt={testimo.name} loading="lazy" />
        </div>
        <div className="logo_imgg">
          <i className="bi bi-quote"></i>
        </div>
        <h4>{testimo.name}</h4>
        <span>{testimo.designation}</span>
        <p>{testimo.comments}</p>
      </div>
    </div>
  ));
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autospeed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-color1">
        <div className="container py-4">
          <Heading_h3 title="What Our Client's Say" />
          <div className="row">
            <Slider {...settings}>{testimonial}</Slider>
          </div>
        </div>
      </section>
    </>
  );
}
