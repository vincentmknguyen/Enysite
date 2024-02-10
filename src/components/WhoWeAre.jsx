import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 about p-12">
        <div className="md:basis-full">
          <h2 className="text-4xl text-mainblue text-center">Who are we?</h2>
        </div>
        <div className="md:basis-full">
          <h2 className="text-2xl font-bold">
            Located in Northern California, Serving Sacramento
          </h2>
          <p className="text-xl">
            At Enysite, we are more than just a web design and development
            agency – we are your dedicated partners in online success. Nestled
            in the heart of Northern California, we understand the pulse of
            Sacramento's business landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
