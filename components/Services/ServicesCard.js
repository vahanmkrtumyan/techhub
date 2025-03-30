import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesCard = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Ծառայություններ</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-01.jpg"
                      alt="Image"
                      width={400}
                      height={650}
                      style={{ objectFit: 'cover', height: '650px' }}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3 className="rrr">Վեբ և բջջային հավելվածների մշակում</h3>
                  <p>
                    Մենք ստեղծում ենք հարմարավետ, բարձրակարգ վեբ և բջջային
                    հավելվածներ՝ ապահովելով բարձր կատարողականություն և
                    օգտագործելիություն:
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/custom3.webp"
                      alt="Image"
                      width={400}
                      height={650}
                      style={{ objectFit: 'cover', height: '650px' }}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3 className="rrr">Արհեստական բանականության լուծումներ</h3>
                  <p>
                    AI տեխնոլոգիաների միջոցով մենք ստեղծում ենք խելացի
                    ավտոմատացման լուծումներ, որոնք կօգնեն բիզնեսներին ավելի
                    արդյունավետ աշխատել:
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-3.jpg"
                      alt="Image"
                      width={400}
                      height={650}
                      style={{ objectFit: 'cover', height: '650px' }}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3 className="rrr">Տվյալագիտություն և վերլուծություն</h3>
                  <p className="pb-30">
                    Մենք մշակվում ենք տվյալների վերլուծության և բիզնես
                    հետախուզության լուծումներ, որոնք կօգնեն ճիշտ որոշումներ
                    կայացնել:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
