'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react'

const videos = [
  {
    src: '/videos/products/moda-hero-video.mp4',
    title: '모다리빙 메인 소개 영상',
    description: '모다리빙 분리수거함의 전체적인 소개'
  },
  {
    src: '/videos/products/product-demo-1.mp4',
    title: '제품 데모 1',
    description: '분리수거함 사용법 및 특징'
  },
  {
    src: '/videos/products/product-demo-2.mp4',
    title: '제품 데모 2',
    description: '다양한 활용 방법 소개'
  },
  {
    src: '/videos/products/product-demo-3.mp4',
    title: '제품 데모 3',
    description: '설치 및 조립 과정'
  },
  {
    src: '/videos/products/product-demo-4.mp4',
    title: '제품 데모 4',
    description: '실제 사용 모습'
  },
  {
    src: '/videos/products/lifestyle-demo-1.mp4',
    title: '라이프스타일 데모 1',
    description: '주방에서의 실제 사용'
  },
  {
    src: '/videos/products/lifestyle-demo-2.mp4',
    title: '라이프스타일 데모 2',
    description: '일상 속 분리수거'
  },
  {
    src: '/videos/products/assembly-guide.mp4',
    title: '조립 가이드',
    description: '쉬운 조립 방법 안내'
  }
]

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
    setIsPlaying(false)
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const selectVideo = (index: number) => {
    setCurrentIndex(index)
    setIsPlaying(false)
  }

  return (
    <section id="videos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            제품 <span className="gradient-text">영상</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            모다리빙 분리수거함의 실제 사용 모습과 특징을 영상으로 만나보세요
          </p>
        </motion.div>

        {/* 메인 비디오 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video max-w-5xl mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl group"
        >
          <video
            ref={videoRef}
            src={videos[currentIndex].src}
            className="w-full h-full object-cover"
            muted={isMuted}
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls={false}
          />

          {/* 비디오 컨트롤 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* 재생/일시정지 버튼 */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-white" />
                ) : (
                  <Play className="h-8 w-8 text-white ml-1" />
                )}
              </div>
            </button>

            {/* 네비게이션 버튼 */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* 음소거 버튼 */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-white" />
              ) : (
                <Volume2 className="h-5 w-5 text-white" />
              )}
            </button>

            {/* 비디오 정보 */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-lg">{videos[currentIndex].title}</h3>
              <p className="text-sm text-white/80">{videos[currentIndex].description}</p>
            </div>
          </div>

          {/* 비디오 인덱스 표시 */}
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {videos.length}
          </div>
        </motion.div>

        {/* 비디오 썸네일 슬라이더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 md:gap-4">
            {videos.map((video, index) => (
              <motion.button
                key={index}
                onClick={() => selectVideo(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentIndex === index 
                    ? 'border-primary-500 scale-105 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                whileHover={{ scale: currentIndex === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                  poster=""
                />
                
                {/* 재생 아이콘 오버레이 */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-3 w-3 sm:h-4 sm:w-4 text-gray-800 ml-0.5" />
                  </div>
                </div>

                {/* 선택된 비디오 표시 */}
                {currentIndex === index && (
                  <div className="absolute inset-0 border-2 border-primary-500 rounded-lg bg-primary-50/20">
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <Play className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* 비디오 제목 */}
          <div className="text-center mt-4 sm:mt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {videos[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              {videos[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}