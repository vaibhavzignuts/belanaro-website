'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { productCategories } from '@/components/home/constants';
// import { productCategories } from './constants';

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedForm, setSelectedForm] = useState('All');
  const [activeProduct, setActiveProduct] = useState(null);

  // Extract all products from all categories
  const allProducts = productCategories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categoryId: category.id,
      categoryTitle: category.title,
      image: category.image,
    }))
  );

  // Get unique product forms for filtering
  const productForms = [
    'All',
    ...new Set(
      allProducts.flatMap((product) =>
        product.variants
          ? product.variants.split(' / ')
          : product.name.includes('Flakes')
          ? 'Flakes'
          : product.name.includes('Chopped')
          ? 'Chopped'
          : product.name.includes('Minced')
          ? 'Minced'
          : product.name.includes('Granules')
          ? 'Granules'
          : product.name.includes('Powder')
          ? 'Powder'
          : 'Other'
      )
    ),
  ];

  // Filter products based on search and form selection
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesForm =
      selectedForm === 'All' ||
      (product.variants && product.variants.includes(selectedForm)) ||
      product.name.includes(selectedForm);

    return matchesSearch && matchesForm;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleProductClick = (product) => {
    setActiveProduct(activeProduct?.name === product.name ? null : product);
  };

  return (
    <div className="min-h-screen bg-[#F5F3F0] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#A8415B] mb-2 text-center">
          All Products
        </h1>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Browse our complete collection of premium dehydrated products - from
          onions and garlic to vegetables, all available in various forms to
          suit your culinary needs.
        </p>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A8415B]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {productForms.map((form, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedForm === form
                    ? 'bg-[#A8415B] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedForm(form)}
              >
                {form}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              variants={productVariants}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                activeProduct?.name === product.name
                  ? 'ring-4 ring-[#A8415B]'
                  : ''
              }`}
              onClick={() => handleProductClick(product)}
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white text-sm px-3 py-1 rounded-full bg-[#A8415B]/80">
                    {product.categoryTitle}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium bg-[#F0E6E8] text-[#A8415B] px-2 py-1 rounded">
                    {product.color}
                  </span>
                  {product.variants &&
                    product.variants.split(' / ').map((variant, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {variant}
                      </span>
                    ))}
                </div>

                {activeProduct?.name === product.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <h4 className="font-medium text-gray-800 mb-1">
                      Key Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 mb-3">
                      <li className="flex items-start">
                        <span className="text-[#A8415B] mr-2">•</span>
                        <span>{product.flavorAroma}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A8415B] mr-2">•</span>
                        <span>{product.benefits.split(';')[0]}</span>
                      </li>
                    </ul>

                    <h4 className="font-medium text-gray-800 mb-1">
                      Applications
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {product.applications}
                    </p>

                    <p className="text-xs text-gray-500">
                      Shelf Life: {product.shelfLife}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No products found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-[#A8415B] text-white rounded-lg hover:bg-[#8A3349] transition-colors"
              onClick={() => {
                setSearchTerm('');
                setSelectedForm('All');
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
