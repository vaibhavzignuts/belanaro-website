// import { useEffect, useRef, useState } from 'react';
// import { csrPillars } from './constants';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// export const CSRActivities = () => {
//   const [activePillar, setActivePillar] = useState(null);
//   const [isDetailView, setIsDetailView] = useState(false);
//   const [selectedStory, setSelectedStory] = useState(null);
//   const [direction, setDirection] = useState(0);
//   const containerRef = useRef(null);
//   const [viewportHeight, setViewportHeight] = useState(0);

//   useEffect(() => {
//     setViewportHeight(window.innerHeight);

//     const handleResize = () => {
//       setViewportHeight(window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handlePillarClick = (pillar) => {
//     setDirection(pillar.id > (activePillar?.id || '') ? 1 : -1);
//     setActivePillar(pillar);
//     setIsDetailView(true);
//   };

//   const handleBack = () => {
//     setIsDetailView(false);
//     setSelectedStory(null);
//   };

//   const handleStoryClick = (story) => {
//     setSelectedStory(story);
//   };

//   const handleBackToOverview = () => {
//     setSelectedStory(null);
//   };

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (delay) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: delay * 0.2,
//         duration: 0.8,
//         ease: 'easeOut',
//       },
//     }),
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const contentVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? '100%' : '-100%',
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         x: { type: 'spring', stiffness: 300, damping: 30 },
//         opacity: { duration: 0.5 },
//       },
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? '100%' : '-100%',
//       opacity: 0,
//       transition: {
//         x: { type: 'spring', stiffness: 300, damping: 30 },
//         opacity: { duration: 0.5 },
//       },
//     }),
//   };

//   const imageGalleryVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <div className="bg-[#FDFCFB] min-h-screen" ref={containerRef}>
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-[50vh] overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/80 to-[#7C3AED]/40 z-10"></div>
//         <div className="absolute inset-0 bg-black/30 z-10"></div>
//         <div className="absolute inset-0 flex flex-col">
//           <Image
//             src="/csr/hero-image.jpg"
//             alt="CSR Activities"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//         <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
//           >
//             Corporate Social Responsibility
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="text-xl max-w-3xl mx-auto"
//           >
//             Growing Together, Giving Back
//           </motion.p>
//         </div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.8 }}
//           className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FDFCFB] to-transparent z-10"
//         ></motion.div>
//       </motion.div>

//       {/* Introduction Section */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg"
//         >
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">
//               Our Commitment to Social Responsibility
//             </h2>
//             <p className="text-lg text-gray-600 mb-8">
//               At BELANARO Group, we believe true growth is not just measured by
//               profits—it's defined by the positive impact we create in the world
//               around us. As a responsible global business, we are committed to
//               making a meaningful difference through sustainable practices,
//               ethical sourcing, and community development.
//             </p>
//             <p className="text-lg text-gray-600">
//               We see CSR not as a duty but as a core part of who we are. As we
//               expand our global reach, we stay rooted in our responsibility to
//               people, the planet, and partnerships.
//             </p>
//             <div className="mt-6 font-bold text-[#7C3AED] text-xl">
//               Together, we grow. Together, we give back.
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Main Content - Toggle between Overview and Detail View */}
//       <div className="min-h-screen pb-24">
//         <AnimatePresence mode="wait">
//           {!isDetailView ? (
//             // Overview Grid Layout
//             <motion.div
//               key="overview"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="max-w-7xl mx-auto px-4 md:px-8"
//             >
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-3xl font-bold text-gray-800 mb-12 text-center"
//               >
//                 Our Core CSR Pillars
//               </motion.h2>

//               <motion.div
//                 variants={staggerContainer}
//                 initial="hidden"
//                 animate="visible"
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               >
//                 {csrPillars.map((pillar, index) => (
//                   <motion.div
//                     key={pillar.id}
//                     custom={index}
//                     variants={fadeInUp}
//                     whileHover={{ y: -10, transition: { duration: 0.3 } }}
//                     className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     <div className="h-56 relative overflow-hidden">
//                       <Image
//                         src={pillar.images[0]}
//                         alt={pillar.title}
//                         fill
//                         className="object-cover transition-transform duration-700 hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
//                         <div className="p-6">
//                           <h3 className="text-white text-2xl font-bold mb-2">
//                             {pillar.title}
//                           </h3>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-600 mb-6 line-clamp-3">
//                         {pillar.description}
//                       </p>
//                       <button
//                         onClick={() => handlePillarClick(pillar)}
//                         className="flex items-center text-[#7C3AED] font-medium hover:underline"
//                       >
//                         View More
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="ml-2"
//                         >
//                           <path d="M5 12h14" />
//                           <path d="m12 5 7 7-7 7" />
//                         </svg>
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           ) : (
//             // Detail View for a specific pillar
//             <motion.div
//               key="detail"
//               initial="enter"
//               animate="center"
//               exit="exit"
//               custom={direction}
//               variants={contentVariants}
//               className="max-w-7xl mx-auto px-4 md:px-8"
//             >
//               {/* Back button */}
//               <div className="mb-8">
//                 <button
//                   onClick={handleBack}
//                   className="flex items-center text-[#7C3AED] hover:underline"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="mr-2"
//                   >
//                     <path d="m12 19-7-7 7-7" />
//                     <path d="M19 12H5" />
//                   </svg>
//                   Back to CSR Pillars
//                 </button>
//               </div>

//               {!selectedStory ? (
//                 // Pillar Overview
//                 <div>
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//                     <motion.div
//                       initial={{ opacity: 0, x: -30 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3, duration: 0.8 }}
//                     >
//                       <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8">
//                         <div className="flex items-center gap-4 mb-4">
//                           <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]">
//                             {activePillar?.icon}
//                           </div>
//                           <h2 className="text-3xl font-bold text-gray-800">
//                             {activePillar?.title}
//                           </h2>
//                         </div>
//                         <p className="text-lg text-gray-600">
//                           {activePillar?.description}
//                         </p>
//                       </div>

//                       <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
//                         <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                           Impact Stories
//                         </h3>
//                         <div className="space-y-6">
//                           {activePillar?.stories.map((story, idx) => (
//                             <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{
//                                 delay: 0.5 + idx * 0.2,
//                                 duration: 0.8,
//                               }}
//                               className="bg-[#FDFCFB] rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
//                               onClick={() => handleStoryClick(story)}
//                             >
//                               <h4 className="text-xl font-bold text-[#7C3AED] mb-2">
//                                 {story.title}
//                               </h4>
//                               <p className="text-gray-600 mb-4">
//                                 {story.content}
//                               </p>
//                               <div className="flex justify-end">
//                                 <button className="flex items-center text-[#7C3AED] font-medium hover:underline">
//                                   Read Full Story
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="ml-2"
//                                   >
//                                     <path d="M5 12h14" />
//                                     <path d="m12 5 7 7-7 7" />
//                                   </svg>
//                                 </button>
//                               </div>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>

//                     <motion.div
//                       initial={{ opacity: 0, x: 30 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3, duration: 0.8 }}
//                     >
//                       <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                         Photo Gallery
//                       </h3>
//                       <motion.div
//                         variants={imageGalleryVariants}
//                         initial="hidden"
//                         animate="visible"
//                         className="grid grid-cols-2 gap-4"
//                       >
//                         {activePillar?.images.map((image, idx) => (
//                           <motion.div
//                             key={idx}
//                             variants={imageVariants}
//                             className="aspect-square relative rounded-lg overflow-hidden shadow-md"
//                           >
//                             <Image
//                               src={image}
//                               alt={`${activePillar?.title} - Image ${idx + 1}`}
//                               fill
//                               className="object-cover hover:scale-110 transition-transform duration-500"
//                             />
//                           </motion.div>
//                         ))}
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </div>
//               ) : (
//                 // Individual Story Detail View
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <button
//                     onClick={handleBackToOverview}
//                     className="flex items-center text-[#7C3AED] hover:underline mb-6"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="mr-2"
//                     >
//                       <path d="m12 19-7-7 7-7" />
//                       <path d="M19 12H5" />
//                     </svg>
//                     Back to {activePillar?.title}
//                   </button>

//                   <div className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
//                     <div className="h-80 relative">
//                       <Image
//                         src={selectedStory.image}
//                         alt={selectedStory.title}
//                         fill
//                         className="object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
//                         <div className="p-8">
//                           <h3 className="text-white text-3xl font-bold">
//                             {selectedStory.title}
//                           </h3>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-8">
//                       <p className="text-lg text-gray-600 mb-8">
//                         {selectedStory.content}
//                       </p>

//                       {/* Extended story content - this would be populated with real content */}
//                       <div className="space-y-6">
//                         <p className="text-gray-700">
//                           Our dedicated team has been working tirelessly on this
//                           initiative, focusing on creating sustainable impact
//                           that will benefit communities for years to come.
//                           Through careful planning and execution, we've been
//                           able to achieve remarkable results.
//                         </p>
//                         <p className="text-gray-700">
//                           The program's success is measured not just in numbers
//                           but in the real-life transformations we've witnessed.
//                           Families now have improved access to resources,
//                           knowledge, and opportunities that were previously out
//                           of reach.
//                         </p>
//                         <blockquote className="border-l-4 border-[#7C3AED] pl-4 italic text-gray-600">
//                           "This initiative has completely changed our
//                           community's outlook. We're now empowered with the
//                           skills and resources to build better futures for
//                           ourselves and our children."
//                           <footer className="text-sm mt-2 text-gray-500">
//                             — Community Member
//                           </footer>
//                         </blockquote>
//                         <p className="text-gray-700">
//                           Looking ahead, we plan to expand this program to reach
//                           even more communities and create more positive impact
//                           in line with our core values and commitment to social
//                           responsibility.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Call to Action */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="bg-[#7C3AED] text-white py-16"
//       >
//         <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             Join Us in Making a Difference
//           </h2>
//           <p className="text-lg max-w-3xl mx-auto mb-8">
//             We're always looking for partners, volunteers, and fresh ideas to
//             enhance our CSR initiatives. Together, we can create a more
//             sustainable and equitable future.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-[#7C3AED] py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg font-medium"
//           >
//             Get Involved
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Scroll Indicator - Only shown on Overview */}
//       {!isDetailView && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8 }}
//           className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <div className="text-center text-gray-600 text-sm">
//             <p>Explore our pillars</p>
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//               className="mt-2"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </motion.div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default CSRActivities;

import { useEffect, useRef, useState } from 'react';
import { csrPillars } from './constants';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export const CSRActivities = () => {
  const [activePillar, setActivePillar] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setViewportHeight(window.innerHeight);

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePillarClick = (pillar) => {
    router.push('/about-us/csr');
  };

  const handleBack = () => {
    setIsDetailView(false);
  };

  const handleStoryClick = (story, pillarId) => {
    // Navigate to the story detail page with story and pillar information
    router.push({
      pathname: `/csr-activities/${encodeURIComponent(
        story.title.toLowerCase().replace(/\s+/g, '-')
      )}`,
      query: {
        pillarId: pillarId,
        storyTitle: story.title,
      },
    });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },

    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const imageGalleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/80 to-[#7C3AED]/40 z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 flex flex-col">
          <Image
            src="/csr/hero-image.jpg"
            alt="CSR Activities"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Corporate Social Responsibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Growing Together, Giving Back
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FDFCFB] to-transparent z-10"
        ></motion.div>
      </motion.div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Commitment to Social Responsibility
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At BELANARO Group, we believe true growth is not just measured by
              profits—it's defined by the positive impact we create in the world
              around us. As a responsible global business, we are committed to
              making a meaningful difference through sustainable practices,
              ethical sourcing, and community development.
            </p>
            <p className="text-lg text-gray-600">
              We see CSR not as a duty but as a core part of who we are. As we
              expand our global reach, we stay rooted in our responsibility to
              people, the planet, and partnerships.
            </p>
            <div className="mt-6 font-bold text-[#7C3AED] text-xl">
              Together, we grow. Together, we give back.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content - Toggle between Overview and Detail View */}
      <div className="min-h-screen pb-24">
        <AnimatePresence mode="wait">
          {!isDetailView ? (
            // Overview Grid Layout
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-4 md:px-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-gray-800 mb-12 text-center"
              >
                Our Core CSR Pillars
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {csrPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.id}
                    custom={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-56 relative overflow-hidden">
                      <Image
                        src={pillar.images[0]}
                        alt={pillar.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-2xl font-bold mb-2">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {pillar.description}
                      </p>
                      <button
                        onClick={() => handlePillarClick(pillar)}
                        className="flex items-center text-[#7C3AED] font-medium hover:underline"
                      >
                        View More
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
                          className="ml-2"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            // Detail View for a specific pillar
            <motion.div
              key="detail"
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              variants={contentVariants}
              className="max-w-7xl mx-auto px-4 md:px-8"
            >
              {/* Back button */}
              <div className="mb-8">
                <button
                  onClick={handleBack}
                  className="flex items-center text-[#7C3AED] hover:underline"
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
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  Back to CSR Pillars
                </button>
              </div>

              {/* Pillar Overview */}
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]">
                          {activePillar?.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">
                          {activePillar?.title}
                        </h2>
                      </div>
                      <p className="text-lg text-gray-600">
                        {activePillar?.description}
                      </p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Impact Stories
                      </h3>
                      <div className="space-y-6">
                        {activePillar?.stories.map((story, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.5 + idx * 0.2,
                              duration: 0.8,
                            }}
                            className="bg-[#FDFCFB] rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
                          >
                            <h4 className="text-xl font-bold text-[#7C3AED] mb-2">
                              {story.title}
                            </h4>
                            <p className="text-gray-600 mb-4">
                              {story.content}
                            </p>
                            <div className="flex justify-end">
                              <Link
                                href={{
                                  pathname: `/csr-activities/${encodeURIComponent(
                                    story.title
                                      .toLowerCase()
                                      .replace(/\s+/g, '-')
                                  )}`,
                                  query: {
                                    pillarId: activePillar.id,
                                    storyTitle: story.title,
                                  },
                                }}
                                className="flex items-center text-[#7C3AED] font-medium hover:underline"
                              >
                                Read Full Story
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
                                  className="ml-2"
                                >
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Photo Gallery
                    </h3>
                    <motion.div
                      variants={imageGalleryVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 gap-4"
                    >
                      {activePillar?.images.map((image, idx) => (
                        <motion.div
                          key={idx}
                          variants={imageVariants}
                          className="aspect-square relative rounded-lg overflow-hidden shadow-md"
                        >
                          <Image
                            src={image}
                            alt={`${activePillar?.title} - Image ${idx + 1}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#7C3AED] text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We're always looking for partners, volunteers, and fresh ideas to
            enhance our CSR initiatives. Together, we can create a more
            sustainable and equitable future.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#7C3AED] py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg font-medium"
          >
            Get Involved
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CSRActivities;
