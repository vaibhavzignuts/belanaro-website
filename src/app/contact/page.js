'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import gsap from 'gsap';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'business',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const pointsRef = useRef([]);

  const regions = [
    {
      name: 'GUJARAT',
      countries: ['Rajkot'],
      x: '20%',
      y: '30%',
    },
    {
      name: 'GuJARAT',
      countries: ['Bhavnagar'],
      x: '48%',
      y: '25%',
    },
    {
      name: 'GUARAT',
      countries: ['Mahuva'],
      x: '58%',
      y: '40%',
    },
  ];

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const mapRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    // Simulate form submission
    try {
      // In a real implementation, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus({ submitting: false, submitted: true, error: false });
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'business',
        message: '',
      });
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#f5f3f0] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <Image
          src="/contanct.jpeg"
          alt="Contact Belanaro Group"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Connect with India&apos;s leading dehydrated food supplier
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-[#A8415B]/10 flex items-center justify-center rounded-full mb-4">
              <MapPin size={24} className="text-[#A8415B]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Our Location
            </h3>
            <p className="text-gray-600">
              Belanaro Group
              <br />
              Rajkot, Gujarat
              <br />
              India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-[#A8415B]/10 flex items-center justify-center rounded-full mb-4">
              <Phone size={24} className="text-[#A8415B]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+91 8735030126</p>
            <a
              href="tel:+918735030126"
              className="mt-4 text-[#A8415B] font-medium hover:underline"
            >
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-[#A8415B]/10 flex items-center justify-center rounded-full mb-4">
              <Mail size={24} className="text-[#A8415B]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">jayom@belanaro.com</p>
            <a
              href="mailto:jayom@belanaro.com"
              className="mt-4 text-[#A8415B] font-medium hover:underline"
            >
              Send Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-[#A8415B]/10 flex items-center justify-center rounded-full mb-4">
              <Globe size={24} className="text-[#A8415B]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Website</h3>
            <p className="text-gray-600">www.belanaro.com</p>
            <a
              href="https://www.belanaro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-[#A8415B] font-medium hover:underline"
            >
              Visit Site
            </a>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Let&apos;s Grow Together
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mb-6"></div>
            <p className="text-gray-600 mb-8">
              At Belanaro Group, we are committed to providing high-quality
              dehydrated onion, garlic, and vegetable powders to importers,
              wholesalers, and food manufacturers worldwide. Whether you need
              bulk orders, dealership opportunities, or customized solutions, we
              are here to help!
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Why Contact Belanaro Group?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 mt-1">✓</span>
                  <p className="text-gray-600">
                    Direct Manufacturer – Best Prices & Quality Assurance
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 mt-1">✓</span>
                  <p className="text-gray-600">
                    Worldwide Shipping – Smooth, Hassle-Free Logistics
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 mt-1">✓</span>
                  <p className="text-gray-600">
                    Custom Packaging & Branding Solutions
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 mt-1">✓</span>
                  <p className="text-gray-600">
                    24/7 Customer Support – Quick Response to All Queries
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-[#A8415B]/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Connect
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <a
                  href="https://wa.me/918735030126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M11.997 0h.006C5.379 0 0 5.38 0 12c0 2.613.84 5.031 2.263 7l-1.481 4.415 4.548-1.447c1.877 1.232 4.118 1.947 6.536 1.99h.006c6.618 0 11.997-5.38 11.997-12C23.869 5.38 18.613 0 11.997 0zm6.957 17.004c-.278.794-1.637 1.452-2.675 1.647-.681.116-1.57.151-2.567-.159-.994-.31-1.922-.64-2.748-1.034-3.139-1.601-5.147-5.286-5.302-5.528-.152-.242-1.258-1.67-1.258-3.183 0-1.514.799-2.258 1.079-2.563.28-.305.613-.38.82-.38.207 0 .415.002.594.013.178.01.432-.068.675.514.244.587.832 2.034.905 2.18.074.149.123.322.025.52-.1.197-.149.317-.273.496-.124.178-.261.375-.373.502-.124.14-.254.287-.11.564.147.277.652 1.181 1.401 1.918 1.004.973 1.839 1.28 2.103 1.427.264.148.414.124.569-.062.155-.186.664-.767.842-1.031.18-.264.36-.223.608-.134.247.089 1.564.74 1.834.874.27.137.449.202.516.315.067.11.067.644-.198 1.27z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:jayom@belanaro.com"
                  className="flex items-center bg-[#A8415B] text-white px-4 py-2 rounded-lg hover:bg-[#8a3349] transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  Email
                </a>
              </div>
              <p className="text-gray-600 text-sm">
                Expect a response within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Thank you for your message! We&apos;ll get back to you soon.
                  </span>
                </motion.div>
              ) : formStatus.error ? (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Oops! Something went wrong. Please try again.</span>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="name"
                    >
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8415B] focus:border-transparent"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8415B] focus:border-transparent"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8415B] focus:border-transparent"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="company"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8415B] focus:border-transparent"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="inquiryType"
                  >
                    Inquiry Type*
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8415B] focus:border-transparent"
                    required
                  >
                    <option value="business">Business Inquiry</option>
                    <option value="dealership">Dealership Opportunity</option>
                    <option value="quotation">Request for Quotation</option>
                    <option value="product">Product Information</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8415B] focus:border-transparent"
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`flex items-center justify-center w-full md:w-auto px-8 py-3 rounded-lg text-white font-medium transition-colors ${
                      formStatus.submitting
                        ? 'bg-gray-400'
                        : 'bg-[#A8415B] hover:bg-[#8a3349]'
                    }`}
                  >
                    {formStatus.submitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative mt-16">
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[16/9] bg-[#e7dfd9] rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-blue-200 opacity-30 bg-map-pattern"></div>
          <Image
            src="/worldmap.png"
            alt="World Map"
            width={600}
            height={400}
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
                  <div className="w-4 h-4 bg-[#A8415B] rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#A8415B] rounded-full animate-ping absolute opacity-75"></div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="absolute -translate-x-1/2 mt-4 w-48 bg-white p-3 rounded-lg shadow-xl border border-blue-100"
                >
                  <h4 className="font-semibold text-blue-800">{region.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {region.countries.join(', ')}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ContactPage;
