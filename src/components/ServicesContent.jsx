import React, { useEffect } from "react";
import ServicesText from "./ServicesText.jsx";
import PricingCard from "./PricingCard.jsx";
import livemusic from "../assets/livemusic.webp";
import iphone from "../assets/iphone.webp";
import "../App.css";

function ServicesContent() {
  return (
    <div>
      <main>
        <p className="text-xl mt-16">
          Welcome to <span className="text-mainblue">Enysite</span>, where
          creativity converges with precision to redefine your digital presence.
          Our Creative Web Design and Development services elevate your brand,
          combining state-of-the-art design with meticulous, line-by-line coding
          for a website that not only looks exceptional but performs seamlessly.
        </p>
      </main>

      <div>
        <ServicesText
          heading="Web Design"
          mainText="We will give your ideas life and turn your ideas into stunning and beautiful user-friendly websites. Focusing on clean and intuitive layouts, we ensure users have a great experience on any platform."
          imageSrc={livemusic}
          altText="Example image of web design of a music production company."
        />
        <ServicesText
          heading="Web Development"
          mainText="We focus heavily on web performance and optimization in order for your website to rank highly on search engines. Each website is coded line by line to ensure your website isn't bloated and slowed down like most WordPress or page builder sites. Whether you need a website for your small business, a dynamic corporate website, or anything in between, we specialize in building custom digital solutions that are scalable, responsive, and perfectly aligned with your specific business needs."
          imageSrc={iphone}
          altText="Example image of an interior design website on iPhone view."
          extraClasses="md:flex-row-reverse"
        />
        <PricingCard />
      </div>
    </div>
  );
}

export default ServicesContent;
