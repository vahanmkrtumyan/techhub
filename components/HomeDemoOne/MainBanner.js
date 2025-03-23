import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="banner-area bg-1 border-bottom-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-content">
                <span className="top-title">World Class Cyber Security</span>
                <h1>Powerful Protection Easy Recovery</h1>
                <p>
                  Cyber security is the protection from the theft to protect of
                  our computer systems and networks or being damaged of our
                  hardware and software.
                </p>

                <div className="banner-btn">
                  <Link href="/contact" className="default-btn">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="banner-image">
                <Image
                  src="/images/banner/banner-img-1.jpg"
                  alt="image"
                  width={900}
                  height={745}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
