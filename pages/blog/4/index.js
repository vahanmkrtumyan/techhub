import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogWithLeftSidebar from "../../../components/Blog/BlogWithLeftSidebar";

const Blog = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Blog Left Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Left Sidebar"
      />

      <BlogWithLeftSidebar />

      <Footer />
    </>
  );
};

export default Blog;
