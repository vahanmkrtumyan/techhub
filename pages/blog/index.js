import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BlogColumnOne from "../../components/Blog/BlogColumnOne";

const Blog = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Blog Column One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Column One"
      />

      <BlogColumnOne />

      <Footer />
    </>
  );
};

export default Blog;
