import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ServicesText from "./ServicesText.jsx";
import PricingCard from "./PricingCard.jsx";
import livemusic from "../assets/livemusic.webp";
import iphone from "../assets/iphone.webp";
import Statement from "../components/Statement.jsx";
import ServicesFAQ from "../components/ServicesFAQ.jsx";
import "./ServicesContent.css";

function ServicesContent() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });
  return (
    <div>
      <main>
        <Statement />
        <p
          ref={ref1}
          className={`${inView1 ? "fadeIn" : ""} card-section text-xl mt-16`}
        >
          Welcome to <span className="text-mainblue">Enysite</span>, where
          creativity converges with precision to redefine your digital presence.
          Our Creative Web Design and Development services elevate your brand,
          combining state-of-the-art design with meticulous, line-by-line coding
          for a website that not only looks exceptional but performs seamlessly.
        </p>
      </main>

      <div>
        <div ref={ref2} className={`${inView2 ? "fadeIn" : ""} card-section`}>
          <ServicesText
            heading="Web Design"
            mainText="We will give your ideas life and turn your ideas into stunning and beautiful user-friendly websites. Focusing on clean and intuitive layouts, we ensure users have a great experience on any platform."
            imageSrc={livemusic}
            altText="Example image of web design of a music production company."
          />
        </div>
        <div ref={ref3} className={`${inView3 ? "fadeIn" : ""} card-section`}>
          <ServicesText
            heading="Web Development"
            mainText="We focus heavily on web performance and optimization in order for your website to rank highly on search engines. Each website is coded line by line to ensure your website isn't bloated and slowed down like most WordPress or page builder sites. Whether you need a website for your small business, a dynamic corporate website, or anything in between, we specialize in building custom digital solutions that are scalable, responsive, and perfectly aligned with your specific business needs."
            imageSrc={iphone}
            altText="Example image of an interior design website on iPhone view."
            extraClasses="md:flex-row-reverse"
          />
        </div>
        <ServicesFAQ />

        <div ref={ref4} className={`${inView4 ? "fadeIn" : ""} card-section`}>
          <PricingCard />
        </div>
      </div>
    </div>
  );
}

export default ServicesContent;
