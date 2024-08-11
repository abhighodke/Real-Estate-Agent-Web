import React from 'react';
import { Link } from 'react-router-dom';

const AboutInfo = () => {
  return (
    <div className="bg-white mt-12 py-16 px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
      {/* Left Section */}
      <div className="lg:w-1/2 w-60 mb-8 lg:mb-0 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-10">PHILIP SCHEINFELD</h2>
        <h3 className="text-xl lg:text-1xl text-gray-600 mt-4">Trusted Real Estate Advisor</h3>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          David started his real estate career in 2002, and later expanded his expertise by becoming a corporate lawyer. He has been recognized as one of the Best Real Estate Professionals in America by The Wall Street Journal and is in the top 1.5% of all agents.
          <br/><br/>David Hatef is an accomplished real estate agent with the experience and talent you need to make your Nashville real estate dreams come true. Contact Nashville real estate agent & luxury realtor, David Hatef, to sell property & find houses & homes for sale in Green Hills, Oak Hill, Belle Meade, Forest Hills & more.
        </p>
        <Link to="/about" className="text-white hover:text-gray-300 relative group">
        <button className="mt-16 px-6 py-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition duration-300">
      Learn More
        </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full mt-6">
        <img src="https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/vrzgavgxfcnihkvupzqn/sitting" alt="Philip Scheinfeld Team" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default AboutInfo;
