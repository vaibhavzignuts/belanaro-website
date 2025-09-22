'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// import { productCategories } from "./constants"
// import ProductDescription from './ProductDescription';
import { productCategories } from '@/constants/constants';
import ProductDescription from './ProductDescription';

const ProductSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Enhanced autoplay with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      clickNext();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage, isAutoPlaying]);

  return (
    <div className="w-full mx-auto overflow-hidden">
      {/* Container for both image and description */}
      <div
        className="flex flex-col md:flex-row w-full h-[85vh] md:h-[800px] lg:h-[800px] max-h-screen rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-900 to-black"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            {productCategories.map(
              (category, idx) =>
                idx === activeImage && (
                  <motion.div
                    key={category.id}
                    initial={{
                      opacity: 0,
                      scale: 1.1,
                      filter: 'blur(10px)',
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      filter: 'blur(5px)',
                    }}
                    transition={{
                      duration: 1.5,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0"
                  >
                    <div className="relative w-full h-full">
                      {/* Gradient overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#A8415B]/10 z-10"></div>

                      <Image
                        src={category.image || '/placeholder.svg'}
                        alt={category.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        priority
                        quality={95}
                      />

                      {/* Image title overlay for mobile */}
                      <div className="absolute bottom-4 left-4 md:hidden z-20">
                        <div className="bg-black/50 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                          <h3 className="text-white font-bold text-lg">
                            {category.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Loading indicator */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-20">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/30 border-t-white animate-spin opacity-50"></div>
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

      {/* Enhanced Mobile Controls */}
      <div className="md:hidden mt-6 px-4">
        {/* View Products Button for Mobile */}
        <div className="mb-4">
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="w-full bg-gradient-to-r from-[#A8415B] to-[#B54967] text-white font-bold uppercase px-6 py-4 rounded-xl cursor-pointer hover:from-[#B54967] hover:to-[#A8415B] transition-all duration-300 shadow-lg border border-white/20 text-base tracking-wide"
            onClick={() => viewProducts(productCategories[activeImage].id)}
          >
            View {productCategories[activeImage].title} Products
          </motion.button>
        </div>

        {/* Mobile pagination indicators */}
        <div className="flex justify-center w-full">
          <div className="flex space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
            {productCategories.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveImage(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  idx === activeImage
                    ? 'bg-[#A8415B] shadow-lg shadow-[#A8415B]/50'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
              }`}
            ></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>
      </div>

      {/* Desktop Auto-play indicator */}
      <div className="hidden md:flex justify-center mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          <div
            className={`w-2 h-2 rounded-full ${
              isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            }`}
          ></div>
          <span>
            {isAutoPlaying ? 'Auto-playing • Hover to pause' : 'Paused'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
