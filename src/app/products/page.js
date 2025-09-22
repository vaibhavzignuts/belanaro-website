// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   ArrowLeft,
//   Download,
//   ChevronDown,
//   ChevronUp,
//   X,
//   Search,
//   ShoppingBag,
//   ArrowRight,
//   Phone,
//   Mail,
//   Heart,
// } from 'lucide-react';
// import { productCategories, productDetails } from '@/constants/constants';

// export default function ProductsPage() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [expandedSpecs, setExpandedSpecs] = useState(false);
//   const [expandedApps, setExpandedApps] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(
//     productCategories[0]?.id || null
//   );
//   const [showProductModal, setShowProductModal] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [visibleProducts, setVisibleProducts] = useState(6);

//   useEffect(() => {
//     // Close modal when escape key is pressed
//     const handleEsc = (event) => {
//       if (event.keyCode === 27) setShowProductModal(false);
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

//   const handleProductSelect = (productName, categoryId) => {
//     setSelectedProduct(productName);
//     setActiveCategory(categoryId);
//     setShowProductModal(true);
//     setExpandedSpecs(false);
//     setExpandedApps(false);
//     // Prevent scroll when modal is open
//     document.body.style.overflow = 'hidden';
//   };

//   const handleCloseModal = () => {
//     setShowProductModal(false);
//     document.body.style.overflow = 'auto';
//   };

//   const getProductDetails = () => {
//     if (!selectedProduct || !activeCategory) return null;
//     const categoryData = productDetails[activeCategory];
//     if (!categoryData) return null;
//     return categoryData.products.find(
//       (product) => product.name === selectedProduct
//     );
//   };

//   const productDetail = getProductDetails();

//   const handleCategoryChange = (categoryId) => {
//     setActiveCategory(categoryId);
//     setSelectedProduct(null);
//     setVisibleProducts(6);
//     // scrollToProducts();
//   };

//   const scrollToProducts = () => {
//     const element = document.getElementById('products-grid');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const loadMoreProducts = () => {
//     setVisibleProducts((prev) => prev + 6);
//   };

//   const currentCategory = productDetails[activeCategory];

//   // Filter products based on search term
//   const filteredProducts =
//     currentCategory?.products.filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase())
//     ) || [];

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section
//         className="relative py-24 bg-cover bg-center"
//         style={{ backgroundImage: "url('/catagoeies/COVER IMAGE.jpg')" }}
//       >
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#A8415B]/70 to-[#7C1D35]/70"></div>
//         {/* Optional pattern overlay */}
//         <div className="absolute inset-0 bg-black opacity-5 pattern-diagonal-lines pattern-white pattern-bg-transparent pattern-size-4"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <Link
//             href="/"
//             className="inline-flex items-center text-white mb-8 hover:underline transition-all"
//           >
//             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
//           </Link>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-4xl"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//               Premium Dehydrated Ingredients for Global Markets
//             </h1>
//             <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
//               Trusted by importers, food brands, and ingredient buyers across
//               the globe. Experience the quality that sets industry standards.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-[#A8415B] px-8 py-4 rounded-md font-medium shadow-lg flex items-center"
//                 onClick={scrollToProducts}
//               >
//                 Browse Products <ArrowRight className="ml-2 h-5 w-5" />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium flex items-center"
//               >
//                 Download Catalog <Download className="ml-2 h-5 w-5" />
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Category Navigation */}
//       <section className="sticky top-0 z-10 bg-white shadow-md">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             <div className="flex overflow-x-auto gap-3 no-scrollbar">
//               {productCategories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => handleCategoryChange(cat.id)}
//                   className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all flex items-center ${
//                     activeCategory === cat.id
//                       ? 'bg-[#A8415B] text-white shadow-md'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   <div className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-white flex-shrink-0">
//                     <Image
//                       src={cat.image || `/categories/${cat.id}.jpg`}
//                       alt={cat.title}
//                       width={32}
//                       height={32}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   {cat.title}
//                 </button>
//               ))}
//             </div>
//             <div className="relative hidden md:block">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#A8415B] focus:border-transparent outline-none"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mobile Search - only visible on small screens */}
//       <div className="md:hidden px-4 py-3 bg-white border-t border-gray-200">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#A8415B] focus:border-transparent outline-none"
//           />
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//         </div>
//       </div>

//       {/* Category Info */}
//       {/* Category Info with Image */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="mb-12"
//             >
//               <div className="flex flex-col gap-8 mb-8">
//                 {/* Category Image */}
//                 <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
//                   <Image
//                     src={
//                       currentCategory?.categoryImage ||
//                       `/category-images/${activeCategory}.jpg`
//                     }
//                     alt={currentCategory?.title}
//                     width={1200}
//                     height={400}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//                   {currentCategory?.headline}
//                 </h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#A8415B] mb-4">
//                     {currentCategory?.subheadline}
//                   </h3>
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     {currentCategory?.description}
//                   </p>
//                   <button className="mt-2 inline-flex items-center text-[#A8415B] font-medium hover:underline">
//                     <Download className="mr-2 h-4 w-4" /> {currentCategory?.cta}
//                   </button>
//                 </div>
//                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
//                   <h3 className="text-xl font-semibold mb-4 flex items-center">
//                     <ShoppingBag className="mr-2 h-5 w-5 text-[#A8415B]" />
//                     Applications
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed">
//                     {currentCategory?.applications}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-16 bg-gray-50" id="products-grid">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//                 {filteredProducts.length > 0
//                   ? `${currentCategory?.headline} Products`
//                   : 'No products found'}
//               </h2>
//               <p className="text-gray-500">
//                 {filteredProducts?.length} products
//               </p>
//             </div>

//             {filteredProducts.length > 0 ? (
//               <>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredProducts
//                     .slice(0, visibleProducts)
//                     .map((product, idx) => (
//                       <motion.div
//                         key={idx}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: idx * 0.05 }}
//                         viewport={{ once: true }}
//                         className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group"
//                         onClick={() =>
//                           handleProductSelect(product.name, activeCategory)
//                         }
//                       >
//                         <div className="h-48 relative bg-gray-100 overflow-hidden">
//                           <Image
//                             src={product.image || '/placeholder.svg'}
//                             alt={product.name}
//                             fill
//                             className="object-cover group-hover:scale-105 transition-transform duration-300"
//                           />
//                           <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
//                             <Heart className="h-4 w-4 text-[#A8415B]" />
//                           </button>
//                         </div>
//                         <div className="p-5">
//                           <h4 className="font-semibold text-lg text-gray-800 mb-2">
//                             {product.name}
//                           </h4>
//                           <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                             {product.description.split('.')[0]}.
//                           </p>
//                           <button className="text-[#A8415B] text-sm font-medium flex items-center hover:underline">
//                             View Details <ArrowRight className="ml-1 h-3 w-3" />
//                           </button>
//                         </div>
//                       </motion.div>
//                     ))}
//                 </div>

//                 {visibleProducts < filteredProducts.length && (
//                   <div className="mt-12 text-center">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={loadMoreProducts}
//                       className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
//                     >
//                       Load More Products
//                     </motion.button>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="text-center py-16">
//                 <p className="text-gray-500 mb-4">
//                   No products match your search criteria.
//                 </p>
//                 <button
//                   onClick={() => setSearchTerm('')}
//                   className="text-[#A8415B] hover:underline"
//                 >
//                   Clear search filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Product Detail Modal */}
//       <AnimatePresence>
//         {showProductModal && productDetail && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/50 p-4"
//             onClick={handleCloseModal}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-4 border-b">
//                 <h3 className="text-xl font-bold text-gray-800">
//                   {productDetail.name}
//                 </h3>
//                 <button
//                   onClick={handleCloseModal}
//                   className="p-2 rounded-full hover:bg-gray-100"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8 p-6">
//                 <div className="relative h-80 md:h-96 rounded-lg overflow-hidden bg-gray-100">
//                   <Image
//                     src={productDetail.image || '/placeholder.svg'}
//                     alt={productDetail.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 <div>
//                   <div className="mb-6">
//                     <h4 className="text-sm font-medium text-[#A8415B] mb-1">
//                       {currentCategory?.title}
//                     </h4>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                       {productDetail.name}
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       {productDetail.description}
//                     </p>
//                   </div>

//                   {/* Specifications */}
//                   <div className="mb-6">
//                     <button
//                       onClick={() => setExpandedSpecs(!expandedSpecs)}
//                       className="flex justify-between items-center w-full bg-gray-100 p-4 rounded-lg mb-2 hover:bg-gray-200 transition-colors"
//                     >
//                       <span className="font-semibold">Specifications</span>
//                       {expandedSpecs ? (
//                         <ChevronUp className="h-5 w-5" />
//                       ) : (
//                         <ChevronDown className="h-5 w-5" />
//                       )}
//                     </button>

//                     {expandedSpecs && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         transition={{ duration: 0.3 }}
//                         className="bg-gray-50 p-5 rounded-lg"
//                       >
//                         <ul className="space-y-2">
//                           {productDetail.specifications.map((spec, idx) => (
//                             <li
//                               key={idx}
//                               className="text-gray-700 flex items-start"
//                             >
//                               <div className="h-5 w-5 rounded-full bg-[#A8415B]/10 text-[#A8415B] flex items-center justify-center text-xs mr-3 mt-0.5">
//                                 •
//                               </div>
//                               {spec}
//                             </li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     )}
//                   </div>

//                   {/* Applications */}
//                   <div className="mb-8">
//                     <button
//                       onClick={() => setExpandedApps(!expandedApps)}
//                       className="flex justify-between items-center w-full bg-gray-100 p-4 rounded-lg mb-2 hover:bg-gray-200 transition-colors"
//                     >
//                       <span className="font-semibold">Applications</span>
//                       {expandedApps ? (
//                         <ChevronUp className="h-5 w-5" />
//                       ) : (
//                         <ChevronDown className="h-5 w-5" />
//                       )}
//                     </button>

//                     {expandedApps && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         transition={{ duration: 0.3 }}
//                         className="bg-gray-50 p-5 rounded-lg"
//                       >
//                         <ul className="space-y-2">
//                           {productDetail.applications.map((app, idx) => (
//                             <li
//                               key={idx}
//                               className="text-gray-700 flex items-start"
//                             >
//                               <div className="h-5 w-5 rounded-full bg-[#A8415B]/10 text-[#A8415B] flex items-center justify-center text-xs mr-3 mt-0.5">
//                                 •
//                               </div>
//                               {app}
//                             </li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     )}
//                   </div>

//                   <div className="flex flex-wrap gap-4">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-[#A8415B] text-white px-6 py-3 rounded-md font-medium flex items-center shadow-md"
//                     >
//                       Request Quote <ArrowRight className="ml-2 h-4 w-4" />
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="border border-[#A8415B] text-[#A8415B] px-6 py-3 rounded-md font-medium flex items-center"
//                     >
//                       Download Spec Sheet <Download className="ml-2 h-4 w-4" />
//                     </motion.button>
//                   </div>
//                 </div>
//               </div>

//               {/* Similar Products */}
//               <div className="border-t border-gray-200 p-6">
//                 <h4 className="text-xl font-semibold mb-6">Similar Products</h4>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {currentCategory?.products
//                     .filter((p) => p.name !== productDetail.name)
//                     .slice(0, 4)
//                     .map((product, idx) => (
//                       <div
//                         key={idx}
//                         className="p-3 border rounded-lg hover:border-[#A8415B] cursor-pointer transition-colors"
//                         onClick={() => {
//                           setSelectedProduct(product.name);
//                           setExpandedSpecs(false);
//                           setExpandedApps(false);
//                         }}
//                       >
//                         <div className="h-24 relative bg-gray-100 rounded-md mb-2 overflow-hidden">
//                           <Image
//                             src={product.image || '/placeholder.svg'}
//                             alt={product.name}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <h5 className="text-sm font-medium text-gray-800 truncate">
//                           {product.name}
//                         </h5>
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-[#E7DFD9] to-[#F5F1EE]">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//               Need Help Choosing a Product?
//             </h2>
//             <p className="text-xl text-gray-700 mb-10 leading-relaxed">
//               Let Match the Right Product to Your Market. Our experts are here
//               to help you find the perfect solution for your needs.
//             </p>
//             <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
//               <motion.a
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 href="https://wa.me/919909479990"
//                 className="bg-[#A8415B] text-white p-5 rounded-xl font-medium flex items-center justify-center shadow-lg group"
//               >
//                 <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
//                 WhatsApp +91 99094 79990
//               </motion.a>
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-white text-[#A8415B] p-5 rounded-xl font-medium flex items-center justify-center shadow-md border-2 border-transparent hover:border-[#A8415B] transition-all group"
//               >
//                 <Mail className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
//                 Send Us Your Requirements
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Download,
  ArrowRight,
  Phone,
  Mail,
  ShoppingBag,
} from 'lucide-react';
import { productCategories, productDetails } from '@/constants/constants';

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/catagoeies/COVER IMAGE.jpg')" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A8415B]/70 to-[#7C1D35]/70"></div>
        {/* Optional pattern overlay */}
        <div className="absolute inset-0 bg-black opacity-5 pattern-diagonal-lines pattern-white pattern-bg-transparent pattern-size-4"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-white mb-8 hover:underline transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Dehydrated Ingredients for Global Markets
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
              Trusted by importers, food brands, and ingredient buyers across
              the globe. Experience the quality that sets industry standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#A8415B] px-8 py-4 rounded-md font-medium shadow-lg flex items-center"
                onClick={() => {
                  const element = document.getElementById('categories-grid');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
              >
                Browse Categories <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium flex items-center"
              >
                Download Catalog <Download className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50" id="categories-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Product Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of premium dehydrated
                ingredients, carefully processed to maintain nutritional value
                and flavor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, idx) => {
                const categoryData = productDetails[category.id];
                const productCount = categoryData?.products?.length || 0;

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/products/${category.id}`}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-105">
                        <div className="h-48 relative bg-gray-100 overflow-hidden">
                          <Image
                            src={
                              categoryData?.categoryImage ||
                              `/category-images/${category.id}.jpg`
                            }
                            alt={category.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center justify-between text-white">
                              <span className="text-sm font-medium">
                                {productCount} Products
                              </span>
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 flex-shrink-0">
                              <Image
                                src={
                                  category.image ||
                                  `/categories/${category.id}.jpg`
                                }
                                alt={category.title}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#A8415B] transition-colors">
                              {category.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {categoryData?.description ||
                              'Explore our premium range of dehydrated products.'}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 flex items-center">
                              <ShoppingBag className="h-4 w-4 mr-1" />
                              {productCount} Products
                            </span>
                            <span className="text-[#A8415B] text-sm font-medium flex items-center group-hover:underline">
                              View Products{' '}
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Our Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards in processing and quality
                control
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#A8415B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-[#A8415B]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Carefully selected raw materials processed using advanced
                  dehydration techniques
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#A8415B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-[#A8415B]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Global Standards
                </h3>
                <p className="text-gray-600">
                  All products meet international quality and safety standards
                  for global markets
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#A8415B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-[#A8415B]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Reliable Supply
                </h3>
                <p className="text-gray-600">
                  Consistent availability and timely delivery to meet your
                  business needs
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#E7DFD9] to-[#F5F1EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Explore Our Products?
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Browse our categories to find the perfect dehydrated ingredients
              for your business needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919909479990"
                className="bg-[#A8415B] text-white p-5 rounded-xl font-medium flex items-center justify-center shadow-lg group"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                WhatsApp +91 99094 79990
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-[#A8415B] p-5 rounded-xl font-medium flex items-center justify-center shadow-md border-2 border-transparent hover:border-[#A8415B] transition-all group"
              >
                <Mail className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Send Us Your Requirements
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
