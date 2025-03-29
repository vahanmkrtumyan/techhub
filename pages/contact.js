import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import ContactForm from './../components/Contact/ContactForm';
import GoogleMap from '../components/Contact/GoogleMap';
import NavbarTwo from '../components/Layouts/NavbarTwo';

const Contact = () => {
  return (
    <>
      <NavbarTwo />

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
