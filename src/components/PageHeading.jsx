import React from "react";
import { useInView } from "react-intersection-observer";
import "./PageHeading.css";

const PageHeading = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`heading-section ${inView ? "fadeIn" : ""} mt-12`}
    >
      <div className="p-12 page-heading">
        <div>
          <h1 className="text-4xl text-mainblue text-center font-bold">
            {props.children}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
