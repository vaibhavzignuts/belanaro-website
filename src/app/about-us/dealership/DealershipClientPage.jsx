'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DealershipClientPage = () => {
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
            src="/delarship.webp"
            alt="BELANARO Dealership Program"
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
            Join the Global Brand in Dehydrated Foods
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Launch your dealership with BELANARO Group of Companies — zero
            deposit, maximum support, and unmatched profits in dehydrated onion,
            garlic, and vegetable exports.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Why Become a BELANARO Dealer? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Where Trust Meets Growth.
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
            <p className="text-gray-600 mb-6 text-lg text-center">
              As BELANARO Group of Companies, we offer more than dehydrated
              ingredients — we offer full-scale support to help you succeed as
              an importer, wholesaler, or brand owner.
            </p>
            <p className="text-gray-600 mb-8 text-lg text-center">
              We're India's leading dehydrated food manufacturer and exporter,
              known globally for our high-quality dehydrated garlic, onion, and
              vegetables in bulk.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🧩 Key Benefits for Dealers:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '💸',
                  title: 'Annual Discount Opportunities',
                  desc: 'Exclusive yearly promotions to maximize your profitability',
                },
                {
                  icon: '👨‍👩‍👧',
                  title: 'Local Workforce Support',
                  desc: "We help cover your local staff's salaries",
                },
                {
                  icon: '🏢',
                  title: 'Godown Rent Paid by Us',
                  desc: 'Reduce your warehouse costs',
                },
                {
                  icon: '🧴',
                  title: 'Custom Branding Support',
                  desc: 'Get your own stationery, promotional items, and personalized brand identity',
                },
                {
                  icon: '📲',
                  title: 'Tailored Marketing Solutions',
                  desc: 'SEO, ads, and social campaigns to generate demand in your market',
                },
                {
                  icon: '🌍',
                  title: 'Exclusive Territory Rights',
                  desc: 'Lock your region and enjoy zero competition',
                },
                {
                  icon: '💰',
                  title: 'Profit-Driven Pricing',
                  desc: 'Competitive pricing structures customized for your market',
                },
                {
                  icon: '👤',
                  title: 'Dedicated Account Management',
                  desc: 'One manager, full-time support',
                },
                {
                  icon: '🚚',
                  title: 'Expedited Order Fulfillment',
                  desc: 'Get products faster, stay ahead of demand',
                },
                {
                  icon: '🚀',
                  title: 'Early Access to New Products',
                  desc: 'Be the first to offer innovations',
                },
                {
                  icon: '🆓',
                  title: 'No Advance Deposit Required',
                  desc: 'Start your dealership journey without upfront fees',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dealer Support Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Built for Global Dealers Who Think Big
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏭', text: 'Factory-direct pricing' },
              {
                icon: '📦',
                text: 'Custom packaging (retail pouches, bulk sacks)',
              },
              { icon: '🌱', text: 'Organic, HACCP, FSSAI certified' },
              { icon: '📱', text: 'WhatsApp support (24/7 availability)' },
              {
                icon: '📄',
                text: 'Fast export documentation (COA, MSDS, Origin Cert.)',
              },
              {
                icon: '📊',
                text: 'Marketing kits for Google, Instagram, LinkedIn',
              },
              { icon: '🔒', text: 'Territory exclusivity with legal support' },
              {
                icon: '📚',
                text: 'Product training + brochures in multiple languages',
              },
              {
                icon: '📈',
                text: 'Monthly updates on bestsellers, market trends',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center"
              >
                <span className="text-3xl mr-4">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Choose Your Dealership Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Choose Your Dealership Model
            </h2>
            <div className="w-20 h-1 bg-[#A8415B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#A8415B]"
            >
              <div className="text-4xl mb-4 text-[#A8415B]">🌐</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Exclusive Importer
              </h3>
              <p className="text-gray-600">
                National-level dealership with full support & stock priority
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#A8415B]"
            >
              <div className="text-4xl mb-4 text-[#A8415B]">🏙</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                City/State Distributor
              </h3>
              <p className="text-gray-600">
                Manage your state or region with our products and branding
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-[#A8415B]"
            >
              <div className="text-4xl mb-4 text-[#A8415B]">🧴</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Private Label Partner
              </h3>
              <p className="text-gray-600">
                Launch your own brand — we supply, you grow the label
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* We're the Right Fit If You... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 bg-white rounded-lg p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              We're the Right Fit If You…
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600 max-w-3xl mx-auto">
            <li className="flex items-start">
              <span className="text-[#A8415B] mr-3 font-bold text-xl">✅</span>
              <span className="text-lg">
                Import, distribute, or wholesale dehydrated food ingredients
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A8415B] mr-3 font-bold text-xl">✅</span>
              <span className="text-lg">
                Are a brand owner or spice product repacker
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A8415B] mr-3 font-bold text-xl">✅</span>
              <span className="text-lg">
                Want factory-direct dehydrated garlic/onion at competitive rates
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A8415B] mr-3 font-bold text-xl">✅</span>
              <span className="text-lg">
                Need quality, certification, and logistics you can trust
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#A8415B] mr-3 font-bold text-xl">✅</span>
              <span className="text-lg">
                Prefer a supportive partner, not just a supplier
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Apply Now */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#A8415B]/10 rounded-2xl p-10 md:p-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Start Your Dealership With ZERO Deposit
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's grow together. Get access to premium dehydrated vegetables,
              private label branding, and exclusive dealership benefits —
              without paying a single rupee upfront. Join hundreds of successful
              BELANARO partners globally.
            </p>
          </div>

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
              <span className="text-2xl">📘</span>
              <span className="text-lg font-medium">
                Catalogue Download: belanaro.com/catalogue
              </span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Inquiry Form
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full p-3 border rounded-md" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Country</label>
                  <input type="text" className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select className="w-full p-3 border rounded-md">
                    <option>Importer</option>
                    <option>Distributor</option>
                    <option>Wholesaler</option>
                    <option>Manufacturer</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">WhatsApp</label>
                  <input type="tel" className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Product Interest
                </label>
                <select className="w-full p-3 border rounded-md">
                  <option>Dehydrated Onion</option>
                  <option>Dehydrated Garlic</option>
                  <option>Vegetable Powders</option>
                  <option>Multiple Products</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full p-3 border rounded-md h-32"></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#A8415B] text-white py-3 px-8 rounded-lg hover:bg-[#873548] transition-colors duration-300 shadow-lg"
                >
                  Submit Inquiry
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DealershipClientPage;
