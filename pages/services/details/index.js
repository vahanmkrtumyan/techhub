import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesDetailsContent from "../../../components/Services/ServicesDetailsContent";
import Footer from "../../../components/Layouts/Footer";

const Details = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Services Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Details"
      />

      <ServicesDetailsContent />

      <Footer />
    </>
  );
};

export default Details;
