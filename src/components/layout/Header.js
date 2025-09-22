'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set active link based on current path
    setActiveLink(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Factory', path: '/factory' },
    { name: 'Dealership', path: '/dealership' },
    { name: 'Global Presence', path: '/global-presence' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          <Link href="/" className="flex items-center group">
            <motion.span
              className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Belanaro
            </motion.span>
            <motion.span
              className="text-3xl font-light bg-gradient-to-r from-accent-500 to-accent-400 bg-clip-text text-transparent ml-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Group
            </motion.span>
            <motion.div
              className="w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300 mt-0.5"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, type: 'spring' }}
              className="relative px-2"
            >
              <Link href={link.path}>
                <motion.div
                  className="relative py-2 px-3 rounded-md font-medium z-10"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span
                    className={`relative z-10 ${
                      activeLink === link.path
                        ? 'text-blue-800'
                        : isScrolled
                        ? 'text-gray-700'
                        : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Active/Hover Background */}
                  <motion.div
                    className={`absolute inset-0 rounded-md ${
                      activeLink === link.path
                        ? 'bg-gradient-to-r from-primary-600 to-accent-500'
                        : 'bg-transparent'
                    }`}
                    initial={false}
                    whileHover={
                      activeLink !== link.path
                        ? {
                            background:
                              'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))',
                          }
                        : {}
                    }
                    layoutId="activeNavBackground"
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button with animation */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/90 shadow-md text-gray-800 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu with improved animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        className={`py-3 px-4 font-medium rounded-lg flex items-center ${
                          activeLink === link.path
                            ? 'bg-gradient-to-r from-primary-600/90 to-accent-500/90 text-white'
                            : 'text-gray-800 hover:bg-gray-100'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.name}
                        {activeLink === link.path && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
