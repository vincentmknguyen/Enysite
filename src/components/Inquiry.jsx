import React, { useState } from "react";

const Inquiry = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formReset, setFormReset] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, for now, just log the form data
    console.log("Form Data:", formData);

    // Reset the form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Set formReset to trigger the form reset
    setFormReset(true);
    // Reset formReset after a short delay (you can adjust the delay as needed)
    setTimeout(() => setFormReset(false), 1000);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold">{props.children}</h3>
      <form
        onSubmit={handleSubmit}
        action="/contact"
        name="contact"
        method="post"
        className="flex flex-col"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border-b focus:outline-none w-full"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border-b focus:outline-none w-full"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="sr-only">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 border-b focus:outline-none w-full"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:outline-none w-full h-48"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mt-4 self-end">
          <button
            type="submit"
            className="bg-white text-mainblue border-mainblue border rounded-full uppercase px-10 py-2 hover:bg-mainblue hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inquiry;
