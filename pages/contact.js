import React from "react";
import NavbarFive from "../components/Layouts/NavbarFive";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ContactForm from "./../components/Contact/ContactForm";
import GoogleMap from "../components/Contact/GoogleMap";

const Contact = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
      />

      <ContactForm />

      <GoogleMap />

      <Footer />
    </>
  );
};

export default Contact;
