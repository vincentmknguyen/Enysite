import React, { useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import Information from "../components/Information.jsx";
import Pricing from "../components/Pricing.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import "../App.css";

function Home() {
  useEffect(() => {
    document.title =
      "Web Design and Development for Small Businesses Sacramento | Enysite";
  }, []);

  return (
    <>
      <div className="px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-8">
        <NavBar />
        <Hero />
        <WhoWeAre />
      </div>
      <Information />
      <div className="px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-8">
        <Pricing />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
