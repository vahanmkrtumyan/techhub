import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import TechhubLogo from '../Services/logo';

const NavbarTwo = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState('');
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
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
  });

  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <header className="header-area p-relative">
        <div id="navbar" className="navbar-area navbar-area-two">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md">
                <Link href="/" className="navbar-brand">
                  <TechhubLogo />
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
                        href="/"
                        className={`nav-link ${currentPath == '/' && 'active'}`}
                      >
                        Գլխավոր
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/about-us/"
                        className={`nav-link ${
                          currentPath == '/about-us/' && 'active'
                        }`}
                      >
                        Մեր մասին
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == '/services/' && 'active'
                        }`}
                      >
                        Ծառայություններ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact/"
                        className={`nav-link ${
                          currentPath == '/contact/' && 'active'
                        }`}
                      >
                        Կապ
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarTwo;
