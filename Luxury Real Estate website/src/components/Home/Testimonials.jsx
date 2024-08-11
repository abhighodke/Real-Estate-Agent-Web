import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import quoteIcon from '../../assets/quote.png'; // Import your custom quote icon

const TestimonialCard = ({ quote, author }) => (
  <div className="relative bg-gray-200 p-6 shadow-md w-80 h-96 mx-auto transition-colors duration-300 hover:bg-gray-300 hover:shadow-lg overflow-hidden flex flex-col justify-between">
    <img 
      src={quoteIcon} 
      alt="Quote Icon" 
      className="w-12 h-12 mx-auto mt-4"
    />
    <blockquote className="text-gray-600 text-center flex-grow flex items-center justify-center mx-4">
      {quote}
    </blockquote>
    <p className="font-semibold text-right mb-4 mx-4">{author}</p>
    <div className="absolute inset-0 bg-white opacity-10 z-0"></div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lina made finding my Manhattan apartment a breeze with her professionalism and personal touch. Relocating with a dog was challenging, but she made it enjoyable and trustworthy.",
      author: "ITTAI"
    },
    {
      quote: "Jason provided thorough answers to all my questions about the neighborhood and property. His sincere interest and real advice made the buying process smooth and transparent.",
      author: "JARED T."
    },
    {
      quote: "Sam was an exceptional agent, investing hard work and dedication into helping us find our home. His support made the process enjoyable and we’re thrilled with our new home.",
      author: "FRANCOIS B."
    },
    {
      quote: "Sam was fantastic in helping us find our dream home. His market knowledge and willingness to go the extra mile ensured we were happy and satisfied with the purchase.",
      author: "AMY S."
    },
    {
      quote: "Lina was a professional and caring agent. She made the buying process smooth and stress-free, always putting my best interests first and providing expert guidance.",
      author: "ROBERT J."
    },
    {
      quote: "Jason’s patience and attentiveness helped us find the perfect property. His responsiveness and knowledge made the entire experience seamless and enjoyable.",
      author: "MELISSA W."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - visibleTestimonials ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-10 mb-20 text-center">Success Stories</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
            {testimonials.slice(currentIndex, currentIndex + visibleTestimonials).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="m-2 px-4 py-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition duration-300"
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <button
              className="m-2 px-4 py-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition duration-300"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;