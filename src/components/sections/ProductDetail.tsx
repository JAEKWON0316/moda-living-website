'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Star, ShoppingBag, Heart, Truck, Shield, RefreshCw, Check, 
  Plus, Minus, X, ChevronLeft, ChevronRight, Eye, Package,
  Award, Recycle, Home, Clock
} from 'lucide-react'
import Image from 'next/image'
import { Product } from '@/data/products'

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.specifications.colors[0])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  
  // 제품 이미지만 사용 (상세 이미지 제외)
  const productImages = product.images

  const colorMap = {
    '화이트': '#FFFFFF',
    '베이지': '#F5F5DC', 
    '그레이': '#808080',
    '그라데이션': 'linear-gradient(45deg, #FFFFFF, #808080)'
  }

  const features = [
    {
      icon: <Package className="h-6 w-6" />,
      title: '완벽한 분리수거',
      description: product.id.includes('3tier') 
        ? '일반/재활용/음식물 3단계 완벽 분리' 
        : '일반/재활용 2단계 완벽 분리'
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: '공간 효율성',
      description: '스택형 구조로 최소 공간 최대 활용'
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: '고품질 원료 소재',
      description: 'BPA-free PP 플라스틱, 100% 재활용 가능'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: '프리미엄 디자인',
      description: '모던한 디자인으로 인테리어 완성'
    }
  ]

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const openImageModal = (index: number) => {
    setModalImageIndex(index)
    setShowImageModal(true)
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-y-auto"
        >
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="sticky top-6 right-6 z-10 ml-auto mr-6 mt-6 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid lg:grid-cols-2 gap-8 p-8 pt-0">
            {/* 제품 이미지 갤러리 */}
            <div className="space-y-4">
              {/* 메인 이미지 */}
              <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden group flex items-center justify-center">
                <Image
                  src={productImages[selectedImageIndex]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="max-w-full max-h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  onClick={() => openImageModal(selectedImageIndex)}
                />
                
                {/* 이미지 네비게이션 */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* 이미지 확대 아이콘 */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="h-4 w-4 text-white" />
                </div>

                {/* 할인 뱃지 */}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    -{product.discount}% 할인
                  </div>
                )}
              </div>

              {/* 썸네일 갤러리 */}
              <div className="grid grid-cols-5 gap-3 max-h-48 overflow-y-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-3 transition-all duration-300 ${
                      selectedImageIndex === index 
                        ? 'border-primary-500 ring-2 ring-primary-300 scale-105' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    style={{ height: '80px', width: '80px' }}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} 이미지 ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </button>
                ))}
              </div>

              {/* 이미지 카운터 */}
              <div className="text-center text-sm text-gray-500">
                {selectedImageIndex + 1} / {productImages.length}
              </div>
            </div>

            {/* 제품 정보 */}
            <div className="space-y-6">
              {/* 제품명 & 평점 */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-600 ml-2">({product.reviews}개 리뷰)</span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* 가격 */}
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price.toLocaleString()}원
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {product.originalPrice.toLocaleString()}원
                  </span>
                )}
                {product.discount && (
                  <span className="text-accent-600 font-semibold text-lg">
                    {product.discount}% 할인
                  </span>
                )}
              </div>

              {/* 색상 선택 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">색상 선택</h3>
                <div className="flex space-x-3">
                  {product.specifications.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border-2 transition-colors ${
                        selectedColor === color
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* 제품 스펙 */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-2xl">
                <div>
                  <span className="text-sm text-gray-600">용량</span>
                  <p className="font-semibold text-gray-900">{product.specifications.capacity}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">크기</span>
                  <p className="font-semibold text-gray-900">{product.specifications.dimensions}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">무게</span>
                  <p className="font-semibold text-gray-900">{product.specifications.weight}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">재질</span>
                  <p className="font-semibold text-gray-900">{product.specifications.material}</p>
                </div>
              </div>

              {/* 주요 특징 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">주요 특징</h3>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100">
                      <div className="text-primary-600 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 수량 선택 */}
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">수량:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 구매 버튼들 */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-shrink-0 p-3 rounded-full border-2 transition-colors ${
                    isWishlisted
                      ? 'border-primary-500 bg-primary-50 text-primary-600'
                      : 'border-gray-300 text-gray-600 hover:border-primary-500 hover:text-primary-600'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                
                <a
                  href="https://smartstore.naver.com/modahlv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-full font-semibold text-center hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>네이버 스마트스토어에서 구매</span>
                </a>
              </div>

              {/* 배송/보증 정보 */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <Truck className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">무료배송</p>
                  <p className="text-xs text-gray-600">전국 무료배송</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">품질보증</p>
                  <p className="text-xs text-gray-600">1년 품질보증</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">교환/반품</p>
                  <p className="text-xs text-gray-600">7일 무료 교환</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 이미지 확대 모달 */}
      <AnimatePresence>
        {showImageModal && (
          <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
            >
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
              
              <div className="relative w-full h-full">
                <Image
                  src={productImages[modalImageIndex]}
                  alt={`${product.name} 상세 이미지`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* 모달 이미지 네비게이션 */}
              <button
                onClick={() => setModalImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => setModalImageIndex((prev) => (prev + 1) % productImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* 모달 이미지 카운터 */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {modalImageIndex + 1} / {productImages.length}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}