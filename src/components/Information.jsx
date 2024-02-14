import React from "react";
import Card from "./Card";
import "./Information.css";

const Information = () => {
  return (
    <section className="mt-36 px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-8 flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <h2 className="text-5xl text-mainblue text-center font-bold">
          More than just a website.
        </h2>
        <p className="text-xl">
          We don't just create websites, we work as your business partners and
          strive to bring you tangible{" "}
          <span className="text-mainblue">results</span>. We aim to help you
          attract more customers to your business. Our monthly fee includes
          everything from search engine optimization, web design, logos,
          graphics, development, hosting, 24/7 support, and unlimited edits as a
          standard. You can count on us to support you even after your website
          is launched.
        </p>
        <Card />
      </div>
    </section>
  );
};

export default Information;
