import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogColumnTwo from "../../../components/Blog/BlogColumnTwo";

const Blog = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Blog Column Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Column Two"
      />

      <BlogColumnTwo />

      <Footer />
    </>
  );
};

export default Blog;
