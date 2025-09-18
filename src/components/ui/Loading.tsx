'use client'

import { motion } from 'framer-motion'
import { Loader2, RefreshCw } from 'lucide-react'

// 메인 로딩 컴포넌트
export function Loading({ size = 'medium', text = '로딩 중...' }: {
  size?: 'small' | 'medium' | 'large'
  text?: string
}) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center p-8"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className={`${sizeClasses[size]} text-primary-600`} />
      </motion.div>
      {text && (
        <p className="mt-4 text-gray-600 text-sm">{text}</p>
      )}
    </motion.div>
  )
}

// 페이지 로딩 (전체 화면)
export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mx-auto mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary-200"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-primary-600 border-t-transparent"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl">🗂️</div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">모다리빙</h2>
          <p className="text-gray-600">페이지를 불러오는 중입니다...</p>
        </motion.div>
      </div>
    </div>
  )
}

// 스켈레톤 로딩 (제품 카드)
export function ProductSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          {/* 이미지 영역 */}
          <div className="h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* 내용 영역 */}
          <div className="p-6 space-y-4">
            {/* 제목 */}
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
            
            {/* 설명 */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
            </div>
            
            {/* 가격 및 버튼 */}
            <div className="flex items-center justify-between">
              <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-28 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// 텍스트 스켈레톤
export function TextSkeleton({ lines = 3, width = 'full' }: {
  lines?: number
  width?: 'full' | '3/4' | '1/2'
}) {
  const widthClasses = {
    full: 'w-full',
    '3/4': 'w-3/4',
    '1/2': 'w-1/2'
  }

  return (
    <div className="space-y-3">
      {[...Array(lines)].map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded animate-pulse ${
            index === lines - 1 ? widthClasses[width] : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

// 버튼 로딩 상태
export function ButtonLoading({ 
  loading, 
  children, 
  className = '',
  ...props 
}: {
  loading: boolean
  children: React.ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <button
      disabled={loading}
      className={`relative ${className} ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
      {...props}
    >
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="h-5 w-5" />
          </motion.div>
        </div>
      )}
    </button>
  )
}

// 이미지 로딩 플레이스홀더
export function ImagePlaceholder({ 
  aspectRatio = 'square',
  className = ''
}: {
  aspectRatio?: 'square' | 'video' | 'wide'
  className?: string
}) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video', 
    wide: 'aspect-[16/9]'
  }

  return (
    <div className={`${aspectClasses[aspectRatio]} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl text-gray-400">📷</div>
      </div>
    </div>
  )
}

// 폼 로딩 상태
export function FormLoading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-12 bg-gray-200 rounded animate-pulse" />
        </div>
        <div>
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-12 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      
      <div>
        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-12 bg-gray-200 rounded animate-pulse" />
      </div>
      
      <div>
        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-32 bg-gray-200 rounded animate-pulse" />
      </div>
      
      <div className="h-12 bg-gray-200 rounded animate-pulse" />
    </motion.div>
  )
}

// 재시도 버튼이 있는 로딩 실패 상태
export function LoadingError({ 
  onRetry,
  message = '데이터를 불러오는데 실패했습니다.'
}: {
  onRetry?: () => void
  message?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <div className="text-2xl">⚠️</div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        문제가 발생했습니다
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-sm">
        {message}
      </p>
      
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span>다시 시도</span>
        </button>
      )}
    </motion.div>
  )
}
