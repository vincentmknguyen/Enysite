import React from "react";
import { useInView } from "react-intersection-observer";
import "./Pricing.css";

const About = () => {
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
  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });
  return (
    <section className="mt-36 lg:mt-48" id="pricing">
      <div ref={ref1} className={`text-section ${inView1 ? "fadeIn" : ""}`}>
        <h2 className="text-mainblue text-4xl font-bold border-l-4 pl-4 border-mainblue">
          $0 Down, $150/mo. That's it.
        </h2>
        <p className="text-xl mt-6">
          Enysite is dedicated to providing transparency and affordability to
          businesses at all stages. Our pricing model is designed to be simple
          and accessible for both startups and established enterprises. For a
          standard 5-page website, you can benefit from a
          <span className="text-mainblue"> $0 down</span> payment, followed by
          an
          <span className="text-mainblue">
            {" "}
            affordable monthly fee of $150{" "}
          </span>
          for a minimum commitment of 6 months. Rather pay a lump sum? Contact
          for pricing based on scope.
          <br />
          <br />
          Your domain remains your valuable asset, with no hidden strings
          attached. You have the flexibility to cancel anytime after the
          commitment period with zero fees and no hassle. If your project
          requires more than a standard 5-page website, we offer custom pricing
          tailored to your specific requirements. Enysite is committed to
          ensuring your investment aligns perfectly with your business's growth
          and success.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-24 sm:gap-32 xl:gap-28 sm:grid-cols-2 xl:grid-cols-4">
        <div
          ref={ref2}
          className={`card1-section ${
            inView2 ? "fadeIn" : ""
          } max-w-lg card-section`}
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-mainblue">
              dvr
            </span>
            <h3 className="text-xl font-medium">Hosting Included</h3>
          </div>
          <p className="text-lg mt-3">
            Hosting costs are built into the payment. We will host and maintain
            your website for you for no additional cost.
          </p>
        </div>

        <div
          ref={ref3}
          className={`card2-section ${
            inView3 ? "fadeIn" : ""
          } max-w-lg card-section`}
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-mainblue">
              edit_square
            </span>
            <h3 className="text-xl font-medium">Unlimited Edits</h3>
          </div>
          <p className="text-lg mt-3">
            Need something updated or changed? Let us know anytime, and we will
            get it done.
          </p>
        </div>

        <div
          ref={ref4}
          className={`card3-section ${
            inView4 ? "fadeIn" : ""
          } max-w-lg card-section`}
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-mainblue">
              menu_book
            </span>
            <h3 className="text-xl font-medium">Design & Development</h3>
          </div>
          <p className="text-lg mt-3">
            We will take care of everything from the logo to graphic design to
            help your vision come to life.
          </p>
        </div>

        <div
          ref={ref5}
          className={`card4-section ${
            inView5 ? "fadeIn" : ""
          } max-w-lg card-section`}
        >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-mainblue">
              analytics
            </span>
            <h3 className="text-xl font-medium">Google Analytics</h3>
          </div>
          <p className="text-lg mt-3">
            Wonder how your website is doing? We install Google Analytics for
            free so you can monitor site traffic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
