import React from "react";
import Banner from "./Banner/Banner";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import ProductGrid from "./ProductGrid/ProductGrid";
import TestimonialPerson from "./TestimonialPerson/TestimonialPerson";
import FindUs from "./FindUs/FindUs";
import Faqs from "./Faqs/Faqs";
import LatestPost from "./LatestPost/LatestPost";
import HomePageContent from "./HomePageContent/HomePageContent";

export default function Body() {
  return (
    <>
      <Banner />
      <FeaturedProduct />
      <HomePageContent />
      <ProductGrid />
      <TestimonialPerson />
      <FindUs />
      <Faqs />
      <LatestPost />
    </>
  );
}
