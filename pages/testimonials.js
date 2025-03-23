import React from "react";
import NavbarFive from "../components/Layouts/NavbarFive";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TestimonialsContent from "../components/Testimonials/TestimonialsContent";

const Testimonials = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
      />

      <TestimonialsContent />

      <Footer />
    </>
  );
};

export default Testimonials;
