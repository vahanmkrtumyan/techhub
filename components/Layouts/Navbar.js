import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area">
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md">
                <Link href="/" className="navbar-brand">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={150}
                    height={42}
                  />
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Home <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/"
                            className={`nav-link ${
                              currentPath == "/" && "active"
                            }`}
                          >
                            Home Demo - 1
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/index-2/"
                            className={`nav-link ${
                              currentPath == "/index-2/" && "active"
                            }`}
                          >
                            Home Demo - 2
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/index-3/"
                            className={`nav-link ${
                              currentPath == "/index-3/" && "active"
                            }`}
                          >
                            Home Demo - 3
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/index-4/"
                            className={`nav-link ${
                              currentPath == "/index-4/" && "active"
                            }`}
                          >
                            Home Demo - 4
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/index-5/"
                            className={`nav-link ${
                              currentPath == "/index-5/" && "active"
                            }`}
                          >
                            Home Demo - 5
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Pages <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/about-us/"
                            className={`nav-link ${
                              currentPath == "/about-us/" && "active"
                            }`}
                          >
                            About Us
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/team/"
                            className={`nav-link ${
                              currentPath == "/team/" && "active"
                            }`}
                          >
                            Team
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/testimonials/"
                            className={`nav-link ${
                              currentPath == "/testimonials/" && "active"
                            }`}
                          >
                            Testimonials
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/pricing/"
                            className={`nav-link ${
                              currentPath == "/pricing/" && "active"
                            }`}
                          >
                            Pricing
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            User <i className="bx bx-chevron-down"></i>
                          </Link>

                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link
                                href="/my-account/"
                                className={`nav-link ${
                                  currentPath == "/my-account/" && "active"
                                }`}
                              >
                                My Account
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/login/"
                                className={`nav-link ${
                                  currentPath == "/login/" && "active"
                                }`}
                              >
                                Log In
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/register/"
                                className={`nav-link ${
                                  currentPath == "/register/" && "active"
                                }`}
                              >
                                Register
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/recover-password/"
                                className={`nav-link ${
                                  currentPath == "/recover-password/" &&
                                  "active"
                                }`}
                              >
                                Recover Password
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/faq/"
                            className={`nav-link ${
                              currentPath == "/faq/" && "active"
                            }`}
                          >
                            FAQ
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/privacy-policy/"
                            className={`nav-link ${
                              currentPath == "/privacy-policy/" && "active"
                            }`}
                          >
                            Privacy Policy
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/terms-conditions/"
                            className={`nav-link ${
                              currentPath == "/terms-conditions/" && "active"
                            }`}
                          >
                            Terms & Conditions
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/coming-soon/"
                            className={`nav-link ${
                              currentPath == "/coming-soon/" && "active"
                            }`}
                          >
                            Coming Soon
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/404/"
                            className={`nav-link ${
                              currentPath == "/404/" && "active"
                            }`}
                          >
                            404 Error Page
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Services <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/services/"
                            className={`nav-link ${
                              currentPath == "/services/" && "active"
                            }`}
                          >
                            Services Style One
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/2/"
                            className={`nav-link ${
                              currentPath == "/services/2/" && "active"
                            }`}
                          >
                            Services Style Two
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/3/"
                            className={`nav-link ${
                              currentPath == "/services/3/" &&
                              "active"
                            }`}
                          >
                            Services Style Three
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/details/"
                            className={`nav-link ${
                              currentPath == "/services/details/" && "active"
                            }`}
                          >
                            Service Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Solutions <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/solutions/"
                            className={`nav-link ${
                              currentPath == "/solutions/" && "active"
                            }`}
                          >
                            Solutions
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/solutions/details/"
                            className={`nav-link ${
                              currentPath == "/solutions/details/" && "active"
                            }`}
                          >
                            Solution Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Blog <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/blog/"
                            className={`nav-link ${
                              currentPath == "/blog/" && "active"
                            }`}
                          >
                            Blog Column One
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/blog/2/"
                            className={`nav-link ${
                              currentPath == "/blog/2/" && "active"
                            }`}
                          >
                            Blog Column Two
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/blog/3/"
                            className={`nav-link ${
                              currentPath == "/blog/3/" && "active"
                            }`}
                          >
                            Blog Column Three
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/blog/4/"
                            className={`nav-link ${
                              currentPath == "/blog/4/" && "active"
                            }`}
                          >
                            Blog Left Sidebar
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/blog/details/"
                            className={`nav-link ${
                              currentPath == "/blog/details/" && "active"
                            }`}
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact/"
                        className={`nav-link ${
                          currentPath == "/contact/" && "active"
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="others-option">
                  <div className="get-quote">
                    <Link href="/contact" className="default-btn">
                      <span>Get a Quote</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
