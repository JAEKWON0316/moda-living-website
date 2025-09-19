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
    number: '100+',
    label: '고객 리뷰',
    description: '신뢰감 있는 후기'
  }
]

const timeline = [
  {
    year: '2024',
    title: '모다리빙 브랜드 런칭',
    description: '최고급 원료 생활용품 전문 브랜드로 시작'
  },
  {
    year: '2024.12',
    title: '유해물질 및 하중 테스트 완료',
    description: '공신력 있는 기관의 안전성·내구성 인증 획득'
  },
  {
    year: '2025.01',
    title: '공간효율성과 디자인 특허 출원', 
    description: '혁신적인 스택형 디자인으로 특허 출원'
  },
  {
    year: '2025.07',
    title: '첫 번째 분리수거함 출시',
    description: '혁신적인 스택형 디자인으로 시장 진입'
  },
  {
    year: '2025.08',
    title: '온라인 판매 확대',
    description: '네이버 스마트스토어 공식 입점'
  },
  {
    year: '2025.10',
    title: '제품 라인업 확장',
    description: '다양한 크기와 용도의 제품군 출시'
  },
  {
    year: '2025~',
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
            {/* 트렌디한 텍스트 영역 */}
            <div className="relative">
              <div className="relative p-8 rounded-3xl overflow-hidden group">
                {/* 트렌디한 그라데이션 배경 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50/60 to-gray-50/80"></div>
                <div className="absolute inset-0 glass-morphism backdrop-blur-sm border border-white/20 shadow-2xl"></div>
                
                {/* 호버 시 글로우 효과 */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-400/0 to-stone-600/0 group-hover:from-stone-400/5 group-hover:to-stone-600/5 transition-all duration-700"></div>
                
                {/* 장식적 요소 */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-stone-400/30 rounded-full"></div>
                <div className="absolute top-12 right-8 w-1 h-1 bg-stone-300/40 rounded-full"></div>
                <div className="absolute bottom-8 left-6 w-3 h-3 bg-stone-200/30 rounded-full"></div>

                <div className="relative z-10">
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="gradient-text">모다리빙</span>의 이야기
                  </motion.h2>
                  
                  <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative pl-6 border-l-4 border-stone-300/50"
                    >
                      <p className="font-medium text-gray-800">
                        모다리빙은 '모으다와 리빙을 합친' 의미로, 현대인의 라이프스타일에 맞는                    
                        실용적이고&nbsp;
                        <br className="hidden lg:block" /> 
                        아름다운 생활용품을 만듭니다.
                      </p>
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      비록 시작한 지 얼마 되지 않은 신생 브랜드이지만, 오랜 시간 축적된 
                      제조 기술과 노하우를 바탕으로 확실한 품질의 제품을 보장합니다. 
                      저희는 고객의 신뢰를 최우선으로 생각하며, 모든 제품에 대해 
                      엄격한 품질 관리를 통해 완벽한 만족을 제공합니다.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      단순히 쓰레기를 담는 용기가 아닌, 공간을 아름답게 하고 
                      환경을 생각하는 지속가능한 제품을 통해 고객의 일상을 변화시킵니다.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-stone-800 font-medium"
                    >
                      우리의 모든 제품은 사용자의 편의성과 환경에 대한 책임을 
                      동시에 고려하여 설계되었습니다.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>

            {/* 핵심 가치 */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <motion.div 
                className="relative p-4 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-primary-50"></div>
                <div className="absolute inset-0 glass-morphism border border-primary-100/50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-primary-600/0 group-hover:from-primary-400/5 group-hover:to-primary-600/5 transition-all duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-primary-800 mb-2">디자인</h4>
                  <p className="text-sm text-primary-600">
                    모던하고 미니멀한 디자인으로 어떤 공간에도 자연스럽게 어울립니다.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative p-4 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-primary-50"></div>
                <div className="absolute inset-0 glass-morphism border border-primary-100/50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-primary-600/0 group-hover:from-primary-400/5 group-hover:to-primary-600/5 transition-all duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-primary-800 mb-2">최고급 원료</h4>
                  <p className="text-sm text-primary-600">
                    고품질 원료 사용으로 튼튼한 내구성을 자랑합니다.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative p-4 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-secondary-50"></div>
                <div className="absolute inset-0 glass-morphism border border-secondary-100/50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/0 to-secondary-600/0 group-hover:from-secondary-400/5 group-hover:to-secondary-600/5 transition-all duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-secondary-800 mb-2">실용성</h4>
                  <p className="text-sm text-secondary-600">
                    사용자의 편의를 최우선으로 고려한 기능적 설계입니다.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative p-4 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-accent-50"></div>
                <div className="absolute inset-0 glass-morphism border border-accent-100/50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400/0 to-accent-600/0 group-hover:from-accent-400/5 group-hover:to-accent-600/5 transition-all duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-accent-800 mb-2">품질</h4>
                  <p className="text-sm text-accent-600">
                    엄격한 품질 관리로 오래 사용할 수 있는 내구성을 보장합니다.
                  </p>
                </div>
              </motion.div>
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
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative text-center p-6 rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* 기존 색상 유지하면서 glassmorphism 효과 */}
                <div className="absolute inset-0 bg-white"></div>
                <div className="absolute inset-0 glass-morphism border border-white/20 shadow-xl"></div>
                
                {/* 호버 시 글로우 효과 - 기존 primary 색상 사용 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-primary-600/0 group-hover:from-primary-400/8 group-hover:to-primary-600/8 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    {stat.number}
                  </div>
                  
                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            )
          })}
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
