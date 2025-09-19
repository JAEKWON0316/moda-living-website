'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ShoppingBag, ArrowRight, Star, Check, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isVideoReady, setIsVideoReady] = useState(false)

  const videos = [
    '/videos/products/moda-hero-video.mp4',
    '/videos/products/product-demo-1.mp4',
    '/videos/products/product-demo-2.mp4',
    '/videos/products/product-demo-3.mp4',
    '/videos/products/product-demo-4.mp4',
    '/videos/products/lifestyle-demo-1.mp4',
    '/videos/products/lifestyle-demo-2.mp4',
    '/videos/products/assembly-guide.mp4'
  ]

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  // 영상 재생 시작
  const handlePlayVideo = () => {
    setShowVideo(true)
    setIsVideoReady(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 md:pt-0">
      {/* 3D 배경 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* 상단 배지 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg"
            >
              <span className="text-primary-600 font-semibold text-sm">🏆고품질 원료 사용</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              깔끔한 공간,{' '}
              <span className="gradient-text">
                지속가능한
              </span>{' '}
              라이프스타일
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              모다리빙과 함께하는 스마트한 분리수거
              <br />
              <span className="text-primary-600 font-medium">
                디자인과 실용성의 완벽한 조화
              </span>
            </motion.p>

            {/* 특징 포인트 */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8 text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                '스택형 공간절약',
                '최고급 원료 사용',
                '모던 디자인',
                '다용도 활용'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA 버튼들 */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="#products"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                제품 둘러보기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="https://smartstore.naver.com/modahlv"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 glass-morphism text-gray-900 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                구매하기
              </Link>
            </motion.div>

            {/* 소셜 프루프 */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">4.8점</span>
                <span className="text-gray-500">(1,247개 리뷰)</span>
              </div>
              
              <div className="text-gray-600">
                <span className="font-semibold text-primary-600">10,000+</span> 만족한 고객
              </div>
            </motion.div>
          </motion.div>

          {/* 제품 이미지/비디오 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl overflow-hidden">
              {!showVideo ? (
                <>
                  {/* 정적 썸네일 이미지 (가장 확실한 방법) */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/products/hero-thumbnail.jpg"
                      alt="모다리빙 분리수거함 - 모던하고 실용적인 디자인"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    
                    {/* 썸네일 위에 비디오 플레이 오버레이 */}
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <motion.button
                        onClick={handlePlayVideo}
                        className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl hover:bg-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        <Play className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary-600 ml-1" />
                      </motion.button>
                    </div>

                    {/* 영상 정보 배지 */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium">
                      <span className="flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        제품 소개 영상
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative w-full h-full bg-black">
                  {/* 실제 영상 재생 - 클릭 시에만 로드 */}
                  {isVideoReady && (
                    <video
                      key={currentVideoIndex} // 영상 변경 시 재렌더링
                      src={videos[currentVideoIndex]}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      preload="metadata"
                      onLoadStart={() => console.log('Video loading started')}
                      onCanPlay={() => console.log('Video ready to play')}
                    />
                  )}
                  
                  {/* 영상 닫기 버튼 */}
                  <button
                    onClick={() => {
                      setShowVideo(false)
                      setIsVideoReady(false)
                    }}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-colors text-lg sm:text-xl z-10"
                  >
                    ×
                  </button>

                  {/* 영상 네비게이션 */}
                  <button
                    onClick={prevVideo}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-colors text-lg sm:text-xl z-10"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-colors text-lg sm:text-xl z-10"
                  >
                    →
                  </button>

                  {/* 영상 카운터 */}
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                    {currentVideoIndex + 1} / {videos.length}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 cursor-pointer flex flex-col items-center"
        >
          <span className="text-sm mb-2">아래로 스크롤</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
