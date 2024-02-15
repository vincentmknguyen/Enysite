import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import FAQItem from "./FAQItem.jsx";
import "./FadeIn.css";

function ServicesFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`fade-section ${inView ? "fadeIn" : ""} mb-32`}
    >
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="heading">
          <h2 className="text-4xl font-bold text-mainblue">
            Frequently asked questions
          </h2>
          <p>
            Can't find the answer you were looking for?{" "}
            <Link to="/contact" className="text-mainblue">
              Reach out to us.
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <FAQItem
            title="What does Enysite do?"
            text="Enysite offers affordable, high-quality website solutions for small businesses. Our monthly subscription model simplifies the process and provides everything needed for online success. We are more than just a website provider; we are committed to supporting our clients' success."
          />
          <FAQItem
            title="I want to pay a lump-sum rather than monthly."
            text="For clients who wish to play a lump-sum rather than on a monthly model, we can quote you a lump-sum price depending on the scope of your project. Projects start at $2000 for standard websites."
          />
          <FAQItem
            title="How do I pay?"
            text="For clients who wish to play a lump-sum rather than on a monthly model, we can quote you a lump-sum price depending on the scope of your project. Projects start at $2000 for standard websites. Please note that web hosting isn't included in this plan and is $25/ month."
          />
          <FAQItem
            title="Is website domain name included?"
            text="The cost of your domain name is not included in the monthly model due to the many variables like availability that affect its price. We charge $20 per year for domain names, and the ownership remains with you even if you cancel our services."
          />
          <FAQItem title="" text="" />
        </div>
      </div>
    </section>
  );
}

export default ServicesFAQ;
