'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, ShoppingBag, Eye, Heart, Plus } from 'lucide-react'
import { products } from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'
import ProductDetail from './ProductDetail'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  
  const categories = [
    { id: 'all', name: '전체' },
    { id: 'home', name: '가정용' },
    { id: 'office', name: '업소용' },
    { id: 'premium', name: '프리미엄' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => 
        Array.isArray(product.category) 
          ? product.category.includes(selectedCategory)
          : product.category === selectedCategory
      )

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            우리의 <span className="gradient-text">제품</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 공간과 용도에 맞는 모다리빙의 분리수거함을 만나보세요
          </p>
        </motion.div>

        {/* 카테고리 필터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-morphism p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-white/30'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 제품 그리드 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                {/* 제품 이미지 영역 */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* 실제 제품 이미지 */}
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* 할인 뱃지 */}
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      -{product.discount}% 할인
                    </div>
                  )}

                  {/* 재고 상태 */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.inStock 
                        ? 'bg-primary-100 text-primary-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? '재고 있음' : '품절'}
                    </span>
                  </div>

                  {/* 호버 시 액션 버튼들 */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  >
                    <motion.button
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-primary-600 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-accent-600 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="h-5 w-5" />
                    </motion.button>
                  </motion.div>
                </div>
                
                {/* 제품 정보 */}
                <div className="p-6">
                  {/* 평점 */}
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {product.rating} ({product.reviews.toLocaleString()}개 리뷰)
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* 주요 특징 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* 가격 및 구매 버튼 */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice.toLocaleString()}원
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary-600">
                        {product.price.toLocaleString()}원
                      </span>
                    </div>
                    
                    <Link
                      href="https://smartstore.naver.com/modahlv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors transform hover:scale-105"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>구매하기</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* 추가 예정 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: filteredProducts.length * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="bg-white/50 border-2 border-dashed border-gray-300 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary-400 h-full flex flex-col">
              {/* 카드 내용 */}
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                {/* Plus 아이콘 */}
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                >
                  <Plus className="h-10 w-10 text-primary-600" />
                </motion.div>

                {/* 제목 */}
                <h3 className="text-2xl font-bold mb-3 text-gray-700 group-hover:text-primary-600 transition-colors">
                  새로운 제품
                </h3>
                
                {/* 설명 */}
                <p className="text-gray-500 mb-6 leading-relaxed">
                  더 다양한 사이즈와 기능의<br />
                  분리수거함이 곧 출시됩니다
                </p>

                {/* Coming Soon 뱃지 */}
                <div className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-medium shadow-lg">
                  Coming Soon
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 더 많은 제품 보기 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="https://smartstore.naver.com/modahlv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            <span>전체 제품 보러가기</span>
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
      
      {/* 제품 상세페이지 모달 */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  )
}
