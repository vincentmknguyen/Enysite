import logo from "../assets/e-logo.svg";

const Hero = () => {
  return (
    <div className="h-screen">
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-24 md:mt-8 lg:mt-24 h-full">
          <div className="hero-image w-6/12 basis-full">
            <img
              className="md:max-w-sm lg:max-w-md"
              rel="preload"
              src={logo}
              alt="Enysite logo"
              decoding="async"
            />
          </div>
          <div className="basis-full flex flex-col gap-6">
            <main>
              <h1 className="text-5xl lg:text-6xl">
                We design and develop
                <span className="text-mainblue">high-quality</span> websites.
              </h1>
            </main>

            <p className="text-xl md:text-2xl">
              Elevate your digital presence: Your website – the ultimate channel
              for people to discover you anytime, anywhere.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
