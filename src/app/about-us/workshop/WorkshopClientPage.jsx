'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WorkshopClientPage = () => {
  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* Header Banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/factory.jpg"
            alt="BELANARO Manufacturing Facility"
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
            Where Quality Begins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Welcome to BELANARO Group of Companies' Manufacturing Facility –
            Gujarat's Premier Dehydrated Vegetable Plant.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Factory Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              State-of-the-Art Infrastructure, Globally Trusted Quality
            </h2>
            <div className="w-20 h-1 bg-[#7C3AED] mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-gray-600 mb-6 text-lg">
              At the heart of BELANARO Group of Companies is a fully integrated
              manufacturing facility based in Gujarat, India — purpose-built to
              produce world-class dehydrated food products in bulk. From
              dehydrated white onion flakes to garlic powder, every product
              passes through precision-engineered dehydration lines designed for
              quality, consistency, and scalability.
            </p>
            <p className="text-gray-600 text-lg">
              We are HACCP-certified, follow USDA, FSSAI, and ISO protocols, and
              serve importers across USA, Europe, Asia, and the Middle East.
            </p>
          </div>
        </motion.div>

        {/* Workshop Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Workshop Gallery
            </h2>
            <div className="w-20 h-1 bg-[#7C3AED] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={`Factory image ${item}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium text-lg">
                    Precision. Hygiene. Scale. That's BELANARO.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Importers Trust Our Factory */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Built for Global Export. Loved by Importers Worldwide.
            </h2>
            <div className="w-20 h-1 bg-[#7C3AED] mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <ul className="space-y-4 text-gray-600 max-w-3xl mx-auto">
              <li className="flex items-start">
                <span className="text-[#7C3AED] mr-3 font-bold text-xl">✔</span>
                <span className="text-lg">
                  Own dehydration & packing unit – not third-party processors
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7C3AED] mr-3 font-bold text-xl">✔</span>
                <span className="text-lg">
                  Ideal for bulk dried vegetables, dehydrated camping food, and
                  private label spice exporters
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7C3AED] mr-3 font-bold text-xl">✔</span>
                <span className="text-lg">
                  Dehydrated food business support – documentation, COA, MSDS &
                  export labels
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7C3AED] mr-3 font-bold text-xl">✔</span>
                <span className="text-lg">
                  Transparent processes – open to third-party audits & importer
                  inspections
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7C3AED] mr-3 font-bold text-xl">✔</span>
                <span className="text-lg">
                  Gujarat-based dehydrated food manufacturers with proven export
                  record
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Export-ready team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          <div className="relative z-10 p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to import from India's leading dehydrated onion & garlic
              factory?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              BELANARO Group of Companies is your trusted source for bulk
              dehydrated foods, white label exports, and global-ready quality.
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#7C3AED] text-white py-3 px-8 rounded-lg hover:bg-[#873548] transition-colors duration-300 shadow-lg"
              >
                Visit More Products
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkshopClientPage;
