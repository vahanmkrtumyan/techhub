import React from "react";
import NavbarFive from "../components/Layouts/NavbarFive";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Log In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Log In"
      />

      <LoginForm />

      <Footer />
    </>
  );
};

export default Login;
