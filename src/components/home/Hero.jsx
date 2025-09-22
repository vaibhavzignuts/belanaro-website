'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  slideInLeftVariants,
  slideInRightVariants,
  slideUpVariants,
} from '@/hooks/useAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, TextPlugin);
    }

    const hero = heroRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const scroll = scrollRef.current;

    // Create a timeline for sequential animations
    const tl = gsap.timeline();

    // Background animation
    gsap.to(hero, {
      backgroundPosition: '100% 0%',
      duration: 30,
      ease: 'linear',
      repeat: -1,
      yoyo: true,
    });

    // Paragraph reveal with a typewriter effect
    if (paragraph) {
      const originalText = paragraph.textContent;
      tl.fromTo(
        paragraph,
        { text: '', opacity: 0 },
        {
          duration: 2,
          text: originalText,
          opacity: 1,
          ease: 'none',
        },
        '-=0.3'
      );
    }

    // Enhanced scroll indicator animation
    if (scroll) {
      gsap.to(scroll, {
        y: 10,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // Pulsing effect
      gsap.to(scroll, {
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Clean up animations on unmount
    return () => {
      if (tl) tl.kill();
      gsap.killTweensOf(hero);
      gsap.killTweensOf(scroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-[#e7dfd9] from-primary-50 to-primary-100 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 z-0"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-accent-50 opacity-10 rounded-bl-[300px] z-0"></div>

      {/* Animated background circles with enhanced animations */}
      <div className="absolute left-20 top-40 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute right-20 bottom-40 w-80 h-80 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>

      {/* GSAP-animated floating particles */}
      <div id="particles-container" className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeftVariants}
            className="space-y-6"
          >
            <motion.span
              className="inline-block px-5 py-2 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 text-[#A8415B] border border-[#A8415B] rounded-full text-base font-bold shadow-md uppercase tracking-wide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              ⭐ Premium Quality
            </motion.span>

            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight"
            >
              Global Leaders in{' '}
              <span className="text-[#A8415B] relative">
                Dehydrated
                <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-300 opacity-50"></span>
              </span>{' '}
              Vegetables & Spices
            </h1>

            <p ref={paragraphRef} className="text-lg text-gray-700 max-w-lg">
              Supplying the world with premium quality dehydrated onions,
              garlic, and vegetables from the heart of India. Trusted by
              importers in 30+ countries.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={slideUpVariants}
            >
              <Link
                href="/products"
                className="px-6 py-3 bg-[#A8415B] text-white font-medium rounded-lg shadow-lg hover:shadow-blue-200/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white hover:bg-gray-50 text-[#A8415B] font-medium rounded-lg border border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Become a Dealer
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial="hidden"
            animate="visible"
            variants={slideInRightVariants}
          >
            {/* Image container */}
            <div className="relative aspect-square rounded-full bg-[#A8415B] p-4 shadow-xl">
              {/* Background gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full z-0"></div>
              <div className="absolute inset-0 rounded-full bg-[#e7dfd9] bg-opacity-80 animate-pulse z-0"></div>

              {/* Product image */}
              <img
                src="/hero_image.jpg"
                alt="Dehydrated Vegetables & Spices"
                className="relative z-10 w-full h-full object-contain rounded-full filter drop-shadow-lg"
              />

              {/* Floating badges (inside image container) */}
              {/* Top Right Badge */}
              <motion.div
                className="absolute top-2 right-2 md:-top-6 md:-right-6 bg-[#A8415B] rounded-full text-white p-4 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-sm font-semibold">100% Natural</span>
              </motion.div>

              {/* Bottom Left Badge */}
              <motion.div
                className="absolute bottom-2 left-2 md:bottom-6 md:-left-6 bg-[#A8415B] rounded-full text-white p-4 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <span className="text-sm font-semibold">Non-GMO</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
