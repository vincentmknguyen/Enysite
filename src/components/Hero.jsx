import logo from "../assets/e-logo.svg";

const Hero = () => {
  return (
    <div className="h-screen">
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-12 sm:mt-24 md:mt-8 lg:mt-24 h-full">
          <div className="hero-image w-2/5 lg:w-2/4 basis-full">
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
                Unlocking Excellence in Sacramento{" "}
                <span className="text-mainblue">Web Design</span>
              </h1>
            </main>

            <p className="text-xl md:text-2xl">
              Elevate your digital presence with Enysite, your premier
              Sacramento web design partner. We specialize in crafting
              high-quality websites that captivate, engage, and convert. Explore
              the power of a seamless online experience tailored for your brand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
