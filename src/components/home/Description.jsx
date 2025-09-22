import React from 'react';
import left from '../../../public/left.svg';
import right from '../../../public/right.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Description = ({
  categories,
  activeImage,
  clickNext,
  clickPrev,
  viewProducts,
}) => {
  return (
    <div className="w-full bg-[#A8415B] h-full relative">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline text-white">
        Products
      </div>

      {categories.map((category, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? 'block w-full h-full py-8 md:py-20 px-6 md:px-20 text-left'
              : 'hidden'
          }`}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: 'easeOut',
              duration: 0.8,
            }}
            className="w-full"
          >
            <h2 className="py-6 md:py-16 text-3xl md:text-5xl text-white font-extrabold">
              {category.title}
            </h2>
            <p className="leading-relaxed font-medium text-sm md:text-base tracking-wide max-h-60 md:h-40 italic text-white overflow-y-auto">
              {category.description}
            </p>
          </motion.div>

          <motion.button
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="bg-[#E7DFD9] text-black uppercase px-6 py-3 rounded-md mt-8 md:my-10 cursor-pointer hover:bg-white"
            onClick={() => viewProducts(category.id)}
          >
            View Products
          </motion.button>

          {/* Navigation Controls */}
          <div className="flex justify-between mt-12 md:mt-0">
            <div className="flex gap-4 items-center">
              <span className="text-white text-sm">
                {activeImage + 1}/{categories.length}
              </span>
              <div className="w-16 md:w-24 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-500 ease-in-out"
                  style={{
                    width: `${((activeImage + 1) / categories.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer p-2 bg-white/10 rounded-full"
                onClick={clickPrev}
              >
                <Image src={left} alt="Previous" width={24} height={24} />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer p-2 bg-white/10 rounded-full"
                onClick={clickNext}
              >
                <Image src={right} alt="Next" width={24} height={24} />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
