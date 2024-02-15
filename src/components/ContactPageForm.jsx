import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Inquiry from "./Inquiry.jsx";
import "./ContactPageForm.css";

const ContactPageForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`inquiry-section ${inView ? "fadeIn" : ""} mt-12`}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="basis-full flex flex-col gap-4">
          <h2 className="text-5xl text-mainblue">Reach out to us!</h2>
          <div className="text-xl">
            <p>+1 408-646-1221</p>
            <p>enysitewebdesigns@gmail.com</p>
          </div>
        </div>

        <div className="basis-full">
          <Inquiry />
        </div>
      </div>
    </section>
  );
};

export default ContactPageForm;
