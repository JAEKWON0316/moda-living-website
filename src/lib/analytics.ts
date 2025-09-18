'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Google Analytics 타입 정의
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        page_title?: string
        page_location?: string
        custom_parameter?: any
        [key: string]: any
      }
    ) => void
  }
}

// 페이지 뷰 추적
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_title: title || document.title,
      page_location: url,
    })
  }
}

// 이벤트 추적
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// 구매 이벤트 추적
export const trackPurchase = (
  transactionId: string,
  value: number,
  currency: string = 'KRW',
  items?: Array<{
    item_id: string
    item_name: string
    category: string
    quantity: number
    price: number
  }>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
    })
  }
}

// 문의 폼 제출 추적
export const trackFormSubmission = (formType: string, formData?: any) => {
  trackEvent('form_submit', 'engagement', formType, 1)
  
  // 추가 커스텀 이벤트
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'KRW',
      value: 1,
      form_type: formType,
    })
  }
}

// 제품 조회 추적
export const trackProductView = (productId: string, productName: string, category: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'KRW',
      items: [
        {
          item_id: productId,
          item_name: productName,
          category: category,
        },
      ],
    })
  }
}

// 스크롤 깊이 추적
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage)
}

// 외부 링크 클릭 추적
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('click', 'external_link', linkText || url, 1)
}

// 전화 클릭 추적
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('click', 'phone', phoneNumber, 1)
}

// 이메일 클릭 추적
export const trackEmailClick = (emailAddress: string) => {
  trackEvent('click', 'email', emailAddress, 1)
}

// 성능 메트릭 추적
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (perfData) {
          // 페이지 로딩 시간
          const loadTime = perfData.loadEventEnd - perfData.fetchStart
          trackEvent('timing_complete', 'performance', 'page_load_time', Math.round(loadTime))
          
          // First Contentful Paint
          const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0]
          if (fcpEntry) {
            trackEvent('timing_complete', 'performance', 'first_contentful_paint', Math.round(fcpEntry.startTime))
          }
          
          // Largest Contentful Paint
          if ('PerformanceObserver' in window) {
            const po = new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries()
              const lastEntry = entries[entries.length - 1]
              trackEvent('timing_complete', 'performance', 'largest_contentful_paint', Math.round(lastEntry.startTime))
            })
            po.observe({ entryTypes: ['largest-contentful-paint'] })
          }
        }
      }, 0)
    })
  }
}

// 사용자 상호작용 추적 컴포넌트
export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 페이지 뷰 추적
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    trackPageView(url)
  }, [pathname, searchParams])

  useEffect(() => {
    // 스크롤 깊이 추적 설정
    let maxScroll = 0
    const milestones = [25, 50, 75, 100]
    const trackedMilestones = new Set<number>()

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent

        milestones.forEach((milestone) => {
          if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
            trackScrollDepth(milestone)
            trackedMilestones.add(milestone)
          }
        })
      }
    }

    // 성능 메트릭 추적
    trackPerformance()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // 외부 링크 자동 추적
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href) {
        const url = new URL(link.href)
        const currentDomain = window.location.hostname
        
        if (url.hostname !== currentDomain) {
          trackExternalLink(link.href, link.textContent || undefined)
        }
        
        // 전화번호 링크
        if (link.href.startsWith('tel:')) {
          trackPhoneClick(link.href.replace('tel:', ''))
        }
        
        // 이메일 링크
        if (link.href.startsWith('mailto:')) {
          trackEmailClick(link.href.replace('mailto:', ''))
        }
      }
    }

    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [])

  // 이 컴포넌트는 렌더링하지 않음 (추적 전용)
  return null
}

// 에러 추적
export const trackError = (error: Error, errorInfo?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      error_type: error.name,
    })
  }
  
  // 콘솔에도 에러 로그
  console.error('Tracked error:', error, errorInfo)
}

// 사용자 정의 이벤트들
export const customEvents = {
  // 제품 관련
  productInteraction: (action: 'view' | 'click' | 'hover', productId: string) => {
    trackEvent(action, 'product', productId, 1)
  },
  
  // 폼 관련
  formInteraction: (action: 'start' | 'complete' | 'abandon', formName: string) => {
    trackEvent(`form_${action}`, 'engagement', formName, 1)
  },
  
  // 미디어 관련
  mediaInteraction: (action: 'play' | 'pause' | 'complete', mediaName: string) => {
    trackEvent(`video_${action}`, 'engagement', mediaName, 1)
  },
  
  // 검색 관련
  search: (searchTerm: string, resultsCount?: number) => {
    trackEvent('search', 'engagement', searchTerm, resultsCount)
  },
  
  // 다운로드 관련
  download: (fileName: string, fileType: string) => {
    trackEvent('download', 'engagement', fileName, 1)
  }
}

export default Analytics
