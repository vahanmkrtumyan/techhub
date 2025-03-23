import React from "react";
import NavbarFive from "../components/Layouts/NavbarFive";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import RegisterForm from "../components/Auth/RegisterForm";

const Register = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Register"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Register"
      />

      <RegisterForm />

      <Footer />
    </>
  );
};

export default Register;
