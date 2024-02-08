import "./Pricing.css";
import Inquiry from "./Inquiry.jsx";

const ContactPageForm = () => {
  return (
    <section className="mt-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="basis-full flex flex-col gap-4">
          <h2 className="text-5xl text-mainblue">Reach out to us!</h2>
          <div className="text-xl">
            <p>enysitewebdesigns@gmail.com</p>
            <p>+1 408-646-1221</p>
          </div>
        </div>

        <div className="basis-full">
          <Inquiry />
        </div>
      </div>
    </section>
  );
};

export default ContactPageForm;
