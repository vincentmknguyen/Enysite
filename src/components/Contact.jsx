import Inquiry from "./Inquiry.jsx";

const Contact = () => {
  return (
    <section className="mt-36 lg:mt-48 h-screen" id="contact">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="basis-full flex flex-col gap-4">
          <h2 className="text-5xl text-mainblue">Let's get started.</h2>
          <div className="text-xl">
            <p>enysitewebdesigns@gmail.com</p>
            <p>+1 408-646-1221</p>
          </div>
        </div>

        <div className="basis-full">
          <Inquiry children="Start your website" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
