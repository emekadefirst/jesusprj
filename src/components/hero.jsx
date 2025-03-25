import React from 'react';

const BrandHero = () => {
  const brands = [
    { name: 'Amazon', color: 'bg-black', textColor: 'text-white' },
    { name: 'Nike', color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'Netflix', color: 'bg-red-600', textColor: 'text-white' },
    { name: 'PlayStation', color: 'bg-blue-600', textColor: 'text-white' },
    { name: 'eBay', color: 'bg-blue-700', textColor: 'text-white' },
    { name: 'Google Play', color: 'bg-green-500', textColor: 'text-white' },
    { name: 'Best Buy', color: 'bg-yellow-500', textColor: 'text-black' },
    { name: 'ASOS', color: 'bg-gray-900', textColor: 'text-white' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-50 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {brands.map((brand, index) => (
          <div
            key={brand.name}
            className={`
              absolute 
              ${brand.color} 
              rounded-full 
              opacity-10 
              animate-blob
              ${index % 2 === 0 ? 'left-0' : 'right-0'}
            `}
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              top: `${Math.random() * 100}%`,
              transform: `translateX(${index % 2 === 0 ? '-50%' : '50%'}) rotate(${Math.random() * 360}deg)`,
              animationDelay: `${index * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
          Transform Your Digital Experience
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Connect, transact, and explore with a platform that brings together the world's most innovative brands and services.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition transform hover:scale-105 shadow-lg">
            Get Started
          </button>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full hover:bg-gray-100 transition transform hover:scale-105 shadow-lg border">
            Learn More
          </button>
        </div>

        {/* Brand Logos */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 opacity-50">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`
                ${brand.color} 
                ${brand.textColor}
                rounded-full 
                w-16 h-16 
                flex items-center 
                justify-center 
                font-bold 
                text-sm
                uppercase
                shadow-md
              `}
            >
              {brand.name.substring(0, 3)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandHero;