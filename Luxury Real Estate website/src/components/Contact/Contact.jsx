import React from 'react';
import backgroundImage from '../../assets/Travis.jpg'; // Replace with the correct path to your background image

const Contact = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row w-full min-h-screen">
      {/* Left Section: Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16">
        <h2 className="text-3xl lg:text-6xl mb-10 mt-10">Get In Touch</h2>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded-md mb-4 md:mb-0"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded-md"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-4 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Message"
            className="w-full p-4 border border-gray-300 rounded-md h-32"
          ></textarea>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacyPolicy"
              className="mr-2 mt-1"
            />
            <label htmlFor="privacyPolicy" className="text-gray-600">
              I agree to the privacy policy
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section: Background Image and Contact Details */}
      <div
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center flex flex-col justify-center items-center p-8 md:p-16"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
      </div>
    </section>
  );
};

export default Contact;
