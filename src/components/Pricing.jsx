import "./Pricing.css";

const About = () => {
  return (
    <section className="mt-36 lg:mt-48" id="pricing">
      <h2 className="text-mainblue text-4xl font-bold border-l-4 pl-4 border-mainblue">
        Pricing
      </h2>
      <p className="text-xl mt-6">
        Enysite is dedicated to providing transparency and affordability to
        businesses at all stages. Our pricing model is designed to be simple and
        accessible for both startups and established enterprises. For a standard
        5-page website, you can benefit from a
        <span className="text-mainblue"> $0 down</span> payment, followed by an
        <span className="text-mainblue"> affordable monthly fee of $150 </span>
        for a minimum commitment of 6 months. Rather pay a lump sum? Contact for
        pricing based on scope.
        <br />
        <br />
        Your domain remains your valuable asset, with no hidden strings
        attached. You have the flexibility to cancel anytime after the
        commitment period with zero fees and no hassle. If your project requires
        more than a standard 5-page website, we offer custom pricing tailored to
        your specific requirements. Enysite is committed to ensuring your
        investment aligns perfectly with your business's growth and success.
      </p>
      <div className="mt-20 grid grid-cols-1 gap-24 sm:gap-32 xl:gap-28 sm:grid-cols-2 xl:grid-cols-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-lightblue">
              dvr
            </span>
            <h3 className="text-xl font-medium">Hosting Included</h3>
          </div>
          <p className="text-lg mt-3">
            Hosting costs are built into the payment. We will host and maintain
            your website for you for no additional cost.
          </p>
        </div>

        <div className="max-w-lg">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-lightblue">
              edit_square
            </span>
            <h3 className="text-xl font-medium">Unlimited Edits</h3>
          </div>
          <p className="text-lg mt-3">
            Need something updated or changed? Let us know anytime, and we will
            get it done.
          </p>
        </div>

        <div className="max-w-lg">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-lightblue">
              menu_book
            </span>
            <h3 className="text-xl font-medium">Design & Development</h3>
          </div>
          <p className="text-lg mt-3">
            We will take care of everything from the logo to graphic design to
            help your vision come to life.
          </p>
        </div>

        <div className="max-w-lg">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-lightblue">
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
