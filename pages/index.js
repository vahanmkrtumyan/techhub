import React from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import Features from '../components/HomeDemoOne/Features';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import OurChallenges from '../components/Common/OurChallenges';
import Services from '../components/HomeDemoOne/Services';
import SolutionArea from '../components/HomeDemoOne/SolutionArea';
import GetInTouchForm from '../components/Common/GetInTouchForm';
import Footer from '../components/Layouts/Footer';
import ServicesCard from '../components/Services/ServicesCard';
import ContactSection from '../components/Common/ContactSection';

const Index = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <div className="pb-100">
        <AboutUsContent />
      </div>

      <ServicesCard />

      <SolutionArea />
      <ContactSection />

      {/* <GetInTouchForm /> */}

      <Footer />
    </>
  );
};

export default Index;
