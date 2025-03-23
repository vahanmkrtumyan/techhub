import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SolutionsCard from "../../components/Solutions/SolutionsCard";

const Solutions = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Solutions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />

      <SolutionsCard />

      <Footer />
    </>
  );
};

export default Solutions;
