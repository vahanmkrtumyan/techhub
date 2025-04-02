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
                    Մարգարյան 2/4
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:info@techhub.am">info@techhub.am</a>
                    <a href="#" target="_blank">
                      skype: example
                    </a>
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <a href="tel:+37444888373">+374 44 888373</a>
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
