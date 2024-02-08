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
            We are a web design and development agency located in Northern
            California that specializes in helping small businesses build
            high-quality websites. We focus on performance and ranking helping
            potential clients and customers find your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
