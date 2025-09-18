'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ShoppingCart, Star, Truck, Home } from 'lucide-react'
import Link from 'next/link'

const shoppingMalls = [
  {
    name: '네이버',
    subtitle: '스마트스토어',
    description: '빠른 배송과 신뢰할 수 있는 구매 보장',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    icon: Star,
    href: 'https://smartstore.naver.com/modahlv',
    features: ['네이버페이 결제', '당일/익일배송', '구매보호서비스']
  },
  {
    name: '쿠팡',
    subtitle: '로켓배송',
    description: '빠른 로켓배송으로 당일 또는 익일 배송',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    icon: Truck,
    href: '#',
    features: ['로켓배송', '무료반품', '쿠팡페이']
  },
  {
    name: '오늘의 집',
    subtitle: '인테리어몰',
    description: '인테리어 전문몰에서 만나는 모다리빙',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    icon: Home,
    href: '#',
    features: ['인테리어 전문', '리뷰 풍부', '할인혜택']
  },
  {
    name: 'G마켓',
    subtitle: '오픈마켓',
    description: '다양한 혜택과 함께 합리적인 가격',
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    icon: ShoppingCart,
    href: '#',
    features: ['G페이 적립', '무료배송', '할인쿠폰']
  }
]

export default function ShoppingMalls() {
  return (
    <section className="section-padding bg-white">
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
          {shoppingMalls.map((mall, index) => {
            const IconComponent = mall.icon
            return (
              <motion.div
                key={mall.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`${mall.bgColor} p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300`}>
                  {/* 아이콘 */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 ${mall.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* 제목 */}
                  <div className="text-center mb-4">
                    <h3 className={`text-2xl font-bold ${mall.textColor} mb-1`}>
                      {mall.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {mall.subtitle}
                    </p>
                  </div>

                  {/* 설명 */}
                  <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                    {mall.description}
                  </p>

                  {/* 특징 */}
                  <div className="space-y-2 mb-6">
                    {mall.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 ${mall.color} rounded-full mr-2 flex-shrink-0`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* 구매 버튼 */}
                  <Link
                    href={mall.href}
                    target={mall.href !== '#' ? '_blank' : undefined}
                    rel={mall.href !== '#' ? 'noopener noreferrer' : undefined}
                    className={`${
                      mall.href === '#' 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : `${mall.color} text-white hover:opacity-90 group-hover:shadow-lg`
                    } w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2`}
                  >
                    <span>{mall.href === '#' ? '준비 중' : '구매하기'}</span>
                    {mall.href !== '#' && <ExternalLink className="h-4 w-4" />}
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 하단 안내 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-50 rounded-full">
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
