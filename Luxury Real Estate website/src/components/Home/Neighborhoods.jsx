import React from 'react';

const NeighborhoodCard = ({ name, image, isViewAll, url }) => (
  <div
    className="relative h-full w-full overflow-hidden bg-cover bg-center transition-opacity duration-300 hover:opacity-80 z-10 hover:z-20"
    style={{ backgroundImage: image ? `url(${image})` : 'url(default-image-url)' }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="text-center relative z-10">
        <h3 className="text-white text-2xl font-bold mb-4">{name}</h3>
        <a
          href={isViewAll ? 'https://www.google.com' : url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 relative group"
        >
          <button className="mt-8 px-6 py-2 bg-transparent text-white border border-white hover:bg-white hover:text-black transition duration-300">
            {isViewAll ? 'View All' : 'Learn More'}
          </button>
        </a>
      </div>
    </div>
  </div>
);

const Neighborhoods = () => {
  const lakeAustin = 'https://images.pexels.com/photos/1575861/pexels-photo-1575861.jpeg';
  const travisHeights = 'https://images.pexels.com/photos/8854125/pexels-photo-8854125.jpeg';
  const downtownAustin = 'https://images.pexels.com/photos/25636642/pexels-photo-25636642/free-photo-of-top-view-of-green-fields-and-a-forest.jpeg';
  const all = 'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg';
  
  const neighborhoods = [
    { name: "LAKE AUSTIN", image: lakeAustin, url: 'https://en.wikipedia.org/wiki/Lake_Austin' },
    { name: "TRAVIS HEIGHTS", image: travisHeights, url: 'https://en.wikipedia.org/wiki/Travis_Heights,_Austin,_Texas' },
    { name: "DOWNTOWN AUSTIN", image: downtownAustin, url: 'https://en.wikipedia.org/wiki/Downtown_Austin' },
    { name: "FEATURED COMMUNITIES", image: all, isViewAll: true },
  ];

  return (
    <div className="relative w-screen h-screen grid grid-cols-2 grid-rows-2 gap-0">
      {neighborhoods.map((neighborhood, index) => (
        <NeighborhoodCard key={index} {...neighborhood} />
      ))}
    </div>
  );
};

export default Neighborhoods;
