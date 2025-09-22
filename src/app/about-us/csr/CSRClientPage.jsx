'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CSRClientPage = () => {
  const products = [
    {
      id: 1,
      image: '/CSR-ABOUTUS/0a8fff74-0e50-49cd-8879-5f194c9bb955.jpg',
      alt: 'Product 1',
    },
    {
      id: 2,
      image: '/CSR-ABOUTUS/5f10614c-1936-47f3-9bec-b3c454a6034d.jpg',
      alt: 'Product 2',
    },
    {
      id: 3,
      image: '/CSR-ABOUTUS/_DSC8629.JPG',
      alt: 'Product 3',
    },
    {
      id: 4,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0006.jpg',
      alt: 'Product 4',
    },
    {
      id: 5,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0008.jpg',
      alt: 'Product 5',
    },
    {
      id: 6,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0010.jpg',
      alt: 'Product 6',
    },
    {
      id: 7,
      image: '/CSR photos/image (2).png',
      alt: 'Product 7',
    },
    {
      id: 8,
      image: '/CSR-ABOUTUS/IMG_1782.jpg',
      alt: 'Product 8',
    },
    {
      id: 9,
      image: '/CSR-ABOUTUS/412c4e92-a9ba-42ab-8585-e794951c55b9.jpeg',
      alt: 'Product 9',
    },
    {
      id: 10,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0013.jpg',
      alt: 'Product 10',
    },
    {
      id: 11,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0016.jpg',
      alt: 'Product 11',
    },
    {
      id: 12,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0019.jpg',
      alt: 'Product 12',
    },
    {
      id: 13,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0020.jpg',
      alt: 'Product 13',
    },
    {
      id: 14,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0030.jpg',
      alt: 'Product 13',
    },
    {
      id: 15,
      image: '/CSR-ABOUTUS/IMG-20250407-WA0038.jpg',
      alt: 'Product 13',
    },
  ];

  return (
    <div className="bg-[#f5f3f0] min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/CSR-ABOUTUS/_DSC8629.JPG"
            alt="CSR Activities"
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
            BELANARO CSR Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Together, for a Better Tomorrow
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-700 italic mb-4">
            "We rise by lifting others."
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At BELANARO Group of Companies, we believe business should go beyond
            profits — into purpose. Every step we take as a dehydrated food
            leader is paired with steps that uplift communities, protect nature,
            and create sustainable impact.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Initiatives in Action
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                  <p className="text-white text-sm">
                    Making a difference in our community
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Initiatives: Real Action, Real Impact
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-gray-600 mb-8 text-lg">
              At BELANARO Group of Companies, our Corporate Social
              Responsibility is rooted in empathy, action, and long-term change.
              From organizing rural health camps to supporting girl-child
              education and community cleanliness drives, every initiative
              reflects our belief: growth means nothing unless it's shared.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-6">
              We actively invest in:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 text-xl">📚</span>
                  <span className="text-lg">
                    Education drives for underprivileged students
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 text-xl">🍲</span>
                  <span className="text-lg">
                    Food distribution programs powered by our dehydrated meals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 text-xl">🧹</span>
                  <span className="text-lg">
                    Cleanliness campaigns promoting hygiene and Swachh Bharat
                    ideals
                  </span>
                </li>
              </ul>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 text-xl">🌳</span>
                  <span className="text-lg">
                    Tree plantation and green farming awareness
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 text-xl">👩</span>
                  <span className="text-lg">
                    Women empowerment through skill-building and employment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A8415B] mr-3 text-xl">🏥</span>
                  <span className="text-lg">
                    Medical camps in underserved communities
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-600 mt-8 text-lg">
              These are not just activities — they are reflections of our
              purpose. We're proud to be one of the few dehydrated food
              companies in India where sustainability, community support, and
              ethical practices are built into every layer of business.
            </p>
          </div>
        </motion.div>

        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Commitment
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌱', text: 'Ethical dehydrated food practices' },
              {
                icon: '♻️',
                text: 'Sustainable sourcing and clean energy efforts',
              },
              { icon: '🏫', text: 'Uplifting local communities and education' },
              {
                icon: '🤝',
                text: 'Supporting NGOs and grassroot changemakers',
              },
              {
                icon: '💼',
                text: 'Creating jobs through our rural employment drive',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#A8415B]/10 rounded-2xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Want to Partner in Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hands with BELANARO — let's make a real difference.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#A8415B] text-white py-3 px-8 rounded-lg hover:bg-[#873548] transition-colors duration-300 shadow-lg"
          >
            Contact Our CSR Team
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CSRClientPage;
