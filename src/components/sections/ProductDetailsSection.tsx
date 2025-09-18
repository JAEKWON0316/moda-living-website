'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Eye, X } from 'lucide-react'
import Image from 'next/image'

// 1~9번까지 순서대로 이미지 배열
const detailImages = [
  '/images/product-details/detail-materials1.jpg',
  '/images/product-details/detail-materials2.jpg',
  '/images/product-details/detail-materials3.jpg',
  '/images/product-details/detail-materials4.jpg',
  '/images/product-details/detail-materials5.jpg',
  '/images/product-details/detail-materials6.jpg',
  '/images/product-details/detail-materials7.jpg',
  '/images/product-details/detail-materials8.jpg',
  '/images/product-details/detail-materials9.jpg'
]

export default function ProductDetailsSection() {
  const [showModal, setShowModal] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const openModal = (index: number) => {
    setModalImageIndex(index)
    setShowModal(true)
  }

  return (
    <>
      <section id="product-details" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              제품 <span className="gradient-text">상세정보</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              모다리빙 분리수거함의 자세한 특징과 사용법을 확인해보세요
            </p>
          </motion.div>

          {/* 상세 이미지들 - 세로 일렬 배치 */}
          <div className="max-w-4xl mx-auto space-y-8">
            {detailImages.map((imageSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative w-full bg-white rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={imageSrc}
                    alt={`모다리빙 상세정보 ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => openModal(index)}
                  />
                  
                  {/* 이미지 확대 아이콘 */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 이미지 확대 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-6xl max-h-[90vh] w-full h-full"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            
            <div className="relative w-full h-full">
              <Image
                src={detailImages[modalImageIndex]}
                alt={`모다리빙 상세정보 ${modalImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}