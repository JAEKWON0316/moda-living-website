'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, ArrowUp } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  company: [
    { name: '브랜드 소개', href: '#about' },
    { name: '제품 라인업', href: '#products' },
    { name: '고객 후기', href: '#reviews' },
    { name: '매장 찾기', href: '#stores' }
  ],
  support: [
    { name: '고객 지원', href: '#contact' },
    { name: 'A/S 신청', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: '사용법 가이드', href: '#' }
  ],
  legal: [
    { name: '이용약관', href: '#' },
    { name: '개인정보처리방침', href: '#' },
    { name: '환불/반품 정책', href: '#' },
    { name: '제휴 문의', href: '#' }
  ]
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* 메인 푸터 컨텐츠 */}
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* 브랜드 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text">
                MODA LIVING
              </h3>
              <p className="text-gray-400 mt-2 leading-relaxed">
                모던한 라이프스타일을 위한 혁신적인 분리수거함과 생활용품을 제공합니다.
              </p>
            </div>

            {/* 연락처 정보 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>031-358-2711</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>wsspbox@naver.com</span>
              </div>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 mt-1" />
                <span>경기도 화성시 장안면 수정로 64-15<br />(주)신일글로텍</span>
              </div>
            </div>

            {/* 인증 마크 */}
            <div className="mt-6 flex space-x-3">
              <div className="px-3 py-2 bg-gray-700 rounded-lg text-xs text-gray-300">
                KC 안전인증
              </div>
              <div className="px-3 py-2 bg-primary-700 rounded-lg text-xs text-white">
                최고급 원료 인증
              </div>
            </div>
          </motion.div>

          {/* 회사 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold gradient-text mb-6">회사</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 고객 지원 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold gradient-text mb-6">고객 지원</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* 운영 시간 */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <h5 className="font-semibold mb-2 text-white">고객센터 운영시간</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <div>평일: 09:00 - 18:00</div>
                <div>점심: 12:00 - 13:00</div>
                <div className="text-accent-400">토/일/공휴일 휴무</div>
              </div>
            </div>
          </motion.div>

          {/* 법적 정보 & 구매처 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold gradient-text mb-6">법적 정보</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* 공식 스토어 */}
            <div className="p-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl">
              <h5 className="font-semibold mb-3">공식 스토어</h5>
              <Link
                href="https://smartstore.naver.com/modahlv"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary-100 text-primary-700 px-4 py-3 rounded-lg text-center font-semibold hover:bg-primary-200 transition-colors border border-primary-200"
              >
                네이버 스마트스토어 방문
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 회사 정보 */}
            <div className="text-sm text-gray-400">
              <div>상호: (주)신일글로텍 | 대표: 이혁</div>
              <div>사업자등록번호: 654-87-01637 | 통신판매업신고: 2024-화성장안-0057</div>
              <div className="mt-2">
                © 2025 MODA LIVING. All rights reserved.
              </div>
            </div>

            {/* 맨 위로 버튼 */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm">맨 위로</span>
            </motion.button>
          </div>
        </div>

        {/* 추가 법적 고지사항 */}
        <div className="border-t border-gray-700 py-4">
          <div className="text-xs text-gray-500 text-center leading-relaxed">
            <p>
              상품의 색상은 모니터 사양에 따라 실제와 다를 수 있습니다. 
              제품 이미지는 연출된 것으로 실제 구성과 다를 수 있습니다.
            </p>
            <p className="mt-1">
          
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
