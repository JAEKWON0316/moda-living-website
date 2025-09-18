'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const contactInfo = [
  {
    icon: Phone,
    title: '전화 문의',
    content: '031-358-2711',
    description: '평일 09:00 - 18:00',
    href: 'tel:031-358-2711'
  },
  {
    icon: Mail,
    title: '이메일 문의',
    content: 'wsspbox@naver.com',
    description: '24시간 접수 가능',
    href: 'mailto:wsspbox@naver.com'
  },
  {
    icon: MapPin,
    title: '본사 주소',
    content: '경기도 화성시 장안면 수정로 64-15',
    description: '(주)신일글로텍',
    href: 'https://maps.google.com'
  },
  {
    icon: Clock,
    title: '운영 시간',
    content: '평일 09:00 - 18:00',
    description: '토/일/공휴일 휴무',
    href: null
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직 (실제로는 백엔드 API 호출)
    console.log('Form submitted:', formData)
    alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
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
            언제든지 <span className="gradient-text">문의하세요</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            모다리빙 제품에 대한 궁금한 점이 있으시거나 구매를 원하신다면 언제든지 연락주세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                연락처 정보
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary-600" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h4>
                        
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="text-lg text-primary-600 hover:text-primary-700 font-medium block mb-1"
                          >
                            {info.content}
                          </Link>
                        ) : (
                          <div className="text-lg text-gray-800 font-medium mb-1">
                            {info.content}
                          </div>
                        )}
                        
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* 소셜 미디어 & 구매 채널 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-accent-600 text-white"
            >
              <h4 className="text-2xl font-bold mb-6">구매 채널</h4>
              
              <div className="space-y-4">
                <Link
                  href="https://smartstore.naver.com/modahlv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ShoppingBag className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">네이버 스마트스토어</div>
                    <div className="text-sm opacity-90">공식 온라인 스토어</div>
                  </div>
                </Link>
                
                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/10">
                  <MessageCircle className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">카카오톡 상담</div>
                    <div className="text-sm opacity-90">실시간 상담 서비스</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 문의 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                문의하기
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="홍길동"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      전화번호
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 유형 *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">문의 유형을 선택하세요</option>
                    <option value="product">제품 문의</option>
                    <option value="purchase">구매 문의</option>
                    <option value="as">A/S 문의</option>
                    <option value="partnership">제휴 문의</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="문의하실 내용을 상세히 적어주세요."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-colors transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  <span>문의 보내기</span>
                </motion.button>
              </form>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  개인정보보호정책에 따라 수집된 정보는 문의 답변 목적으로만 사용됩니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
