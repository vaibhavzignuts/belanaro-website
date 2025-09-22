'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Download,
  Search,
  ShoppingBag,
  ArrowRight,
  Phone,
  Mail,
  Heart,
  Grid,
  List,
} from 'lucide-react';
import { productCategories, productDetails } from '@/constants/constants';
import { useParams } from 'next/navigation';

export default function ProductsListingPage({}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const params = useParams();
  const router = useRouter();

  const categoryId = params.id;
  console.log(params, 'categoryId');

  const currentCategory = productDetails[categoryId];
  const categoryInfo = productCategories.find((cat) => cat.id === categoryId);

  // Filter products based on search term
  const filteredProducts =
    currentCategory?.products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 9);
  };

  const handleProductClick = (productName) => {
    router.push(`/products/${categoryId}/${encodeURIComponent(productName)}`);
  };

  if (!currentCategory || !categoryInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Category Not Found
          </h1>
          <Link href="/products" className="text-[#A8415B] hover:underline">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb & Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Link href="/products" className="hover:text-[#A8415B]">
              Categories
            </Link>
            <ArrowRight className="h-4 w-4 mx-2" />
            <span className="text-gray-800 font-medium">
              {categoryInfo.title}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {currentCategory.headline}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} products available
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center text-[#A8415B] hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Category Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-100">
                    <Image
                      src={
                        categoryInfo.image || `/categories/${categoryId}.jpg`
                      }
                      alt={categoryInfo.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {categoryInfo.title}
                  </h2>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentCategory.description}
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <ShoppingBag className="mr-2 h-5 w-5 text-[#A8415B]" />
                    Applications
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentCategory.applications}
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src={
                      currentCategory.categoryImage ||
                      `/category-images/${categoryId}.jpg`
                    }
                    alt={categoryInfo.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#A8415B] focus:border-transparent outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white shadow-sm'
                      : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white shadow-sm'
                      : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
              <button className="bg-[#A8415B] text-white px-4 py-2 rounded-md font-medium flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredProducts.length > 0 ? (
              <>
                {viewMode === 'grid' ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts
                      .slice(0, visibleProducts)
                      .map((product, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-pointer"
                          onClick={() => handleProductClick(product.name)}
                        >
                          <div className="h-48 relative bg-gray-100 overflow-hidden">
                            <Image
                              src={product.image || '/placeholder.svg'}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                              <Heart className="h-4 w-4 text-[#A8415B]" />
                            </button>
                          </div>
                          <div className="p-5">
                            <h4 className="font-semibold text-lg text-gray-800 mb-2">
                              {product.name}
                            </h4>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {product.description.split('.')[0]}.
                            </p>
                            <span className="text-[#A8415B] text-sm font-medium flex items-center hover:underline">
                              View Details{' '}
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredProducts
                      .slice(0, visibleProducts)
                      .map((product, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.02 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-pointer"
                          onClick={() => handleProductClick(product.name)}
                        >
                          <div className="flex gap-6">
                            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={product.image || '/placeholder.svg'}
                                alt={product.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                                {product.name}
                              </h4>
                              <p className="text-gray-600 mb-4 line-clamp-2">
                                {product.description}
                              </p>
                              <span className="text-[#A8415B] text-sm font-medium flex items-center hover:underline">
                                View Details{' '}
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                )}

                {visibleProducts < filteredProducts.length && (
                  <div className="mt-12 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={loadMoreProducts}
                      className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
                    >
                      Load More Products
                    </motion.button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Products Found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    No products match your search criteria.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-[#A8415B] hover:underline"
                  >
                    Clear search filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#E7DFD9] to-[#F5F1EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Need Help Choosing a Product?
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Let us help you find the perfect solution for your business needs.
              Our experts are here to assist you.
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
