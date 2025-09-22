// src/hooks/useAnimations.js
'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animation variants for Framer Motion
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideInLeftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideInRightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Custom hook for animations
export const useAnimatedSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return { ref, controls, isInView };
};

// Animated component wrappers
export const FadeInSection = ({ children, delay = 0 }) => {
  const { ref, controls } = useAnimatedSection();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideUpSection = ({ children, delay = 0 }) => {
  const { ref, controls } = useAnimatedSection();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideUpVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInLeftSection = ({ children, delay = 0 }) => {
  const { ref, controls } = useAnimatedSection();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideInLeftVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInRightSection = ({ children, delay = 0 }) => {
  const { ref, controls } = useAnimatedSection();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideInRightVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren = ({ children }) => {
  const { ref, controls } = useAnimatedSection();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerChildrenVariants}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChild = ({ children }) => {
  return <motion.div variants={childVariants}>{children}</motion.div>;
};
