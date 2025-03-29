import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import OurChallenges from '../components/Common/OurChallenges';
import Protects from '../components/AboutUs/Protects';
import Testimonials from '../components/Common/Testimonials';
import Partners from '../components/Common/Partners';
import Footer from '../components/Layouts/Footer';
import NavbarTwo from '../components/Layouts/NavbarTwo';

const AboutUs = () => {
  return (
    <>
      <NavbarTwo />

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
