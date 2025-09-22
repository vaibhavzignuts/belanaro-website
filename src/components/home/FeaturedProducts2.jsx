'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { productCategories } from '@/constants/constants';
import ProductDescription from './ProductDescription';

const ProductSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();

  const clickNext = () => {
    activeImage === productCategories.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(productCategories.length - 1)
      : setActiveImage(activeImage - 1);
  };

  const viewProducts = (categoryId) => {
    router.push(`/products?category=${categoryId}`);
  };

  // Simple autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="w-full mx-auto overflow-hidden">
      {/* Container for both image and description */}
      <div className="flex flex-col md:flex-row w-full h-[85vh] md:h-[800px] lg:h-[800px] max-h-screen rounded-2xl overflow-hidden shadow-2xl bg-[#FDFCFB] relative">
        {/* Background elements matching Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-purple-100 to-transparent opacity-30 rounded-bl-[200px]"></div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <div className="relative w-full h-full">
            {/* Gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-[#7C3AED]/10 z-10"></div>

            <Image
              src={productCategories[activeImage].image || '/placeholder.svg'}
              alt={productCategories[activeImage].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-opacity duration-500"
              priority
              quality={95}
            />

            {/* Image title overlay for mobile */}
            <div className="absolute bottom-4 left-4 md:hidden z-20">
              <div className="bg-white/90 backdrop-blur-md rounded-lg px-4 py-2 border border-[#7C3AED]/20 shadow-lg">
                <h3 className="text-gray-800 font-bold text-lg">
                  {productCategories[activeImage].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {productCategories[activeImage].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
          <ProductDescription
            categories={productCategories}
            activeImage={activeImage}
            clickNext={clickNext}
            clickPrev={clickPrev}
            viewProducts={viewProducts}
          />
        </div>
      </div>

      {/* Simple Mobile Controls */}
      <div className="md:hidden mt-6 px-4">
        {/* View Products Button for Mobile */}
        <div className="mb-4">
          <button
            className="w-full bg-gradient-to-r from-[#7C3AED] to-[#B54967] text-white font-bold uppercase px-6 py-4 rounded-xl cursor-pointer hover:from-[#B54967] hover:to-[#7C3AED] transition-all duration-300 shadow-lg border border-white/20 text-base tracking-wide"
            onClick={() => viewProducts(productCategories[activeImage].id)}
          >
            View {productCategories[activeImage].title} Products
          </button>
        </div>

        {/* Mobile pagination indicators */}
        <div className="flex justify-center w-full">
          <div className="flex space-x-3 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 border border-[#7C3AED]/20 shadow-lg">
            {productCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  idx === activeImage
                    ? 'bg-[#7C3AED] shadow-lg shadow-[#7C3AED]/50'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
