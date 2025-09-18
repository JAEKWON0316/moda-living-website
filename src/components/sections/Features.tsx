'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: '🏠',
    title: '공간 효율성',
    description: '스택형 구조로 좁은 공간에서도 최대 효율을 실현합니다.',
    details: ['수직 적재 시스템', '최소 점유 면적', '모듈형 설계']
  },
  {
    icon: '♻️',
    title: '친환경 소재',
    description: '100% 재활용 가능한 친환경 PP 플라스틱을 사용합니다.',
    details: ['재활용 가능 소재', 'BPA-free 인증', '환경 인증 획득']
  },
  {
    icon: '🎨',
    title: '모던 디자인',
    description: '어떤 인테리어와도 조화를 이루는 미니멀한 디자인입니다.',
    details: ['미니멀 디자인', '다양한 컬러 옵션', '트렌드 반영']
  },
  {
    icon: '🔧',
    title: '쉬운 사용법',
    description: '복잡한 조립 없이 간단하게 설치하고 바로 사용할 수 있습니다.',
    details: ['원터치 조립', '직관적 사용법', '매뉴얼 불필요']
  },
  {
    icon: '💪',
    title: '뛰어난 내구성',
    description: '일상적인 사용에 견딜 수 있도록 설계된 견고한 구조입니다.',
    details: ['충격 저항성', '변형 방지', '5년 품질보증']
  },
  {
    icon: '🧽',
    title: '쉬운 청소',
    description: '매끄러운 표면과 분리 가능한 구조로 청소가 간편합니다.',
    details: ['분리 가능 구조', '항균 코팅', '물세탁 가능']
  }
]

const benefits = [
  {
    title: '가정에서',
    description: '주방, 거실, 베란다 어디든 깔끔한 분리수거 환경 조성',
    stats: '공간 절약 70%'
  },
  {
    title: '사무실에서',
    description: '직원들의 분리수거 의식 향상과 오피스 환경 개선',
    stats: '효율성 증가 85%'
  },
  {
    title: '상업 공간에서',
    description: '카페, 식당 등에서 고객 만족도와 브랜드 이미지 향상',
    stats: '만족도 95%'
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* 제품 특징 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            왜 <span className="gradient-text">모다리빙</span>을 선택해야 할까요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            단순한 분리수거함이 아닌, 라이프스타일을 바꾸는 혁신적인 솔루션입니다
          </p>
        </motion.div>

        {/* 특징 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* 아이콘 */}
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* 제목 */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                
                {/* 설명 */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* 상세 특징들 */}
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* 호버 시 나타나는 화살표 */}
                <motion.div
                  className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="h-6 w-6 text-primary-600" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 사용 공간별 혜택 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            다양한 공간에서의 <span className="gradient-text">활용 혜택</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
                {/* 통계 */}
                <div className="inline-block px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-6">
                  {benefit.stats}
                </div>

                {/* 제목 */}
                <h4 className="text-2xl font-bold mb-4 text-gray-900">
                  {benefit.title}
                </h4>

                {/* 설명 */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 비교 테이블 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              <span className="gradient-text">모다리빙</span> VS 일반 분리수거함
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left text-gray-900 font-semibold">비교 항목</th>
                  <th className="py-4 px-6 text-center text-primary-600 font-semibold">모다리빙</th>
                  <th className="py-4 px-6 text-center text-gray-500 font-semibold">일반 제품</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-6 text-gray-900 font-medium">공간 효율성</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      <Check className="h-4 w-4 mr-1" /> 우수
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      보통
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900 font-medium">디자인</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      <Check className="h-4 w-4 mr-1" /> 모던
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      구식
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900 font-medium">내구성</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      <Check className="h-4 w-4 mr-1" /> 5년 보증
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      1년
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-900 font-medium">청소 편의성</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      <Check className="h-4 w-4 mr-1" /> 매우 쉬움
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      어려움
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
