// src/pages/index.js
'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';
// import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import WhyChoose from '@/components/home/WhyChoose';
import BusinessBenefits from '@/components/home/BusinessBenefits';
import GlobalPresence from '@/components/home/GlobalPresence';
// import Testimonials from '@/components/home/Testimonials';
// import CallToAction from '@/components/shared/CallToAction';

// Preload gsap for smooth animations
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Testimonials from './testimonials';
import Slider from './FeaturedProducts2';
import ProductCarousel from '../ui/ProductCarousel';
import CSRActivities from './CSRactivities';
import Footer from '../Footer';
import ContactPage from './Contact';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Landing() {
  useEffect(() => {
    // Smooth page transition animation
    const content = document.querySelector('.page-content');
    gsap.fromTo(
      content,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Clean up ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const products = [
    {
      id: 1,
      name: 'Dehydrated Pink Onion Flakes',
      description:
        'High-quality dehydrated pink onion flakes, ideal for seasoning and food processing industries',
      image: '/COVER-IMAGE1.jpg',
    },
    {
      id: 2,
      name: 'Dehydrated Red Onion Powder',
      description:
        'Finely ground red onion powder with strong aroma and long shelf life, perfect for bulk export',
      image: '/RED-ONION-POWDER.jpg',
    },
    {
      id: 3,
      name: 'Dehydrated Garlic Granules',
      description:
        'Premium dehydrated garlic granules used widely in culinary, seasoning, and pharmaceutical applications',
      image: '/garlic-granules.jpg',
    },
    {
      id: 4,
      name: 'Dehydrated White Onion Chopped',
      description:
        'Uniformly chopped white onion with rich flavor, exported to major international markets',
      image: '/white-onion-chopped.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>
          Belanaro Group - Premium Dehydrated Onion & Garlic Supplier
        </title>
        <meta
          name="description"
          content="Global supplier of premium dehydrated onion, garlic and vegetable powders. 100% natural, non-GMO and chemical-free products with worldwide shipping."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page-content h-screen">
        <ProductCarousel products={products} />
        <Hero />
        <Slider />

        <BusinessBenefits />

        <GlobalPresence />
        <WhyChoose />
        <Testimonials />
        <ContactPage />
        <Footer />

        {/* <CallToAction
          title="Ready to Enhance Your Business?"
          subtitle="Connect with us for bulk orders, competitive pricing, and global export solutions."
          buttonText="Contact Us"
          buttonLink="/contact"
        /> */}
      </main>
    </>
  );
}
