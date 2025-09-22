'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const QualityProcess = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const processSteps = [
    {
      title: 'Raw Material Procurement',
      description:
        'Direct sourcing from certified farmers who grow dehydrated onions, garlic, and other vegetables. Only fully matured, pesticide-free crops selected.',
      icon: '✅',
    },
    {
      title: 'Cleaning & Sorting',
      description:
        'Multi-stage dry and wet cleaning. Removal of dirt, stones, and foreign particles. Optical and manual sorting for uniformity.',
      icon: '🧼',
    },
    {
      title: 'Peeling & Cutting',
      description:
        'Precision peeling and cutting based on final product type (flakes, kibbled, minced, chopped, granules, or powder).',
      icon: '🧊',
    },
    {
      title: 'Dehydration',
      description:
        'Low-temperature, controlled drying to preserve color, taste, and nutrients. Using continuous belt dryers, batch dryers, and fluid bed systems.',
      icon: '🔥',
    },
    {
      title: 'Sieving & Milling',
      description:
        'Size grading using food-grade sieves. Grinding for products like dehydrated garlic granules in dust-free environments.',
      icon: '🧪',
    },
    {
      title: 'Metal Detection & Quality Filtering',
      description:
        'Advanced metal detection and X-ray inspection to ensure products are free from contamination. Final QC inspection.',
      icon: '🧴',
    },
    {
      title: 'Packing & Storage',
      description:
        'Vacuum-sealed or nitrogen-flushed packaging to maintain freshness. Stored in climate-controlled warehouses.',
      icon: '📦',
    },
  ];

  const qualityPillars = [
    {
      title: 'HACCP-Compliant Facility',
      description:
        'Our facilities follow Hazard Analysis Critical Control Points protocols for dehydrated food manufacturing.',
    },
    {
      title: 'In-house Testing Laboratory',
      description:
        'Comprehensive microbiological testing and pesticide residue analysis for all dehydrated products.',
    },
    {
      title: 'Multiple Certifications',
      description:
        'USDA Organic, FSSAI, and ISO 22000 Certified Practices ensure only the highest standards.',
    },
    {
      title: 'Special Dietary Standards',
      description:
        'Non-GMO, Vegan-Friendly, and Gluten-Free standards are met for all dehydrated vegetables.',
    },
    {
      title: 'Complete Traceability',
      description:
        'Batch traceability for complete transparency in all our dehydrated products.',
    },
    {
      title: 'Regular Quality Testing',
      description:
        'Random sampling for organoleptic, microbial, and aflatoxin testing for safety assurance.',
    },
  ];

  const certifications = [
    {
      name: 'FSSAI Certified',
      description:
        'Meeting Food Safety and Standards Authority of India regulations',
      logo: '/cert-fssai.png',
    },
    {
      name: 'HACCP Certified',
      description:
        'Hazard Analysis Critical Control Points for food safety management',
      logo: '/cert-haccp.png',
    },
    {
      name: 'ISO 22000',
      description: 'International standards for food safety management systems',
      logo: '/cert-iso.png',
    },
    {
      name: 'USDA Organic',
      description: 'Certified organic processes and ingredients',
      logo: '/cert-usda.png',
    },
  ];

  return (
    <div className="bg-[#f5f3f0] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/quality-6813293_640.jpg"
            alt="Quality control in food processing"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Quality & Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            From Farm to Fork — Every Flake, Every Granule, Perfected by
            Precision
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Dehydration Process Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Dehydration Process – The BELANARO Way
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At BELANARO, dehydration is not just a process — it is a craft
              perfected with precision. Every dehydrated onion bulb and
              dehydrated garlic clove undergoes a meticulously monitored journey
              to transform into flavorful, shelf-stable products that importers
              across the globe trust. We blend traditional expertise with modern
              dehydration technology, ensuring every product retains maximum
              nutrition, natural flavor, and color.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🔁 A Seamless, Scientific & Scalable Dehydrated Food Manufacturing
              Process
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Consistency, Cleanliness, and Commitment – That is how BELANARO
              brings the best dehydrated vegetables and dehydrated garlic to the
              world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#f5f3f0] rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-3xl mb-4 text-[#A8415B]">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quality Control Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Quality Control at Every Touchpoint
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Every product batch undergoes stringent, multi-layered quality
              checks from raw procurement to final dispatch.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🔍 Zero Defect Mission, Backed by Multi-Layered QC for Dehydrated
              Foods
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {qualityPillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f5f3f0] rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{pillar.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-xl font-bold text-[#A8415B]">
                BELANARO = Safe. Clean. Certified.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Certifications & Safety Standards
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We meet and exceed national and global food safety norms.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🏅 Certifications That Back Our Claims of Quality Dehydrated Foods
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f5f3f0] rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300"
                >
                  {/* <div className="h-20 relative mb-4 flex items-center justify-center">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div> */}
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>

            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Compliant with European, USFDA, and Middle East market standards
              </li>
              <li>
                All export documents are ready: COA, MSDS, Form A, Health
                Certificate, and more
              </li>
            </ul>
          </div>

          {/* Business Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 bg-white rounded-xl p-10 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Why Our Process Matters to You
            </h2>
            <h3 className="text-xl font-bold text-center text-gray-700 mb-8">
              💼 For Importers, This Means Peace of Mind
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start bg-[#f5f3f0] p-6 rounded-lg">
                <span className="text-2xl text-[#A8415B] mr-4">🔄</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Consistent Batches
                  </h4>
                  <p className="text-gray-600">
                    Consistent batches of dehydrated food = repeat buyers for
                    dehydrated onion flakes and dehydrated garlic powder.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-[#f5f3f0] p-6 rounded-lg">
                <span className="text-2xl text-[#A8415B] mr-4">📉</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Higher Margins
                  </h4>
                  <p className="text-gray-600">
                    Lower spoilage = higher margins on bulk dehydrated
                    vegetables and dehydrated food products.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-[#f5f3f0] p-6 rounded-lg">
                <span className="text-2xl text-[#A8415B] mr-4">🛃</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Faster Delivery
                  </h4>
                  <p className="text-gray-600">
                    Smooth customs clearance = faster delivery of dehydrated
                    food ingredients.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-[#f5f3f0] p-6 rounded-lg">
                <span className="text-2xl text-[#A8415B] mr-4">🌎</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Universal Market Access
                  </h4>
                  <p className="text-gray-600">
                    Globally acceptable specs = universal market access for
                    dehydrated vegetable suppliers and dehydrated garlic
                    exporters.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-700 mt-8 font-medium">
              We are not just selling dehydrated foods — we are selling
              reliability, quality, and long-term business success.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#A8415B] rounded-2xl p-10 md:p-16 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              🌱 Ready to Partner with a Certified, Process-Driven Manufacturer
              of Dehydrated Foods?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let BELANARO be your backend partner for clean, world-class,
              ready-to-ship dehydrated vegetables and dehydrated garlic. Reach
              out now to see how we can help you scale — the smart, clean, and
              reliable way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:yash@belanaro.com"
                className="bg-white hover:bg-gray-100 text-[#A8415B] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Email Us: yash@belanaro.com
              </a>
              <a
                href="https://wa.me/919909479990"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                WhatsApp: +91 99094 79990
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://www.belanaro.com"
                className="text-white/90 hover:text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.belanaro.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QualityProcess;
