import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Inquiry from "./Inquiry.jsx";
import "./FadeIn.css";

const Statement = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`fade-section ${inView ? "fadeIn" : ""} mt-12 md:w-8/12`}
    >
      <span className="text-4xl font-bold">
        Our websites are built with elegance. Not only in{" "}
        <span className="text-mainblue">design</span> but also{" "}
        <span className="text-mainblue">code.</span>
      </span>
    </div>
  );
};

export default Statement;
