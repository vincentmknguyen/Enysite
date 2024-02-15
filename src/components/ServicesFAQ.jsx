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
            title="What is included in the $150 website subscription service?"
            text="The $150 subscription model falls under our standard 5-page website including: logos, graphics, web design, SEO optimization, web development, hosting, support, unlimited edits, and lifetime updates."
          />
          <FAQItem
            title="Who is the standard website plan for?"
            text="Our standard website plan is ideal for small businesses or individuals who need a website to inform, generate leads, or entertain their audience. This plan is perfect for creating a standard 5-page website, which usually includes pages like Home, About, Services, Pricing, and Contact."
          />
          <FAQItem
            title="What if my business requires more complex features or more pages?"
            text="Do you need a booking feature or a way for customers to purchase goods or services from you online? Maybe you need some more pages beyond the standard? We have you covered. Contact us for more details and a free quote and consultation."
          />
          <FAQItem
            title="How can your websites benefit our business?"
            text="Humans are inherently biased creatures. We are hardwired to associate beauty with trust. That is why we focus heavily on the user experience and how your website looks and feels. When customers visit your website and associate it with something positive, they are more likely to trust your business and in return, more likely to work with you."
          />
          <FAQItem
            title="What does unlimited updates mean?"
            text="Our website design service comes with unlimited updates. This means that if you need to make any changes to your website, you can contact us and we will take care of it without any additional costs. However, please note that changes that fall outside the scope of the original project may incur additional charges. For instance, adding new sections, updating photos, and revising content are all included in the unlimited updates. On the other hand, adding e-commerce or reservation systems to a standard website may require additional fees. If you have any further questions regarding our unlimited updates policy, please do not hesitate to contact us."
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesFAQ;
