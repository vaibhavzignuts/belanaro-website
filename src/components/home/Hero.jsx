'use client';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FDFCFB] overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-purple-100 to-transparent opacity-30 rounded-bl-[200px]"></div>

      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-[#7C3AED] border border-[#7C3AED] rounded-full text-sm font-semibold uppercase tracking-wide">
              ⭐ Premium Quality
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Global Leaders in{' '}
              <span className="text-[#7C3AED]">Dehydrated</span> Vegetables &
              Spices
            </h1>

            <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
              Supplying the world with premium quality dehydrated onions,
              garlic, and vegetables from the heart of India. Trusted by
              importers in 30+ countries.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-[#7C3AED] text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-200"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white hover:bg-gray-50 text-[#7C3AED] font-medium rounded-lg border border-purple-200 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Become a Dealer
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 p-8 shadow-2xl">
              <img
                src="/hero_image.jpg"
                alt="Dehydrated Vegetables & Spices"
                className="w-full h-full object-contain rounded-xl"
              />

              {/* Simple static badges */}
              <div className="absolute top-4 right-4 bg-[#7C3AED] rounded-full text-white px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold">100% Natural</span>
              </div>

              <div className="absolute bottom-4 left-4 bg-[#7C3AED] rounded-full text-white px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold">Non-GMO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
