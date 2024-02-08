import React from "react";
import "./ServicesText.css";

const ServicesText = (props) => {
  const { heading, mainText, imageSrc, altText, extraClasses } = props;

  return (
    <div
      className={`flex flex-col md:flex-row sm:justify-between items-center gap-8 content mt-16 md:mt-0 ${extraClasses}`}
    >
      <div className="basis-full">
        <h2 className="text-black text-3xl font-bold border-l-4 pl-4 border-black">
          {heading}
        </h2>
        <p className="text-xl mt-4">{mainText}</p>
      </div>
      <div className="flex justify-center w-full basis-full">
        <img
          className="max-w-s rounded-xl"
          src={imageSrc}
          alt={altText}
          decoding="async"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ServicesText;
