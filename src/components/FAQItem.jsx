import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function FAQItem({ title, text }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl font-bold">{title}</p>
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default FAQItem;
