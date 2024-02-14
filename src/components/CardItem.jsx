import React from "react";
import { useInView } from "react-intersection-observer";

const CardItem = ({ title, content, icon, refType, inViewType, baseClass }) => {
  const refs = {
    ref1: useInView({ triggerOnce: true }),
    ref2: useInView({ triggerOnce: true }),
    ref3: useInView({ triggerOnce: true }),
    ref4: useInView({ triggerOnce: true }),
  };

  const { ref, inView } = refs[refType];

  return (
    <div
      ref={ref}
      className={`${baseClass} ${
        inView && inViewType ? "fadeIn" : ""
      } flex flex-col gap-4 text-center border rounded-lg p-4 shadow-md card-section`}
    >
      <span className="material-symbols-outlined text-4xl text-mainblue">
        {icon}
      </span>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default CardItem;
