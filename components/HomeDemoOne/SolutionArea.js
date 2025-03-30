import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SolutionArea = () => {
  return (
    <>
      <div className="solution-area pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  <span>Ինչ ենք մենք առաջարկում</span>
                  <h2>Մեր առավելությունները</h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            24/7 խորհրդատվություն և սպասարկում
                          </Link>
                        </h3>
                        <p>
                          Մեր մասնագետները միշտ պատրաստ են աջակցել ձեզ ցանկացած
                          պահին՝ առանց սահմանափակումների։
                        </p>
                        <span>01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            Արագ և հուսալի ծառայություններ
                          </Link>
                        </h3>
                        <p>
                          Մենք երաշխավորում ենք բարձրորակ սպասարկում և օպտիմալ
                          լուծումներ ձեր բիզնեսի համար։
                        </p>
                        <span>02</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one">
                      <div className="overly-two">
                        <h3>
                          <Link href="/solutions/details">
                            Մրցակցային գներ և ճկուն պայմաններ
                          </Link>
                        </h3>
                        <p>
                          Մենք առաջարկում ենք մատչելի և հարմարեցված լուծումներ,
                          որոնք համապատասխանում են ձեր պահանջներին։
                        </p>
                        <span>03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="solution-img">
                <Image
                  src="/images/solution-img.png"
                  alt="Image"
                  width={875}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionArea;
