'use client'

import { motion } from 'framer-motion'
import { Star, ThumbsUp, User, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: '김민정',
    location: '서울 강남구',
    rating: 5,
    date: '2024.12.15',
    verified: true,
    content: '정말 만족스러운 구매였어요! 디자인도 예쁘고 실용적이라서 주방이 훨씬 깔끔해졌습니다. 스택형이라 공간도 많이 절약되고, 분리수거도 편해졌어요. 친구들한테도 추천했습니다.',
    helpfulCount: 23,
    product: '스택형 분리수거함 3단',
    images: ['kitchen-1.jpg', 'kitchen-2.jpg']
  },
  {
    id: 2,
    name: '이상호',
    location: '부산 해운대구',
    rating: 5,
    date: '2024.12.10',
    verified: true,
    content: '사무실에서 사용하고 있는데 정말 좋아요. 직원들이 분리수거를 더 잘하게 되었고, 오피스 분위기도 훨씬 깔끔해졌습니다. 내구성도 좋아서 오래 쓸 수 있을 것 같아요.',
    helpfulCount: 18,
    product: '오피스 분리수거함',
    images: ['office-1.jpg']
  },
  {
    id: 3,
    name: '박지영',
    location: '대구 중구',
    rating: 4,
    date: '2024.12.08',
    verified: true,
    content: '베란다에서 사용 중인데 공간 활용도가 정말 좋습니다. 조립도 쉽고 청소하기도 편해요. 다만 더 다양한 색상이 있으면 좋겠어요. 전반적으로는 매우 만족합니다!',
    helpfulCount: 15,
    product: '멀티 수납함',
    images: ['balcony-1.jpg']
  },
  {
    id: 4,
    name: '최수연',
    location: '인천 남동구',
    rating: 5,
    date: '2024.12.05',
    verified: true,
    content: '아이들과 함께 사용하기 좋아요. 안전한 소재라서 안심되고, 아이들도 분리수거를 재미있게 할 수 있게 되었어요. 가족 모두가 만족하는 제품입니다.',
    helpfulCount: 31,
    product: '가정용 분리수거함',
    images: ['family-1.jpg']
  },
  {
    id: 5,
    name: '정태웅',
    location: '경기 성남시',
    rating: 5,
    date: '2024.12.02',
    verified: true,
    content: '카페를 운영하는데 고객분들이 분리수거를 잘 해주세요. 디자인이 예뻐서 카페 인테리어와도 잘 어울리고, 관리하기도 편합니다. 투자 대비 효과가 정말 좋아요.',
    helpfulCount: 27,
    product: '상업용 분리수거함',
    images: ['cafe-1.jpg', 'cafe-2.jpg']
  }
]

const stats = [
  { number: '4.8', label: '평균 평점', suffix: '/5.0' },
  { number: '1,247', label: '고객 리뷰', suffix: '개' },
  { number: '98.2', label: '재구매 의향', suffix: '%' },
  { number: '10,000', label: '누적 판매', suffix: '+' }
]

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)
  const [filter, setFilter] = useState('all')

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating >= Number(filter))

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % filteredReviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length)
  }

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
            고객들의 <span className="gradient-text">진솔한 후기</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            모다리빙을 선택한 고객들의 실제 경험담을 들어보세요
          </p>
        </motion.div>

        {/* 통계 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-3xl bg-white shadow-lg border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}<span className="text-gray-400">{stat.suffix}</span>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 리뷰 필터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-morphism p-2 rounded-full">
            {[
              { id: 'all', label: '전체' },
              { id: 5, label: '⭐⭐⭐⭐⭐' },
              { id: 4, label: '⭐⭐⭐⭐+' }
            ].map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-white/30'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 메인 리뷰 슬라이더 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              {/* 현재 리뷰 */}
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-gray-900">
                          {filteredReviews[currentReview]?.name}
                        </h4>
                        {filteredReviews[currentReview]?.verified && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            구매 인증
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {filteredReviews[currentReview]?.location} • {filteredReviews[currentReview]?.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${
                          i < filteredReviews[currentReview]?.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>

                {/* 구매 제품 */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                    구매 제품: {filteredReviews[currentReview]?.product}
                  </span>
                </div>

                {/* 리뷰 내용 */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-200" />
                  <p className="text-lg text-gray-700 leading-relaxed pl-6">
                    {filteredReviews[currentReview]?.content}
                  </p>
                </div>

                {/* 도움됨 버튼 */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">
                      도움이 되었어요 ({filteredReviews[currentReview]?.helpfulCount})
                    </span>
                  </button>
                  
                  <div className="text-sm text-gray-500">
                    {currentReview + 1} / {filteredReviews.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
          >
            <ArrowRight className="h-6 w-6 text-gray-600" />
          </button>
        </motion.div>

        {/* 리뷰 그리드 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* 상단 */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < review.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
              </div>

              {/* 내용 */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                {review.content}
              </p>

              {/* 제품명 */}
              <div className="text-xs text-primary-600 font-medium">
                {review.product}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              당신도 모다리빙의 만족한 고객이 되어보세요
            </h3>
            <p className="mb-6 opacity-90">
              지금 주문하면 특별 할인 혜택을 받을 수 있습니다
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              지금 주문하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
