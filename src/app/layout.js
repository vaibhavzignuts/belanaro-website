'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Suspense, useState } from 'react';
import Image from 'next/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  console.log(pathname, 'fjdhfjdh');

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    {
      path: '/about-us',
      label: 'About Us',
      subItems: [
        { path: '/about-us', label: 'Company Overview' },
        { path: '/about-us/workshop', label: 'Workshop' },
        { path: '/about-us/dealership', label: 'Dealership' },

        { path: '/about-us/why-belanaro', label: 'Why BELANARO?' },
      ],
    },
    { path: '/about-us/csr', label: 'CSR Activities' },
    { path: '/catalog', label: 'Catalog' },
    { path: '/quality-process', label: 'Quality & Process' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (itemPath) => {
    setOpenSubmenu(openSubmenu === itemPath ? null : itemPath);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sticky top-0 bg-[#FDFCFB]/90 backdrop-blur-sm z-30 shadow-md"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-10">
              {/* Logo */}
              <Link href="/">
                <Image
                  src={'/BELANARO.png'}
                  height={90}
                  width={190}
                  alt="Belanaro Logo"
                  className="h-12 w-auto md:h-auto hover:scale-105 transition-transform"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex gap-2">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.path ||
                    (item.subItems &&
                      item.subItems.some(
                        (subItem) => pathname === subItem.path
                      ));

                  return (
                    <div key={item.path} className="relative group">
                      <Link
                        href={item.path}
                        className={`relative px-3 py-2 mx-1 rounded-md transition-all duration-300 text-sm md:text-base font-medium flex items-center
                        ${
                          isActive
                            ? 'text-[#7C3AED] font-semibold'
                            : 'text-gray-700 hover:text-[#7C3AED]'
                        }`}
                      >
                        {item.label}
                        {item.subItems && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        )}
                        {isActive && !item.subItems && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7C3AED] rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>

                      {item.subItems && (
                        <div className="absolute left-0 mt-1 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="py-1">
                            {item.subItems.map((subItem) => {
                              const isSubActive = pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.path}
                                  href={subItem.path}
                                  className={`block px-4 py-2 text-sm ${
                                    isSubActive
                                      ? 'bg-gray-100 text-[#7C3AED] font-medium'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#7C3AED]'
                                  }`}
                                >
                                  {subItem.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  className="w-6 h-0.5 bg-gray-700 rounded-full origin-center transition-all duration-300"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  className="w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  className="w-6 h-0.5 bg-gray-700 rounded-full origin-center transition-all duration-300"
                />
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
                >
                  <nav className="max-w-7xl mx-auto px-4 py-4">
                    {navItems.map((item) => {
                      const isActive =
                        pathname === item.path ||
                        (item.subItems &&
                          item.subItems.some(
                            (subItem) => pathname === subItem.path
                          ));

                      return (
                        <div
                          key={item.path}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <Link
                              href={item.path}
                              onClick={
                                item.subItems ? undefined : closeMobileMenu
                              }
                              className={`flex-1 py-3 text-left font-medium transition-colors duration-200 ${
                                isActive
                                  ? 'text-[#7C3AED] font-semibold'
                                  : 'text-gray-700 hover:text-[#7C3AED]'
                              }`}
                            >
                              {item.label}
                            </Link>
                            {item.subItems && (
                              <button
                                onClick={() => toggleSubmenu(item.path)}
                                className="p-2 text-gray-500 hover:text-[#7C3AED] transition-colors duration-200"
                                aria-label={`Toggle ${item.label} submenu`}
                              >
                                <motion.svg
                                  animate={{
                                    rotate: openSubmenu === item.path ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.2 }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </motion.svg>
                              </button>
                            )}
                          </div>

                          {/* Mobile Submenu */}
                          <AnimatePresence>
                            {item.subItems && openSubmenu === item.path && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 pb-2 overflow-hidden"
                              >
                                {item.subItems.map((subItem) => {
                                  const isSubActive = pathname === subItem.path;
                                  return (
                                    <Link
                                      key={subItem.path}
                                      href={subItem.path}
                                      onClick={closeMobileMenu}
                                      className={`block py-2 text-sm transition-colors duration-200 ${
                                        isSubActive
                                          ? 'text-[#7C3AED] font-medium'
                                          : 'text-gray-600 hover:text-[#7C3AED]'
                                      }`}
                                    >
                                      {subItem.label}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          {children}
          {pathname !== '/products' && (
            <footer className="bg-gray-800 text-white pt-16 pb-8">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Belanaro Group</h4>
                    <p className="text-gray-300 mb-4">
                      Global leader in dehydrated vegetable exports, serving
                      food manufacturers worldwide with premium quality
                      products.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-300 hover:text-white">
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
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-300 hover:text-white">
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
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-300 hover:text-white">
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
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Products</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                          Dehydrated Onion
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                          Dehydrated Garlic
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                          Vegetable Powders
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                          Custom Solutions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                          Factory
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                          Dealership
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
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
                          className="mr-2 mt-1"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-gray-300">
                          Rajkot, Gujarat, India
                        </span>
                      </li>
                      <li className="flex items-start">
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
                          className="mr-2 mt-1"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span className="text-gray-300">+91 8735030126</span>
                      </li>
                      <li className="flex items-start">
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
                          className="mr-2 mt-1"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span className="text-gray-300">
                          jayom@belanaro.com
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-8">
                  <p className="text-center text-gray-400">
                    © {new Date().getFullYear()} Belanaro Group. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </footer>
          )}
        </Suspense>
      </body>
    </html>
  );
}
