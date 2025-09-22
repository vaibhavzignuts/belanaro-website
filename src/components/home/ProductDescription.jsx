'use client';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDescription = ({
  categories,
  activeImage,
  clickNext,
  clickPrev,
  viewProducts,
}) => {
  return (
    <div className="w-full bg-gradient-to-br from-[#A8415B] via-[#B54967] to-[#A8415B] h-full relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="uppercase text-xs md:text-sm absolute right-3 md:right-4 top-2 md:top-3 underline-offset-4 underline text-white/90 font-medium tracking-wider z-10">
        Products
      </div>

      {categories.map((category, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? 'block w-full h-full py-6 md:py-12 px-4 md:px-12 text-left relative z-10'
              : 'hidden'
          }`}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: 'easeOut',
              duration: 0.8,
            }}
            className="w-full h-full flex flex-col"
          >
            {/* Title Section */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-xl md:text-4xl lg:text-5xl text-white font-black mb-2 md:mb-3 leading-tight drop-shadow-lg">
                {category.title}
              </h2>
              <h3 className="text-base md:text-2xl lg:text-3xl text-white/95 font-semibold mb-3 md:mb-4 drop-shadow-md">
                {category.subtitle}
              </h3>
            </div>

            {/* Description with better readability */}
            <div className="flex-grow mb-4 md:mb-6">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/10">
                <p className="leading-relaxed font-medium text-sm md:text-base lg:text-lg tracking-wide text-white/95 max-h-32 md:max-h-40 lg:max-h-48 overflow-y-auto custom-scrollbar">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Featured Products */}
            <div className="mb-4 md:mb-6">
              <h4 className="text-white/95 font-semibold mb-2 md:mb-3 text-sm md:text-base">
                Featured Products:
              </h4>
              <div className="bg-black/15 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/10">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-1.5 text-xs md:text-sm text-white/90">
                  {category.products.slice(0, 6).map((product, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-white/80 rounded-full mr-2 flex-shrink-0"></span>
                      <span className="font-medium">{product}</span>
                    </li>
                  ))}
                  {category.products.length > 6 && (
                    <li className="text-white/70 italic text-xs md:text-sm col-span-full mt-1">
                      and {category.products.length - 6} more products...
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* View Products Button - Hidden on small screens */}
            <div className="hidden md:block mb-6">
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="bg-gradient-to-r from-[#E7DFD9] to-white text-[#A8415B] font-bold uppercase px-6 md:px-8 py-3 md:py-4 rounded-lg cursor-pointer hover:from-white hover:to-[#E7DFD9] transition-all duration-300 shadow-lg border border-white/20 text-sm md:text-base tracking-wide"
                onClick={() => viewProducts(category.id)}
              >
                View Products
              </motion.button>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-auto">
              <div className="flex gap-3 md:gap-4 items-center">
                <span className="text-white/95 text-xs md:text-sm font-medium bg-black/20 px-2 py-1 rounded-full">
                  {activeImage + 1}/{categories.length}
                </span>
                <div className="w-12 md:w-24 h-1.5 bg-white/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-white to-white/80 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${
                        ((activeImage + 1) / categories.length) * 100
                      }%`,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                </div>
              </div>

              <div className="flex gap-2 md:gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: 'rgba(255,255,255,0.25)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer p-2 md:p-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-200"
                  onClick={clickPrev}
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: 'rgba(255,255,255,0.25)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer p-2 md:p-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-200"
                  onClick={clickNext}
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ProductDescription;
