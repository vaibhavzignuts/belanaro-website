// src/utils/animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Initialize GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade in animation
export const fadeInAnimation = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
    }
  );
};

// Slide up animation
export const slideUpAnimation = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
    }
  );
};

// Slide in from left animation
export const slideInLeftAnimation = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
    }
  );
};

// Slide in from right animation
export const slideInRightAnimation = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
    }
  );
};

// Stagger children animation
export const staggerChildrenAnimation = (parent, children, delay = 0) => {
  gsap.from(children, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay,
    stagger: 0.1,
    ease: 'power2.out',
  });
};

// ScrollTrigger animation
export const createScrollTrigger = (element, animation) => {
  return ScrollTrigger.create({
    trigger: element,
    start: 'top 80%',
    onEnter: () => animation(),
    once: true,
  });
};

// Animate number counter
export const animateNumber = (element, start, end, duration = 2) => {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    element.textContent = currentValue;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = end;
    }
  };
  window.requestAnimationFrame(step);
};
