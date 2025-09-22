// components/ProductCarousel.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const router = useRouter();

  // Auto-advance carousel with enhanced controls
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying, isHovered]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  }, [products.length]);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isPlaying]);

  // Enhanced animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
        opacity: { duration: 0.6 },
        scale: { duration: 0.8 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1200 : 1200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -15 : 15,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const textVariants = {
    hidden: {
      y: 80,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const backgroundVariants = {
    initial: { scale: 1.1 },
    animate: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 to-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Play/Pause Control */}
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </motion.button>

      {/* Enhanced Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 top-1/3 z-20 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-6 top-1/3 z-20 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>

      {/* Enhanced Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {products.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'w-12 bg-white shadow-lg shadow-white/30'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Slides with Enhanced Animations */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute h-full w-full"
        >
          {/* Enhanced Background Image */}
          <motion.div
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${products[currentIndex].image})` }}
          >
            {/* Multi-layer overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </motion.div>

          {/* Enhanced Product Information */}
          <div className="absolute bottom-20 left-0 w-full p-8 md:p-12 lg:p-16 text-white">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Product Category/Badge */}
              {products[currentIndex].category && (
                <motion.div
                  variants={childVariants}
                  className="inline-flex items-center mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 text-blue-300 text-sm font-semibold rounded-full"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {products[currentIndex].category}
                </motion.div>
              )}

              <motion.h2
                variants={childVariants}
                className="mb-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {products[currentIndex].name}
                </span>
              </motion.h2>

              <motion.p
                variants={childVariants}
                className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl leading-relaxed"
              >
                {products[currentIndex].description}
              </motion.p>

              {/* Price and Rating */}
              <motion.div
                variants={childVariants}
                className="flex items-center space-x-6 mb-8"
              >
                {products[currentIndex].price && (
                  <div className="text-3xl font-bold text-white">
                    {products[currentIndex].price}
                  </div>
                )}

                {products[currentIndex].rating && (
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(products[currentIndex].rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white font-semibold">
                      {products[currentIndex].rating}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Enhanced Buttons */}
              <motion.div
                variants={childVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  className="group relative px-8 py-4 bg-[#A8415B] text-white font-semibold rounded-full overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(235, 185, 22, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push(`/products`)}
                >
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5"
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
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                <motion.button
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20"
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5"
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
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: '0%' }}
          animate={{
            width: isPlaying && !isHovered ? '100%' : '0%',
          }}
          transition={{
            duration: isPlaying && !isHovered ? 4 : 0,
            ease: 'linear',
            repeat: isPlaying && !isHovered ? Infinity : 0,
          }}
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
