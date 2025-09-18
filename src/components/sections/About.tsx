'use client'

import { motion } from 'framer-motion'
import { Award, Users, Globe, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '10,000+',
    label: '만족한 고객',
    description: '누적 판매 고객 수'
  },
  {
    icon: Award,
    number: '99.2%',
    label: '고객 만족도',
    description: '5점 만점 기준 4.8점'
  },
  {
    icon: Globe,
    number: '50+',
    label: '협력 업체',
    description: '전국 판매 네트워크'
  },
  {
    icon: TrendingUp,
    number: '5년',
    label: '품질 보증',
    description: '무상 A/S 지원'
  }
]

const timeline = [
  {
    year: '2019',
    title: '모다리빙 브랜드 런칭',
    description: '친환경 생활용품 전문 브랜드로 시작'
  },
  {
    year: '2020',
    title: '첫 번째 분리수거함 출시',
    description: '혁신적인 스택형 디자인으로 시장 진입'
  },
  {
    year: '2021',
    title: '온라인 판매 확대',
    description: '네이버 스마트스토어 공식 입점'
  },
  {
    year: '2022',
    title: '제품 라인업 확장',
    description: '다양한 크기와 용도의 제품군 출시'
  },
  {
    year: '2023',
    title: '친환경 인증 획득',
    description: 'KC 안전 인증 및 친환경 마크 획득'
  },
  {
    year: '2024',
    title: '글로벌 진출 준비',
    description: '해외 시장 진출을 위한 기반 구축'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* 브랜드 소개 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              <span className="gradient-text">모다리빙</span>의 이야기
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                모다리빙은 '모던한 리빙'이라는 의미로, 현대인의 라이프스타일에 맞는 
                실용적이고 아름다운 생활용품을 만듭니다.
              </p>
              
              <p>
                단순히 쓰레기를 담는 용기가 아닌, 공간을 아름답게 하고 
                환경을 생각하는 지속가능한 제품을 통해 고객의 일상을 변화시킵니다.
              </p>
              
              <p>
                우리의 모든 제품은 사용자의 편의성과 환경에 대한 책임을 
                동시에 고려하여 설계되었습니다.
              </p>
            </div>

            {/* 핵심 가치 */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary-50 rounded-2xl">
                <h4 className="font-bold text-primary-800 mb-2">디자인</h4>
                <p className="text-sm text-primary-600">
                  모던하고 미니멀한 디자인으로 어떤 공간에도 자연스럽게 어울립니다.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-2xl">
                <h4 className="font-bold text-green-800 mb-2">친환경</h4>
                <p className="text-sm text-green-600">
                  100% 재활용 가능한 소재로 지구 환경을 생각합니다.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-2xl">
                <h4 className="font-bold text-blue-800 mb-2">실용성</h4>
                <p className="text-sm text-blue-600">
                  사용자의 편의를 최우선으로 고려한 기능적 설계입니다.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-2xl">
                <h4 className="font-bold text-purple-800 mb-2">품질</h4>
                <p className="text-sm text-purple-600">
                  엄격한 품질 관리로 오래 사용할 수 있는 내구성을 보장합니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 브랜드 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl overflow-hidden">
              {/* 임시 브랜드 이미지 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">모던한 라이프스타일</h3>
                  <p className="text-gray-600">지속가능한 미래를 위한 선택</p>
                </div>
              </div>
              
              {/* 장식 요소 */}
              <motion.div
                className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute bottom-8 left-8 w-12 h-12 bg-primary-300/30 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* 통계 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-3xl bg-white shadow-lg border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* 입점 쇼핑몰 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            <span className="gradient-text">공식 입점</span> 쇼핑몰
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            모다리빙 제품을 다양한 온라인 쇼핑몰에서 만나보세요
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">네이버</h4>
              <p className="text-sm text-gray-600">스마트스토어</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">쿠팡</h4>
              <p className="text-sm text-gray-600">로켓배송</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">오늘의 집</h4>
              <p className="text-sm text-gray-600">인테리어몰</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-red-600 rounded"></div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">G마켓</h4>
              <p className="text-sm text-gray-600">오픈마켓</p>
            </motion.div>
          </div>
        </motion.div>

        {/* 회사 연혁 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            <span className="gradient-text">모다리빙</span>의 성장 스토리
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            지속적인 혁신과 고객 만족을 통해 성장해온 모다리빙의 여정을 만나보세요
          </p>
        </motion.div>

        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></div>
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="inline-block px-6 py-2 bg-primary-600 text-white rounded-full text-lg font-bold mb-4">
                    {item.year}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* 타임라인 점 */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-white border-4 border-primary-600 rounded-full shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
