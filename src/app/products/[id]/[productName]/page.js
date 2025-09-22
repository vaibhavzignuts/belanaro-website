'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Download,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  Mail,
  Heart,
  Share2,
  ShoppingBag,
  CheckCircle,
  Star,
  Truck,
  Shield,
  Award,
} from 'lucide-react';
import { productCategories, productDetails } from '@/constants/constants';

export default function ProductDetailsPage({}) {
  const router = useRouter();
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  const [expandedApps, setExpandedApps] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const params = useParams();
  const categoryId = params.id;
  const productName = params.productName;

  // Decode product name from URL
  const decodedProductName = decodeURIComponent(productName);

  const currentCategory = productDetails[categoryId];
  const categoryInfo = productCategories.find((cat) => cat.id === categoryId);
  const productDetail = currentCategory?.products.find(
    (product) => product.name === decodedProductName
  );

  useEffect(() => {
    // Close image modal when escape key is pressed
    const handleEsc = (event) => {
      if (event.keyCode === 27) setIsImageModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!currentCategory || !categoryInfo || !productDetail) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="text-[#A8415B] hover:underline">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  // Get similar products (excluding current product)
  const similarProducts = currentCategory.products
    .filter((p) => p.name !== productDetail.name)
    .slice(0, 4);

  // Mock additional images for gallery (you can modify this based on your data structure)
  const productImages = [
    productDetail.image || '/placeholder.svg',
    // Add more images if available in your data structure
    // productDetail.image2 || '/placeholder.svg',
    // productDetail.image3 || '/placeholder.svg',
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productDetail.name,
          text: productDetail.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600 flex-wrap">
            <Link href="/products" className="hover:text-[#A8415B]">
              Categories
            </Link>
            <ArrowRight className="h-4 w-4 mx-2" />
            <Link
              href={`/products/${categoryId}`}
              className="hover:text-[#A8415B]"
            >
              {categoryInfo.title}
            </Link>
            <ArrowRight className="h-4 w-4 mx-2" />
            <span className="text-gray-800 font-medium truncate">
              {productDetail.name}
            </span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden bg-gray-100 group">
                  <Image
                    src={productImages[selectedImageIndex]}
                    alt={productDetail.name}
                    fill
                    className="object-cover cursor-zoom-in"
                    onClick={() => setIsImageModalOpen(true)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors cursor-zoom-in" />
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 p-3 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isFavorite
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                </div>

                {/* Image Thumbnails (if multiple images available) */}
                {productImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImageIndex === index
                            ? 'border-[#A8415B]'
                            : 'border-gray-200'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${productDetail.name} ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-[#A8415B] bg-[#A8415B]/10 px-3 py-1 rounded-full">
                      {categoryInfo.title}
                    </span>
                    <button
                      onClick={handleShare}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      title="Share product"
                    >
                      <Share2 className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {productDetail.name}
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {productDetail.description}
                  </p>

                  {/* Key Features */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Award className="h-6 w-6 text-[#A8415B]" />
                      <div>
                        <div className="font-semibold text-sm">
                          Premium Quality
                        </div>
                        <div className="text-xs text-gray-600">Grade A</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Shield className="h-6 w-6 text-[#A8415B]" />
                      <div>
                        <div className="font-semibold text-sm">Certified</div>
                        <div className="text-xs text-gray-600">Food Safe</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <Truck className="h-6 w-6 text-[#A8415B]" />
                      <div>
                        <div className="font-semibold text-sm">
                          Global Shipping
                        </div>
                        <div className="text-xs text-gray-600">Worldwide</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <button
                    onClick={() => setExpandedSpecs(!expandedSpecs)}
                    className="flex justify-between items-center w-full bg-gray-100 p-4 rounded-lg mb-2 hover:bg-gray-200 transition-colors"
                  >
                    <span className="font-semibold text-lg">
                      Technical Specifications
                    </span>
                    {expandedSpecs ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedSpecs && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 p-6 rounded-lg overflow-hidden"
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          {productDetail.specifications.map((spec, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-[#A8415B] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Applications */}
                <div className="mb-8">
                  <button
                    onClick={() => setExpandedApps(!expandedApps)}
                    className="flex justify-between items-center w-full bg-gray-100 p-4 rounded-lg mb-2 hover:bg-gray-200 transition-colors"
                  >
                    <span className="font-semibold text-lg">
                      Applications & Uses
                    </span>
                    {expandedApps ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedApps && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 p-6 rounded-lg overflow-hidden"
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          {productDetail.applications.map((app, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <ShoppingBag className="h-5 w-5 text-[#A8415B] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{app}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-[#A8415B] text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center shadow-lg hover:bg-[#8f3650] transition-colors"
                  >
                    Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border-2 border-[#A8415B] text-[#A8415B] px-6 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-[#A8415B] hover:text-white transition-colors"
                  >
                    Download Spec Sheet <Download className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Similar Products
                </h2>
                <Link
                  href={`/products/${categoryId}`}
                  className="text-[#A8415B] font-medium hover:underline flex items-center"
                >
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-pointer"
                    onClick={() =>
                      router.push(
                        `/products/${categoryId}/${encodeURIComponent(
                          product.name
                        )}`
                      )
                    }
                  >
                    <div className="h-40 relative bg-gray-100 overflow-hidden">
                      <Image
                        src={product.image || '/placeholder.svg'}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 truncate">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {product.description.split('.')[0]}.
                      </p>
                      <span className="text-[#A8415B] text-sm font-medium flex items-center hover:underline">
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#E7DFD9] to-[#F5F1EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Interested in {productDetail.name}?
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Get in touch with our experts to discuss pricing, specifications,
              and bulk orders.
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
                Send Inquiry
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={productImages[selectedImageIndex]}
                alt={productDetail.name}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
