'use client'

import { motion } from 'framer-motion'
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
  return (
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
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}