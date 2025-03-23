import React from "react";
import RelatedServices from "./RelatedServices";
import ServiceSidebar from "./ServiceSidebar";
import Image from "next/image";

const ServicesDetailsContent = () => {
  return (
    <>
      <div className="services-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="services-details-content">
                <div className="services-content">
                  <h2>Is Your Information Cyber Secure?</h2>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat dolor in hendrerit in vulputate feugiat.
                  </p>

                  <div className="services-details-one">
                    <Image
                      src="/images/services-details/services-details-1.jpg"
                      alt="Image"
                      width={810}
                      height={450}
                    />
                  </div>
                </div>

                <div className="services-content">
                  <h3>What is Cyber Security?</h3>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. eum iriure dolor in hendrerit in vulputate
                  </p>
                </div>

                <div className="services-content">
                  <h3>Why is it Important?</h3>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. nulla facilisi. Lorem ipsum dolor sit
                  </p>
                  <p>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. feugait nulla
                    facilisi. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit,
                  </p>
                </div>

                <RelatedServices />
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
