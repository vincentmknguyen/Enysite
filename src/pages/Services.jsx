import React, { useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import PageHeading from "../components/PageHeading.jsx";
import ServicesContent from "../components/ServicesContent.jsx";
import Footer from "../components/Footer.jsx";
import "../App.css";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <>
      <div className="px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-8">
        <NavBar />
        <PageHeading children="Services" />
        <ServicesContent />
      </div>
      <Footer />
    </>
  );
}

export default Services;
