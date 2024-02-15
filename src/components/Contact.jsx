import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Inquiry from "./Inquiry.jsx";
import "./Contact.css";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`contact-section ${
        inView ? "fadeIn" : ""
      } mt-36 lg:mt-48 h-screen contact`}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="basis-full flex flex-col gap-4">
          <h2 className="text-5xl text-mainblue">Let's get started.</h2>
          <div className="text-xl">
            <a href="tel:+14086461221">+1 408-646-1221</a>
            <p>
              <span>enysitewebdesigns@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="basis-full">
          <Inquiry children="Start your website" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
