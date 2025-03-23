import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import ServicesCard from "../../components/Services/ServicesCard";
import Footer from "../../components/Layouts/Footer";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Services Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style One"
      />

      <div className="feature-area feature-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>Pen Testing</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>

                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3>Cyber Threat Hunting</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>

                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Security Center</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>

                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesCard />

      <Footer />
    </>
  );
};

export default Services;
