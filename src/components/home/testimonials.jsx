import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonialScreenshots = [
  {
    id: 1,
    image:
      '/BELANARO FEEDBACKS/WhatsApp Image 2025-04-04 at 18.31.09_14c96b6c.jpg',
    alt: 'Client testimonial screenshot 1',
  },
  {
    id: 2,
    image:
      '/BELANARO FEEDBACKS/WhatsApp Image 2025-04-04 at 18.31.11_d6685892.jpg',
    alt: 'Client testimonial screenshot 2',
  },
  {
    id: 3,
    image:
      '/BELANARO FEEDBACKS/WhatsApp Image 2025-04-04 at 18.31.11_f5c1114b.jpg',
    alt: 'Client testimonial screenshot 3',
  },
  {
    id: 4,
    image:
      '/BELANARO FEEDBACKS/WhatsApp Image 2025-04-05 at 14.05.34_2512cfe6.jpg',
    alt: 'Client testimonial screenshot 4',
  },
  {
    id: 5,
    image:
      '/BELANARO FEEDBACKS/WhatsApp Image 2025-04-05 at 14.14.41_cf9047fd.jpg',
    alt: 'Client testimonial screenshot 5',
  },
];

const CompactTestimonials = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScroll = Math.max(0, testimonialScreenshots.length * 280 - 1000); // Approximate scroll limit

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 280));
  };

  const scrollRight = () => {
    setScrollPosition(Math.min(maxScroll, scrollPosition + 280));
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.span
            className="inline-block px-5 py-2 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 text-[#7C3AED] border border-[#7C3AED] rounded-full text-base font-bold shadow-md uppercase tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Client Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#7C3AED] mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from our satisfied clients across the globe
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6">
            {/* Gallery with Horizontal Scroll */}
            <div className="relative">
              {/* Scroll Navigation Buttons */}
              {maxScroll > 0 && (
                <>
                  <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
                    disabled={scrollPosition === 0}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>

                  <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
                    disabled={scrollPosition >= maxScroll}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </>
              )}

              {/* Screenshots Gallery */}
              <div className="overflow-hidden mx-8">
                <div
                  className="flex gap-4 transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${scrollPosition}px)` }}
                >
                  {testimonialScreenshots.map((screenshot, index) => (
                    <div
                      key={screenshot.id}
                      className="flex-shrink-0 group cursor-pointer"
                      // onClick={() => setSelectedImage(screenshot)}
                    >
                      {/* Phone Frame */}
                      <div className="relative">
                        <div className="bg-black rounded-3xl p-2 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                          <div className="bg-white rounded-2xl overflow-hidden w-64 aspect-[9/16] relative">
                            <img
                              src={screenshot.image}
                              alt={screenshot.alt}
                              className="w-full h-full object-cover"
                            />

                            {/* WhatsApp-style Header */}
                            <div className="absolute top-0 left-0 right-0 bg-green-600 text-white p-2 text-xs flex items-center">
                              <div className="w-6 h-6 bg-white rounded-full mr-2 flex items-center justify-center">
                                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                              </div>
                              <span className="font-medium truncate">
                                {screenshot.name}
                              </span>
                            </div>

                            {/* Hover Overlay */}
                            {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div> */}
                          </div>
                        </div>

                        {/* Client Info Below Phone */}
                        <div className="text-center mt-3 px-2">
                          <h4 className="font-semibold text-gray-800 text-sm truncate">
                            {screenshot.name}
                          </h4>
                          <p className="text-gray-600 text-xs truncate">
                            {screenshot.company}
                          </p>
                          <div className="flex justify-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-3 h-3 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Stats */}
            <div className="flex justify-center items-center gap-8 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                {/* <div className="text-2xl font-bold text-blue-600">
                  {testimonialScreenshots.length}+
                </div> */}
                {/* <div className="text-sm text-gray-600">Happy Clients</div> */}
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-sm">
            <div className="bg-black rounded-3xl p-2 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden aspect-[9/16] relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bg-green-600 text-white p-2 text-xs flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full mr-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                  <span className="font-medium">{selectedImage.name}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompactTestimonials;
