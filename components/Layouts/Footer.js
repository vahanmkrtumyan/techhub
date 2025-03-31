import Link from 'next/link';
import TechhubLogoWhite from '../Services/LogoWhite';

const Footer = () => {
  return (
    <>
      <footer className="footer-area pt-100 pb-70 jarallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <TechhubLogoWhite />
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <h3>Հասցե</h3>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    6890 Blvd, The Bronx, NY 1058 New York, USA
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:hello@nezox.com">hello@nezox.com</a>
                    <a href="#" target="_blank">
                      skype: example
                    </a>
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
                    <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <h3>Հղումներ</h3>

                <ul className="import-link">
                  <li>
                    <Link href="#about">ՄԵր մասին</Link>
                  </li>
                  <li>
                    <Link href="#services">Ծառայություններ</Link>
                  </li>
                  <li>
                    <Link href="#contact">Կապ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
