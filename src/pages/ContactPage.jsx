import React, { useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import PageHeading from "../components/PageHeading.jsx";
import ContactPageForm from "../components/ContactPageForm.jsx";
import Footer from "../components/Footer.jsx";
import "../App.css";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Full Website Services, Sacramento | Enysite";
  }, []);

  return (
    <>
      <div className="px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-8">
        <NavBar />
        <PageHeading children="Contact" />
        <main>
          <ContactPageForm />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
