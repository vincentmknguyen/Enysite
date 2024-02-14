import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 about p-12">
        <div className="md:basis-full">
          <h2 className="text-4xl text-mainblue text-center">Who are we?</h2>
        </div>
        <div className="md:basis-full">
          <p className="text-xl">
            We specialize in hassle free, results-driven websites for small
            businesses. With our monthly subscription based model, we aim to
            offer high-quality, high-end websites without the high price. Above
            all we focus on results. Meaning we hand-code line by line to
            optimize performance, which brings in more traffic to your site and
            brings you more business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
