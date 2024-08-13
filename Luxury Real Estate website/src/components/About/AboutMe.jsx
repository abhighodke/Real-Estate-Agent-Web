import React, { useEffect } from 'react';
import aboutImage from '../../assets/will-turner-7MClrxZ8F6w-unsplash.jpg'; // Replace with the correct path to your image
import topImage from '../../assets/mathias-reding-cmyDyDa6Wfk-unsplash.jpg'; // New image at the top

const AboutMe = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="w-full">
      {/* Top Image Section */}
      <header className="relative h-64 mb-12">
        <img src={topImage} alt="Blog Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl">About</h1>
            <p className="text-lg mt-4">Know More About Me</p>
          </div>
        </div>
      </header>

      {/* Two-Part Layout Below */}
      <div className="flex flex-col md:flex-row w-full mb-20">
        <div className="md:w-1/2 h-1/2 md:h-auto p-12">
          <img src={aboutImage} alt="About Us" className="object-cover w-full h-full" />
        </div>
        <div className="md:w-1/2 h-auto bg-white flex flex-col justify-center p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PHILIP SCHEINFELD</h2>
          <p className="text-gray-600">
            With over a decade of experience, Philip Scheinfeld is a leading figure in New York City's luxury real estate market, known for his unparalleled passion and commitment to the New York lifestyle. As one of the top agents in New York, NY, and a top producer for his brokerage, Philip has sold over $1 billion throughout his career. Consistently honored among New York's select multi-million dollar producers, he has been ranked among the top agents by The Real Deal and is a distinguished member of several exclusive real estate organizations. His connections to the top 1% of the industry afford him access to the most coveted properties, many of which are never listed in the highly competitive New York luxury market.
            Philip attributes his success to his effective working relationships with his clients. His first priority is always open, honest communication about his client's particular needs and lifestyle. Finding the right property or selling a home has its rewards, but for Philip, a life-long relationship with a client brings him genuine personal satisfaction. Above all, Philip is passionate about improving the lives of his clients by helping them find properties that bring them joy and fulfillment. He understands the value of a real estate investment in a way that few can articulate, using his uncanny intuition to maximize returns for his clients. When listing a client's home, he evaluates the market opportunities, encouraging them to be smart and patient to achieve the best outcome.
            Prior to his real estate career, Philip graduated from a prestigious university with a degree in business. He currently serves on several local community boards and is a member of various real estate organizations in New York City. He also works with his favorite charities, including those focused on children's health and welfare. In addition to his professional pursuits, you can find Philip enjoying the vibrant New York food scene, attending cultural events, or exploring the city's diverse neighborhoods. Philip enjoys spending quality time with his family and has a deep love for New York's dynamic energy and endless opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
