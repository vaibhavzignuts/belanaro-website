'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
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

  const valueCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* SECTION 1: Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/about us.jpg"
            alt="Dehydrated vegetable processing"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            We Do not Just Export. We Empower.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Global leaders in dehydrated vegetables, building long-term
            partnerships with importers across the world.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* SECTION 2: Who We Are */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome to BELANARO Group of Companies
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Legally known as VISHWANATH IMPEX — but globally recognized as
              BELANARO, we are the trusted name in dehydrated food products,
              dehydrated onion, and garlic exports. With a legacy of delivering
              quality, consistency, and importer-first service, we have
              positioned ourselves not just as manufacturers, but as business
              enablers for food companies and distributors around the world.
            </p>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">
                Why Global Clients Trust Us:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-2 mt-1">✓</span>
                  <span className="text-gray-700">
                    Decades of Expertise – Our long-standing industry experience
                    ensures the best processing techniques and product
                    consistency.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-2 mt-1">✓</span>
                  <span className="text-gray-700">
                    Preferred Supplier for Leading Brands – We serve food
                    processors, seasoning manufacturers, wholesalers, and spice
                    industries worldwide.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-2 mt-1">✓</span>
                  <span className="text-gray-700">
                    Ethical & Sustainable Farming – We source from trusted
                    farmers, ensuring chemical-free, Non-GMO, and eco-friendly
                    raw materials.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-2 mt-1">✓</span>
                  <span className="text-gray-700">
                    Strict Quality Standards – We meet HACCP, ISO, and FSSAI
                    certifications, ensuring premium safety and quality.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about us 2.jpg"
                alt="BELANARO Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-gray-800 font-medium text-xl">
                Trusted by food manufacturers in
                <span className="text-[#7C3AED] font-bold"> 7+ countries</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 3: Our Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              From Gujarat to the Globe – Our Journey
            </h2>
            <div className="w-20 h-1 bg-[#7C3AED] mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-gray-600 mb-6 text-lg">
              BELANARO Group of Companies was born from a vision to make India a
              global hub for premium dehydrated vegetables. From small
              beginnings to becoming one of the most trusted names in bulk
              dehydrated onion and garlic products, our growth story is built on
              one core principle:
            </p>
            <p className="text-xl font-semibold text-[#7C3AED] mb-6">
              👉 We grow only when our importers grow.
            </p>
            <p className="text-gray-600 text-lg">
              Today, BELANARO is a go-to brand for dehydrated food importers in
              USA, Europe, Asia, and the Middle East.
            </p>
          </div>
        </motion.div>

        {/* SECTION 4: Vision & Mission */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-[#7C3AED] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#7C3AED]/10 flex items-center justify-center rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the global benchmark in dehydrated food exports — known
                for empowering importers with scalable, profitable, and
                quality-first solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#7C3AED]/10 flex items-center justify-center rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-2">•</span>
                  <span>
                    Make importing dehydrated vegetables from India seamless and
                    stress-free
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-2">•</span>
                  <span>
                    Provide certified, shelf-stable, non-GMO, and hygienically
                    processed products
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-2">•</span>
                  <span>
                    Deliver excellence in bulk orders, private labeling, and
                    custom needs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-2">•</span>
                  <span>
                    Help food brands, distributors, and spice dealers scale
                    fearlessly
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* SECTION 5: What Sets Us Apart */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Makes BELANARO Different?
            </h2>
            <div className="w-20 h-1 bg-[#7C3AED] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={valueCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#7C3AED]/10 flex items-center justify-center rounded-full mb-6">
                <span className="text-xl text-[#7C3AED]">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                We Are a Brand
              </h3>
              <p className="text-gray-600">
                We are not brokers. We own our dehydration units, follow HACCP
                and USDA practices, and control quality from farm to final
                packaging.
              </p>
            </motion.div>

            <motion.div
              variants={valueCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#7C3AED]/10 flex items-center justify-center rounded-full mb-6">
                <span className="text-xl text-[#7C3AED]">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Built for Importers
              </h3>
              <p className="text-gray-600">
                Whether you want bulk dried garlic, dehydrated onion powder, or
                organic dehydrated food in private label, we are built to serve
                your needs.
              </p>
            </motion.div>

            <motion.div
              variants={valueCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#7C3AED]/10 flex items-center justify-center rounded-full mb-6">
                <span className="text-xl text-[#7C3AED]">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Success Obsessed
              </h3>
              <p className="text-gray-600">
                We are not just exporters. We are your business consultants —
                here to help you enter new markets, lower sourcing risk, and
                grow revenues.
              </p>
            </motion.div>
          </div>
        </div>

        {/* SECTION 6: Our Strengths */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              BELANARO Core Strengths
            </h2>
            <div className="w-20 h-1 bg-[#7C3AED] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-3 text-xl">🌱</span>
                  <span className="text-lg">
                    Non-GMO, organic-ready, clean-label product portfolio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-3 text-xl">🏭</span>
                  <span className="text-lg">
                    Own factory with modern dehydration machinery and cold chain
                    logistics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-3 text-xl">🧪</span>
                  <span className="text-lg">
                    In-house QC lab with batch-wise testing and traceability
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-3 text-xl">📦</span>
                  <span className="text-lg">
                    Eco-safe, export-grade packaging for maximum shelf life
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-3 text-xl">🧾</span>
                  <span className="text-lg">
                    Full export documentation and global compliance support
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-3 text-xl">📍</span>
                  <span className="text-lg">
                    On-time deliveries to USA, Canada, UAE, Vietnam, Germany,
                    etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-3 text-xl">🧠</span>
                  <span className="text-lg">
                    Custom product development for spice blends, soups, snacks,
                    and FMCG
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7C3AED] mr-3 text-xl">🌐</span>
                  <span className="text-lg">
                    Global shipping capabilities with reliable logistics
                    partners
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 7: How We Help Importers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 bg-white rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Helping Importers Succeed — That is Our Real Business
          </h2>
          <p className="text-gray-600 mb-6 text-lg text-center">
            At BELANARO, we are not in the business of just dehydrating onions
            and garlic.
            <br />
            We are in the business of helping importers grow with confidence.
          </p>
          <p className="text-gray-600 text-lg">
            We work hand-in-hand with food importers, distributors, wholesalers,
            and private-label brands to solve real-world challenges — from MOQ
            clarity and sourcing reliability to logistics, price stability, and
            customized packaging.
          </p>
        </motion.div>

        {/* SECTION 8: Let's Grow Together (Call to Action) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#7C3AED]/10 rounded-2xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Let Build Your Brand Together
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level with India most
            reliable dehydrated food exporter? We had love to connect.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">📩</span>
              <span className="text-lg font-medium">
                Email: yash@belanaro.com
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">📲</span>
              <span className="text-lg font-medium">
                WhatsApp: +91 99094 79990
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🌐</span>
              <span className="text-lg font-medium">
                Website: www.belanaro.com
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7C3AED] text-white py-3 px-8 rounded-lg hover:bg-[#873548] transition-colors duration-300 shadow-lg"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>

      {/* Dealership Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/delarship.webp"
          alt="Belanaro Dealership Program"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 lg:px-32"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Belanaro Dealership Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Start or expand your business in the dehydrated food industry with
              low investment and high returns.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7C3AED] text-white py-3 px-8 rounded-lg hover:bg-[#873548] transition-colors duration-300 shadow-lg"
            >
              Apply for Dealership
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
