import React, { useState, memo } from 'react';
import blogImage from '../../assets/blog_bg.jpg'; // Replace with the correct path to your image
import cardImage1 from '../../assets/blogOne.jpg'; // Replace with the correct path to your card images
import cardImage2 from '../../assets/blogTwo.jpg';
import cardImage3 from '../../assets/blogThree.jpg';

// Memoize ResourceCard to prevent unnecessary re-renders
const ResourceCard = memo(({ image, header, date }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-1.5/2">
    <img src={image} alt="Blog" className="w-full h-72 object-cover rounded-lg mb-4" loading="lazy" />
    <div className="flex-grow">
      <h3 className="text-lg font-semibold mb-2">{header}</h3>
      <p className="text-gray-600 mb-4">{date}</p>
      <a href="#" className="text-black border-b-2 border-transparent hover:border-black transition-colors duration-300">
        Read More
      </a>
    </div>
  </div>
));

const Resources = () => {
  const blogPosts = [
    { image: cardImage1, header: "Understanding Market Trends", date: "August 15, 2024" },
    { image: cardImage2, header: "Top Neighborhoods for Investment", date: "July 22, 2024" },
    { image: cardImage3, header: "How to Choose the Right Property", date: "June 10, 2024" },
    { image: cardImage1, header: "Market Analysis for 2024", date: "May 5, 2024" },
    { image: cardImage2, header: "Luxury Properties Spotlight", date: "April 20, 2024" },
    { image: cardImage3, header: "Investment Tips for Beginners", date: "March 15, 2024" },
    { image: cardImage1, header: "Trends in Urban Living", date: "February 10, 2024" },
    { image: cardImage2, header: "Top Features for Modern Homes", date: "January 25, 2024" },
    { image: cardImage3, header: "The Future of Real Estate", date: "December 30, 2023" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Get the posts for the current page
  const currentPosts = blogPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Part */}
      <header className="relative h-96 mb-12">
        <img src={blogImage} alt="Blog Header" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Blog</h1>
            <p className="text-lg mt-4">Latest insights into real estate market</p>
          </div>
        </div>
      </header>

      {/* Bottom Part */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <ResourceCard key={index} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-20 mb-20">
          <nav>
            <ul className="flex items-center space-x-2">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-3 py-1 border border-gray-300 text-gray-600 rounded disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 border border-gray-300 rounded ${currentPage === i + 1 ? 'bg-gray-300 text-gray-700' : 'text-gray-600'}`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-3 py-1 border border-gray-300 text-gray-600 rounded disabled:opacity-50"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Resources;
