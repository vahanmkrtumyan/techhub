import Image from 'next/image';

const AboutUsContent = () => {
  return (
    <>
      <div className="about-us-area" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30">
                <Image
                  src="/images/about-img.jpg"
                  alt="Image"
                  width={600}
                  height={545}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <span>Մեր մասին</span>
                </div>

                <p>
                  Թեքհաբ ընկերությունը մասնագիտացած է նորարարական տեխնոլոգիական
                  լուծումներ տրամադրելու ոլորտում՝ ապահովելով բիզնեսների թվային
                  զարգացումը։ Մեր թիմը բաղկացած է փորձառու մասնագետներից, ովքեր
                  առաջարկում են բարձրորակ ծրագրային ապահովում, վեբ և մոբայլ
                  հավելվածների մշակում, ինչպես նաև ՏՏ խորհրդատվություն։ Մենք
                  ձգտում ենք ստեղծել արդյունավետ և հուսալի լուծումներ, որոնք
                  կօգնեն մեր հաճախորդներին հասնել իրենց բիզնես նպատակներին։
                  <br />
                  Հետևելով նորագույն տեխնոլոգիական միտումներին՝ մենք մշակում ենք
                  անհատականացված և ճկուն լուծումներ, որոնք համապատասխանում են
                  ժամանակակից պահանջներին։
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
