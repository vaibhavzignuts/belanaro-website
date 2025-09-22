import React, { useState } from 'react';
import {
  FaCheckCircle,
  FaTachometerAlt,
  FaFlask,
  FaFileAlt,
  FaTruck,
  FaArrowRight,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaCheckCircle className="text-3xl text-[#7C3AED]" />,
    title: 'Hygienic & HACCP-certified Facility',
    description:
      'Our production facilities maintain the highest standards of hygiene and food safety certifications.',
    gradient: 'from-emerald-50 to-emerald-100',
    hoverGradient: 'from-emerald-100 to-emerald-200',
  },
  {
    icon: <FaTachometerAlt className="text-3xl text-[#7C3AED]" />,
    title: 'State-of-the-art Dehydration Technology',
    description:
      'Using advanced dehydration technology to preserve flavor, color, and nutritional value of our products.',
    gradient: 'from-blue-50 to-blue-100',
    hoverGradient: 'from-blue-100 to-blue-200',
  },
  {
    icon: <FaFlask className="text-3xl text-[#7C3AED]" />,
    title: 'In-house Lab Testing for Every Batch',
    description:
      'Comprehensive testing protocols ensure consistent quality and safety for all our dehydrated products.',
    gradient: 'from-purple-50 to-purple-100',
    hoverGradient: 'from-purple-100 to-purple-200',
  },
  {
    icon: <FaFileAlt className="text-3xl text-[#7C3AED]" />,
    title: 'Export-Ready Documentation with Traceability',
    description:
      'Complete and transparent documentation with full traceability for smooth international trade.',
    gradient: 'from-amber-50 to-amber-100',
    hoverGradient: 'from-amber-100 to-amber-200',
  },
  {
    icon: <FaTruck className="text-3xl text-[#7C3AED]" />,
    title: 'Cold Chain Logistics for Freshness',
    description:
      'Maintaining optimal temperature conditions throughout the supply chain for maximum product freshness.',
    gradient: 'from-teal-50 to-teal-100',
    hoverGradient: 'from-teal-100 to-teal-200',
  },
];

const WhyChoose = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20  bg-[#FDFCFB]  relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96  from-[#7C3AED]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80  from-[#7C3AED]/15 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 left-16 w-5 h-5 bg-[#7C3AED]/20 rotate-45 animate-pulse"></div>
      <div
        className="absolute top-20 right-32 w-4 h-4 bg-[#7C3AED]/15 rounded-full animate-bounce"
        style={{ animationDelay: '1.5s' }}
      ></div>
      <div
        className="absolute bottom-32 left-24 w-3 h-3 bg-[#7C3AED]/25 rotate-45 animate-pulse"
        style={{ animationDelay: '2.5s' }}
      ></div>
      <div
        className="absolute bottom-20 right-16 w-6 h-6 bg-[#7C3AED]/10 rounded-full animate-bounce"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 text-[#7C3AED] border border-[#7C3AED]/30 rounded-full text-base font-bold shadow-lg uppercase tracking-wide backdrop-blur-sm">
            Quality Commitment
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Uncompromising on
            <span className="text-[#7C3AED] block md:inline md:ml-3">
              Quality
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our process is built on precision, hygiene, and quality — from raw
            material procurement to finished product delivery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative h-full transition-all duration-500 ease-out transform hover:-translate-y-2 ${
                hoveredIndex === index ? 'z-10' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div
                className={`relative h-full bg-gradient-to-br ${feature.gradient} group-hover:bg-gradient-to-br group-hover:${feature.hoverGradient} rounded-2xl border border-white/50 shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm`}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-[#7C3AED] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  {/* Explore Button */}
                  <button className="flex items-center gap-2 text-[#7C3AED] font-semibold text-sm group-hover:gap-3 transition-all duration-300 self-start">
                    Explore
                    <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED] to-[#7C3AED]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group relative bg-[#7C3AED] hover:bg-[#8d3650] text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Explore Our Quality & Process
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
