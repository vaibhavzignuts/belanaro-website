'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * FactoryPage component renders a detailed view of the workshop
 * and manufacturing facility for dehydrated food products.
 *
 * The page includes several sections:
 * - A hero section with an image and description of the workshop.
 * - Breadcrumb navigation for site hierarchy.
 * - Details about the state-of-the-art manufacturing facility.
 * - Overview of the production process from raw materials to finished goods.
 * - Information on the advanced dehydration technology used.
 * - Insights into quality control and testing procedures.
 * - Description of sustainable practices implemented for a greener future.
 * - Final product presentation ready for shipment.
 * - A call-to-action section for business partnerships.
 *
 * The component utilizes Framer Motion for animations
 * and Next.js Image component for optimized image loading.
 */

/*******  7063b4a7-7171-4fce-b2df-7300feff2dac  *******/ const FactoryPage =
  () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    useEffect(() => {
      if (isInView) {
        controls.start('visible');
      }
    }, [controls, isInView]);

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 },
      },
    };

    const fadeInUp = {
      hidden: { y: 60, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      },
    };

    return (
      <div className="bg-[#FDFCFB] min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src="/workshop.jpg"
            alt="Belanaro Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 lg:px-32"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Workshop
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Premium Dehydrated Food Production Facility: Innovation, Quality,
              and Efficiency
            </p>
          </motion.div>
        </div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-[#FDFCFB] py-4 px-6 md:px-20 lg:px-32"
        >
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#7C3AED]">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#7C3AED]">Workshop</span>
          </div>
        </motion.div>

        {/* State-of-the-Art Manufacturing Facility Section */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="py-16 px-6 md:px-20 lg:px-32"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative inline-block"
          >
            Our State-of-the-Art Manufacturing Facility
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#7C3AED] -mb-2"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/selected-plants/IMG_5722.jpg"
                  alt="Aerial view of the factory"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border-l-4 border-[#7C3AED]">
                <p className="text-gray-600">
                  Welcome to our advanced <strong>workshop</strong> where
                  precision, quality, and innovation come together to create the
                  finest <strong>dehydrated vegetables</strong>,{' '}
                  <strong>dehydrated garlic</strong>, and{' '}
                  <strong>onion products</strong>. At <strong>BELANARO</strong>,
                  our manufacturing facility is equipped with cutting-edge
                  technology to deliver premium products consistently.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* From Raw Materials to Finished Goods */}
        <section className="py-16 px-6 md:px-20 lg:px-32 bg-[#FDFCFB]/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                From Raw Materials to Finished Goods
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From <strong>sourcing high-quality raw ingredients</strong> to
                producing premium <strong>dehydrated garlic flakes</strong>, our
                streamlined production process ensures that every step is
                completed with the utmost care and attention to detail.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5757.jpg"
                  alt="Raw materials entering the production line"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-lg">
                    Raw Materials
                  </h3>
                  <p className="text-white/80 text-sm">
                    Quality sourcing for premium products
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/b74cd2a8-8f75-4b1f-840f-aa5c3d013e39.jpg"
                  alt="Dehydration process of onion flakes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-lg">
                    Dehydration Process
                  </h3>
                  <p className="text-white/80 text-sm">
                    Preserving flavor and nutrients
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_8651.jpg"
                  alt="Final packaging of dehydrated garlic granules"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-lg">
                    Final Packaging
                  </h3>
                  <p className="text-white/80 text-sm">
                    Ensuring freshness and quality
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Advanced Dehydration Technology */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-16 px-6 md:px-20 lg:px-32"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative inline-block"
          >
            Advanced Dehydration Technology
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#7C3AED] -mb-2"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border-l-4 border-[#7C3AED]">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Fluid Bed Dryers
                </h3>
                <p className="text-gray-600">
                  Our facility uses <strong>fluid bed dryers</strong> to
                  preserve the natural flavor and nutrients of every{' '}
                  <strong>dehydrated food product</strong>, ensuring premium
                  quality <strong>dehydrated onion flakes</strong>.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border-l-4 border-[#7C3AED]">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Belt Dryers
                </h3>
                <p className="text-gray-600">
                  Our <strong>belt dryers</strong> are essential to maintaining
                  the high standards our customers expect from our{' '}
                  <strong>dehydrated garlic granules</strong>.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border-l-4 border-[#7C3AED]">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Granulation Technology
                </h3>
                <p className="text-gray-600">
                  Advanced granulation machines create perfectly sized{' '}
                  <strong>dehydrated garlic granules</strong> and{' '}
                  <strong>dehydrated vegetable flakes</strong> for various
                  industrial applications.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/workshop/factory-4.jpeg"
                  alt="Advanced dehydration technology"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Quality Control & Testing */}
        <section className="py-16 px-6 md:px-20 lg:px-32 bg-[#FDFCFB]/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Workshop Photos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We conduct rigorous testing to ensure every product, from{' '}
                <strong>dehydrated onions</strong> to{' '}
                <strong>dehydrated garlic powder</strong>, meets international
                quality standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5773.jpg"
                  alt="Quality control lab"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/e723cfda-12eb-4d23-b817-fc8c45bdb334.jpg"
                  alt="Moisture content analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5728.jpg"
                  alt="Moisture content analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5731.jpg"
                  alt="Moisture content analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5734.jpg"
                  alt="Moisture content analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5757.jpg"
                  alt="Moisture content analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5770.jpg"
                  alt="Moisture content analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5780.jpg"
                  alt="Moisture content analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_5780.jpg"
                  alt="Moisture content analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Sustainable Practices Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-16 px-6 md:px-20 lg:px-32"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative inline-block"
          >
            Sustainable Practices for a Greener Future
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#7C3AED] -mb-2"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#7C3AED]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                Eco-Friendly Packaging
              </h3>
              <p className="text-gray-600 text-center">
                Sustainable packaging solutions for{' '}
                <strong>dehydrated garlic products</strong> that minimize
                environmental impact.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#7C3AED]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                Water Conservation
              </h3>
              <p className="text-gray-600 text-center">
                Advanced water-saving technologies throughout our production
                process of <strong>dehydrated vegetables</strong>.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#7C3AED]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                Energy Efficiency
              </h3>
              <p className="text-gray-600 text-center">
                Optimization of energy usage throughout our{' '}
                <strong>dehydrated food production</strong> processes.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* The Finished Product Section */}
        <section className="py-16 px-6 md:px-20 lg:px-32 bg-[#FDFCFB]/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Finished Product – Ready for Shipment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Once the <strong>dehydrated vegetables</strong> are produced,
                they are carefully packaged and stored in{' '}
                <strong>climate-controlled</strong> conditions to ensure they
                reach you fresh and intact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/workshop/factory-1.jpeg"
                  alt="Finished products ready for shipment"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-lg">
                    Ready for Shipment
                  </h3>
                  <p className="text-white/80 text-sm">
                    Quality products for global markets
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/selected-plants/IMG_8651.jpg"
                  alt="Packaging line for dehydrated vegetable flakes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-lg">
                    Packaging Line
                  </h3>
                  <p className="text-white/80 text-sm">
                    Ensuring product integrity
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-20 px-6 md:px-20 lg:px-32 bg-[#7C3AED] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/pattern-bg.jpg"
              alt="Pattern Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Scaling Your Business with Premium Dehydrated Foods
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with <strong>BELANARO</strong> for consistent,
              high-quality <strong>dehydrated food</strong> products, including{' '}
              <strong>dehydrated garlic</strong>, <strong>onion flakes</strong>,
              and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:yash@belanaro.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#7C3AED] py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold shadow-lg flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email: yash@belanaro.com
              </motion.a>
              <motion.a
                href="tel:+919909479990"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300 font-bold flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call: +91 99094 79990
              </motion.a>
            </div>
            <motion.a
              href="https://www.belanaro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline mt-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Visit our website: www.belanaro.com
            </motion.a>
          </div>
        </motion.section>
      </div>
    );
  };

export default FactoryPage;
