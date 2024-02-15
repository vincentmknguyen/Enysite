import React from "react";
import { useInView } from "react-intersection-observer";
import logo from "../assets/e-logo.svg";
import "./Hero.css"; // Import your CSS file for styling

const Hero = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="h-screen">
      <section>
        <div className="min-h-fit flex flex-col lg:flex-row justify-center items-center gap-12 mt-12 sm:mt-24 md:mt-8 lg:mt-24 h-full">
          <div className="hero-image w-2/5 lg:w-2/4 basis-full">
            <img
              ref={ref1}
              className={`image-section ${
                inView1 ? "fadeIn" : ""
              } hero-img md:max-w-sm lg:max-w-md`}
              rel="preload"
              src={logo}
              alt="Enysite logo"
              decoding="async"
            />
          </div>
          <div className="basis-full flex flex-col gap-6">
            <main
              ref={ref2}
              className={`text-section ${inView2 ? "fadeIn" : ""}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="text-mainblue">Custom</span> Web Design and
                Development
              </h1>
              <p className="text-xl md:text-xl mt-4">
                Transform your online presence with our all-in-one web solution.
                Boost traffic with web design, development, and SEO marketing,
                starting at $150/mo. Elevate your strategy and succeed online!
              </p>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
