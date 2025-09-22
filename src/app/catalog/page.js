'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Catalog = () => {
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

  const productCategories = [
    {
      title: 'Dehydrated Onion Products',
      description:
        'Premium dehydrated onion powder, flakes, minced and granules.',
      image: '/Pink-Onion-Powder.jpg',
    },
    {
      title: 'Dehydrated Garlic Products',
      description:
        'High-quality garlic powder, flakes and granules with superior flavor.',
      image: '/Dehydrated_Garlic_Granules.jpg',
    },
    {
      title: 'Vegetable Powders',
      description:
        '100% pure & nutrient-rich tomato, carrot, ginger, spinach, and beetroot powders.',
      image: '/Dehydrated_White_Onion_Chopped.jpg',
    },
  ];

  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* Header with parallax effect */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/product_catalog.avif"
            alt="Belanaro product catalog"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Explore Our Product Catalogue
          </h2>
          <div className="w-20 h-1 bg-[#7C3AED] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At <strong>BELANARO</strong>, we specialize in delivering
            top-quality <strong>dehydrated food</strong> products including{' '}
            <strong>dehydrated garlic flakes</strong>,{' '}
            <strong>onion powder</strong>,{' '}
            <strong>dehydrated vegetables</strong>, and more. Our products are
            ideal for businesses looking to source{' '}
            <strong>bulk dried vegetables</strong>,{' '}
            <strong>dehydrated garlic granules</strong>, and other high-quality
            dehydrated food ingredients.
          </p>
        </motion.div>

        {/* Download Catalog Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-lg mb-16"
        >
          <div className="h-64 relative">
            <Image
              src="/product_catalog_2.jpeg"
              alt="Product Catalogue"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Download Our Catalogue
            </h3>
            <p className="text-gray-600 mb-6">
              To make it easier for you to access all our product information,
              simply click the link below to download our comprehensive{' '}
              <strong>product catalogue</strong>. The catalogue includes
              detailed specifications, product benefits, and applications,
              helping you make informed decisions for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7C3AED] text-white py-3 px-8 rounded-lg hover:bg-[#873548] transition-colors duration-300 shadow-md flex items-center"
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Product Catalogue
            </motion.button>
          </div>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Product Range
          </h2>
          <div className="w-20 h-1 bg-[#7C3AED] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our comprehensive selection of premium dehydrated vegetables
            that cater to food manufacturers, wholesalers, retailers, and global
            importers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-6">
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Link
                  href={`/products/${category.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-[#7C3AED] font-medium flex items-center cursor-pointer"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Get in Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl overflow-hidden shadow-lg mb-16"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch with Us
            </h3>
            <p className="text-gray-600 mb-6">
              We are always ready to assist you with any inquiries. If you have
              questions about our <strong>dehydrated garlic</strong>,{' '}
              <strong>onion flakes</strong>, or any other products, feel free to
              reach out:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
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
                  className="mr-3 text-[#7C3AED]"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>
                  <strong>Email</strong>: yash@belanaro.com
                </span>
              </div>
              <div className="flex items-center text-gray-700">
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
                  className="mr-3 text-[#7C3AED]"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>
                  <strong>WhatsApp</strong>: +91 99094 79990
                </span>
              </div>
              <div className="flex items-center text-gray-700">
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
                  className="mr-3 text-[#7C3AED]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>
                  <strong>Website</strong>: www.belanaro.com
                </span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7C3AED] text-white py-3 px-8 rounded-lg hover:bg-[#873548] transition-colors duration-300 shadow-md"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Explore More Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Explore More
          </h2>
          <div className="w-20 h-1 bg-[#7C3AED] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Check out other sections of our website to learn more about our
            products and services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 text-[#7C3AED]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Our Workshop/Factory
            </h3>
            <p className="text-gray-600 mb-4">
              Discover where we create the finest dehydrated products.
            </p>
            <Link href="/workshop">
              <motion.span
                whileHover={{ x: 5 }}
                className="text-[#7C3AED] font-medium flex items-center cursor-pointer"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 text-[#7C3AED]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Quality & Process
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how we ensure consistent, high-quality products.
            </p>
            <Link href="/quality">
              <motion.span
                whileHover={{ x: 5 }}
                className="text-[#7C3AED] font-medium flex items-center cursor-pointer"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 text-[#7C3AED]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              Reach out to us for any business inquiries.
            </p>
            <Link href="/contact">
              <motion.span
                whileHover={{ x: 5 }}
                className="text-[#7C3AED] font-medium flex items-center cursor-pointer"
              >
                Get in Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#7C3AED]/10 rounded-2xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Need Additional Information?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Looking for specific product details or have questions about our
            dehydrated food products? Our team is here to help with all your
            inquiries.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7C3AED] text-white py-3 px-8 rounded-lg hover:bg-[#873548] transition-colors duration-300 shadow-lg"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Catalog;
