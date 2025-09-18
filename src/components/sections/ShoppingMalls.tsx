'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ShoppingCart, Star, Truck, Home } from 'lucide-react'
import Link from 'next/link'

export default function ShoppingMalls() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="gradient-text">공식 입점</span> 쇼핑몰
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            모다리빙 제품을 다양한 온라인 쇼핑몰에서 안전하고 편리하게 구매하세요
          </p>
        </motion.div>

        {/* 쇼핑몰 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 네이버 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-primary-50 p-8 rounded-3xl border border-primary-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-primary-800 mb-1">네이버</h3>
                <p className="text-gray-600 font-medium">스마트스토어</p>
              </div>
              <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                빠른 배송과 신뢰할 수 있는 구매 보장
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                  네이버페이 결제
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                  당일/익일배송
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                  구매보호서비스
                </div>
              </div>
              <Link
                href="https://smartstore.naver.com/modahlv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white hover:bg-primary-700 group-hover:shadow-lg w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <span>구매하기</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* 쿠팡 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-secondary-50 p-8 rounded-3xl border border-secondary-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-secondary-600 rounded-2xl flex items-center justify-center">
                  <Truck className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-secondary-700 mb-1">쿠팡</h3>
                <p className="text-gray-600 font-medium">로켓배송</p>
              </div>
              <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                빠른 로켓배송으로 당일 또는 익일 배송
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-2"></div>
                  로켓배송
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-2"></div>
                  무료반품
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-2"></div>
                  쿠팡페이
                </div>
              </div>
              <button className="bg-gray-300 text-gray-500 cursor-not-allowed w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2">
                <span>준비 중</span>
              </button>
            </div>
          </motion.div>

          {/* 오늘의 집 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-accent-50 p-8 rounded-3xl border border-accent-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center">
                  <Home className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-accent-700 mb-1">오늘의 집</h3>
                <p className="text-gray-600 font-medium">인테리어몰</p>
              </div>
              <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                인테리어 전문몰에서 만나는 모다리빙
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2"></div>
                  인테리어 전문
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2"></div>
                  리뷰 풍부
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2"></div>
                  할인혜택
                </div>
              </div>
              <button className="bg-gray-300 text-gray-500 cursor-not-allowed w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2">
                <span>준비 중</span>
              </button>
            </div>
          </motion.div>

          {/* G마켓 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-primary-100 p-8 rounded-3xl border border-primary-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary-700 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-primary-800 mb-1">G마켓</h3>
                <p className="text-gray-600 font-medium">오픈마켓</p>
              </div>
              <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                다양한 혜택과 함께 합리적인 가격
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-primary-700 rounded-full mr-2"></div>
                  G페이 적립
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-primary-700 rounded-full mr-2"></div>
                  무료배송
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-primary-700 rounded-full mr-2"></div>
                  할인쿠폰
                </div>
              </div>
              <button className="bg-gray-300 text-gray-500 cursor-not-allowed w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2">
                <span>준비 중</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* 하단 안내 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 rounded-full">
            <ShoppingCart className="h-5 w-5 text-primary-600" />
            <span className="text-gray-700 font-medium">
              모든 쇼핑몰에서 동일한 품질의 정품을 만나보실 수 있습니다
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
