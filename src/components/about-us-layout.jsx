'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

export default function AboutUsLayout({ children }) {
  const pathname = usePathname();

  const aboutUsPages = [
    { path: '/about-us', label: 'Company Overview' },
    { path: '/about-us/workshop', label: 'Workshop' },
    { path: '/about-us/dealership', label: 'Dealership' },
    { path: '/about-us/csr', label: 'CSR Activities' },
    { path: '/about-us/why-belanaro', label: 'Why BELANARO?' },
  ];

  // Get current page title
  const currentPage = aboutUsPages.find((page) => page.path === pathname);
  const pageTitle = currentPage?.label || 'About Us';

  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      {/* Breadcrumb Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#A8415B] transition-colors flex items-center"
            >
              <Home size={14} className="mr-1" />
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <Link
              href="/about-us"
              className="hover:text-[#A8415B] transition-colors"
            >
              About Us
            </Link>
            {pathname !== '/about-us' && (
              <>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-[#A8415B] font-medium">{pageTitle}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tab Navigation for About Us section */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex overflow-x-auto hide-scrollbar">
            {aboutUsPages.map((page) => {
              const isActive = pathname === page.path;
              return (
                <Link
                  key={page.path}
                  href={page.path}
                  className={`whitespace-nowrap px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? 'border-[#A8415B] text-[#A8415B]'
                      : 'border-transparent text-gray-600 hover:text-[#A8415B] hover:border-gray-300'
                  }`}
                >
                  {page.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
}
