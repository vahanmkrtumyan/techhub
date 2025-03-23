import React from "react";
import NavbarFive from "../components/Layouts/NavbarFive";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import OurChallenges from "../components/Common/OurChallenges";
import Protects from "../components/AboutUs/Protects";
import Testimonials from "../components/Common/Testimonials";
import Partners from "../components/Common/Partners";
import Footer from "../components/Layouts/Footer";

const AboutUs = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <div className="pt-100 pb-70">
        <AboutUsContent />
      </div>

      <OurChallenges />

      <Protects />

      <Testimonials />

      <Partners />

      <Footer />
    </>
  );
};

export default AboutUs;
