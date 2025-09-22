// components/ProductCarousel.jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const router = useRouter();

  // Preload images to prevent flickering
  useEffect(() => {
    const preloadImages = () => {
      products.forEach((product, index) => {
        const img = new Image();
        img.onload = () => {
          setImageLoaded(prev => ({ ...prev, [index]: true }));
        };
        img.src = product.image;
      });
    };
    preloadImages();
  }, [products]);

  // Simplified auto-advance without transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Optimized Navigation Arrows - Smaller size */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 group"
        aria-label="Previous slide"
      >
        <div className="bg-white/90 backdrop-blur-sm text-gray-700 p-2.5 rounded-full shadow-lg border border-white/20 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 group"
        aria-label="Next slide"
      >
        <div className="bg-white/90 backdrop-blur-sm text-gray-700 p-2.5 rounded-full shadow-lg border border-white/20 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </button>

      {/* Enhanced Indicators with modern design */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center space-x-3">
        <div className="bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <div className="flex space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex
                    ? 'w-8 bg-white shadow-lg'
                    : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-8 right-8 z-30 bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
        {currentIndex + 1} / {products.length}
      </div>

      {/* Optimized Slide Content with preloaded images */}
      <div className="relative h-full w-full">
        {/* Main product image with loading state */}
        {!imageLoaded[currentIndex] && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}
        
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ 
            backgroundImage: `url(${products[currentIndex].image})`,
            opacity: imageLoaded[currentIndex] ? 1 : 0
          }}
        />

        {/* Minimal overlay only for content readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Product Information with enhanced design - Centered */}
        <div className="absolute inset-0 flex items-center justify-center w-full p-8 md:p-12 lg:p-16">
          <div className="max-w-5xl text-center">
            {/* Enhanced Category Badge */}
            {products[currentIndex].category && (
              <div className="inline-flex items-center mb-6 px-5 py-2 bg-white/15 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></div>
                {products[currentIndex].category}
              </div>
            )}

            {/* Enhanced Title with better typography */}
            <h2 className="mb-6 text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9]">
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                {products[currentIndex].name}
              </span>
            </h2>

            {/* Enhanced Description - Centered */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light backdrop-blur-sm">
              {products[currentIndex].description}
            </p>

            {/* Enhanced Price and Rating section - Centered */}
            <div className="flex items-center justify-center space-x-8 mb-10">
              {products[currentIndex].price && (
                <div className="flex items-center">
                  <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {products[currentIndex].price}
                  </div>
                </div>
              )}

              {products[currentIndex].rating && (
                <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 transition-all duration-200 ${
                          i < Math.floor(products[currentIndex].rating)
                            ? 'text-yellow-400 fill-current drop-shadow-sm'
                            : 'text-white/40'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold text-sm">
                    {products[currentIndex].rating}
                  </span>
                </div>
              )}
            </div>

            {/* Enhanced Action Buttons - Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 shadow-xl"
                onClick={() => router.push(`/products`)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                  <span>Explore Now</span>
                </div>
              </button>

              <button className="group px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-2xl active:scale-95 shadow-xl">
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>View Details</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};

export default ProductCarousel;