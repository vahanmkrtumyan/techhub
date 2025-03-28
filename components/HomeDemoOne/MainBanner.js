import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MainBanner = () => {
  return (
    <>
      <div className="banner-area bg-1 border-bottom-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-content">
                <h1>Բարի գալուստ ԹԵՔՀԱԲ ԷՅԷՄ</h1>
                <p>
                  Նորարարական տեխնոլոգիաների կենտրոն, որն առաջարկում է
                  նորարարական լուծումներ՝ օգնելով բիզնեսներին և
                  կազմակերպություններին զարգացնել իրենց թվային հարթակները:
                </p>

                <div className="banner-btn">
                  <Link href="/contact" className="default-btn">
                    <span>Կապ</span>
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
