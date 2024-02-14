import React from "react";
import { useInView } from "react-intersection-observer";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  return (
    <section ref={ref1} className={`who-section ${inView1 ? "fadeIn" : ""}`}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 about p-12">
        <div className="md:basis-full">
          <h2
            ref={ref2}
            className={`title-section ${
              inView2 ? "fadeIn" : ""
            } text-4xl text-mainblue text-center`}
          >
            Who are we?
          </h2>
        </div>
        <div className="md:basis-full">
          <p
            ref={ref3}
            className={`text-section ${inView3 ? "fadeIn" : ""} text-xl`}
          >
            We specialize in hassle free, results-driven websites for small
            businesses. With our monthly subscription based model, we aim to
            offer high-quality, high-end websites without the high price. Above
            all we focus on results. Meaning we hand-code line by line to
            optimize performance, which brings in more traffic to your site and
            brings you more business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
