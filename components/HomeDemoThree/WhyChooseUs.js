import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <>
      <div className="counter-area counter-area-three pt-100 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="counter-img">
                <Image
                  src="/images/counter-img.png"
                  alt="Image"
                  width={526}
                  height={482}
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="counter-max-wide">
                <div className="section-title">
                  <span>Why Choose Us</span>
                  <h2>We Have a Lot of Skills in Cyber Security</h2>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-authentication"></i>
                        <h2>365</h2>
                        <h3>Clients Protection</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-reliability"></i>
                        <h2>1000</h2>
                        <h3>Trusted Organizations</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-web-protection"></i>
                        <h2>567</h2>
                        <h3>Website Protection</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-innovation"></i>
                        <h2>
                          100<span className="target">%</span>
                        </h2>
                        <h3>Innovative Technology</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
