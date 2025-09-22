// src/components/home/GlobalPresence.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { MdLocationOn } from 'react-icons/md';

const regions = [
  {
    name: 'North America',
    countries: ['USA', 'Canada', 'Mexico'],
    x: '20%',
    y: '30%',
  },
  {
    name: 'Europe',
    countries: ['Germany', 'UK', 'France', 'Italy', 'Netherlands', 'Spain'],
    x: '48%',
    y: '25%',
  },
  {
    name: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Egypt'],
    x: '58%',
    y: '40%',
  },
  {
    name: 'Southeast Asia',
    countries: ['Thailand', 'Vietnam', 'Indonesia', 'Malaysia', 'Philippines'],
    x: '75%',
    y: '45%',
  },
  {
    name: 'Africa',
    countries: ['South Africa', 'Nigeria', 'Kenya', 'Egypt'],
    x: '48%',
    y: '50%',
  },
];

const GlobalPresence = () => {
  const mapRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    // Animate the location points
    if (pointsRef.current.length) {
      gsap.fromTo(
        pointsRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-20 bg-[#FDFCFB] overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-5 py-2 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 text-[#7C3AED] border border-[#7C3AED] rounded-full text-base font-bold shadow-md uppercase tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Our Global Reach
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            A Trusted Partner to Global Buyers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We proudly export to 7+ countries including the USA, Europe, Middle
            East, Africa, and Southeast Asia.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] bg-[#FDFCFB] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-blue-200 opacity-30 bg-map-pattern"></div>
            <img
              src="/worldmap.png"
              alt="World Map"
              className="w-full h-full object-contain opacity-30"
            />

            {/* World map points */}
            {regions.map((region, index) => (
              <div
                key={region.name}
                ref={(el) => (pointsRef.current[index] = el)}
                className="absolute"
                style={{ left: region.x, top: region.y }}
              >
                <div className="relative">
                  <div className="absolute -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-[#7C3AED] rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-[#7C3AED] rounded-full animate-ping absolute opacity-75"></div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="absolute -translate-x-1/2 mt-4 w-48 bg-white p-3 rounded-lg shadow-xl border border-blue-100"
                  >
                    <h4 className="font-semibold text-blue-800">
                      {region.name}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {region.countries.join(', ')}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Client Types We Serve
          </h3>

          <div className="flex items-center justify-center flex-wrap gap-4 mb-6">
            <span className="inline-block px-4 py-2 bg-white text-[#7C3AED] rounded-full text-sm font-medium shadow">
              Spice & Food Distributors
            </span>
            <span className="inline-block px-4 py-2 bg-white text-[#7C3AED] rounded-full text-sm font-medium shadow">
              Food Ingredient Importers
            </span>
            <span className="inline-block px-4 py-2 bg-white text-[#7C3AED] rounded-full text-sm font-medium shadow">
              Private Label Brands
            </span>
            <span className="inline-block px-4 py-2 bg-white text-[#7C3AED] rounded-full text-sm font-medium shadow">
              Packaged Food Companies
            </span>
            <span className="inline-block px-4 py-2 bg-white text-[#7C3AED] rounded-full text-sm font-medium shadow">
              Frozen Food Manufacturers
            </span>
          </div>
          <p className="text-gray-700 font-medium mb-6">
            Looking for bulk dried garlic flakes, dehydrated food bulk, or
            organic turmeric spice in large volumes? Let's talk.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="px-6 py-3 border-2 text-white font-medium rounded-lg shadow-md bg-[#7C3AED] transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence;
