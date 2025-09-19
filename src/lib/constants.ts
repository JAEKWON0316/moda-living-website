// 사이트 기본 정보
export const SITE_CONFIG = {
  name: '모다리빙',
  title: '모다리빙 분리수거함 | 친환경 디자인 수납함 전문브랜드',
  description: '세련된 디자인과 실용성을 겸비한 모다리빙 분리수거함. 가정용부터 업소용까지 다양한 크기와 스타일로 깔끔한 분리수거 환경을 만들어보세요.',
  url: 'https://moda-living.vercel.app',
  ogImage: 'https://moda-living.vercel.app/images/og-image.jpg',
  author: '모다리빙',
  keywords: [
    '분리수거함',
    '재활용함',
    '쓰레기통',
    '수납함',
    '모다리빙',
    '고품질 원료 사용',
    '디자인',
    '스택형',
    '공간절약',
    '모던 인테리어',
    'MODA LIVING'
  ]
}

// 연락처 정보
export const CONTACT_INFO = {
  phone: '031-358-2711',
  email: 'wsspbox@naver.com',
  address: '경기도 화성시 장안면 수정로 64-15',
  businessHours: '평일 09:00 - 18:00 (점심시간 12:00-13:00)',
  kakaoTalk: '@모다리빙',
  naverStore: 'https://smartstore.naver.com/modahlv'
}

// 소셜 미디어 링크
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/modaliving',
  facebook: 'https://facebook.com/modaliving',
  youtube: 'https://youtube.com/modaliving',
  blog: 'https://blog.naver.com/modaliving'
}

// 네비게이션 메뉴
export const NAVIGATION = [
  { label: '홈', href: '#home', id: 'home' },
  { label: '제품', href: '#products', id: 'products' },
  { label: '특징', href: '#features', id: 'features' },
  { label: '고객후기', href: '#reviews', id: 'reviews' },
  { label: '브랜드소개', href: '#about', id: 'about' },
  { label: '문의', href: '#contact', id: 'contact' }
]

// 색상 테마
export const THEME_COLORS = {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d'
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    500: '#64748b',
    600: '#475569',
    700: '#334155'
  },
  accent: {
    500: '#f97316',
    600: '#ea580c'
  }
}

// 애니메이션 설정
export const ANIMATION_CONFIG = {
  stagger: 0.1,
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8
  },
  easing: {
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.6, 1],
    bounce: [0.68, -0.55, 0.265, 1.55]
  }
}

// 브레이크포인트 (Tailwind와 일치)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// 회사 정보
export const COMPANY_INFO = {
  legalName: '(주)신일글로텍',
  ceo: '이혁',
  businessNumber: '654-87-01637',
  ecommerceNumber: '2024-화성장안-0057',
  address: '경기도 화성시 장안면 수정로 64-15',
  established: '2019',
  employees: '50-100명',
  vision: '모던한 라이프스타일을 통한 지속가능한 미래'
}

// 제품 카테고리
export const PRODUCT_CATEGORIES = [
  {
    id: 'home',
    name: '가정용',
    description: '일반 가정에서 사용하기 적합한 분리수거함',
    icon: '🏠'
  },
  {
    id: 'office',
    name: '업소용',
    description: '사무실, 카페, 식당 등 상업공간용',
    icon: '🏢'
  },
  {
    id: 'premium',
    name: '프리미엄',
    description: '고급 인테리어 공간을 위한 프리미엄 라인',
    icon: '⭐'
  }
]

// FAQ 데이터
export const FAQ_DATA = [
  {
    id: 1,
    question: '배송은 얼마나 걸리나요?',
    answer: '주문 후 2-3일 내 배송됩니다. 제주도 및 도서산간지역은 1-2일 추가 소요될 수 있습니다.'
  },
  {
    id: 2,
    question: '조립이 어렵나요?',
    answer: '매우 간단합니다. 별도의 도구 없이 5분 내에 조립 가능하며, 자세한 조립 가이드가 포함되어 있습니다.'
  },
  {
    id: 3,
    question: '환불이나 교환은 가능한가요?',
    answer: '구매일로부터 7일 이내 단순 변심으로 인한 교환/환불이 가능합니다. 제품에 하자가 있을 경우 무료로 교환해드립니다.'
  },
  {
    id: 4,
    question: '어떤 소재로 만들어졌나요?',
    answer: '고품질 원료 PP 플라스틱 소재로 제작되었으며, BPA-free 인증을 받은 안전한 소재입니다.'
  },
  {
    id: 5,
    question: '청소는 어떻게 하나요?',
    answer: '분리 가능한 구조로 물세탁이 가능하며, 중성세제를 사용하여 깨끗하게 관리할 수 있습니다.'
  }
]

// 인증 및 수상 내역
export const CERTIFICATIONS = [
  {
    name: 'KC 안전인증',
    year: '2023',
    description: '한국 안전 기준 적합 인증'
  },
  {
    name: '고품질 원료 마크',
    year: '2023',
    description: '환경부 고품질 원료 제품 인증'
  },
  {
    name: '우수 디자인 상품',
    year: '2024',
    description: '한국디자인진흥원 굿디자인 선정'
  }
]

// 성능 관련 상수
export const PERFORMANCE_CONFIG = {
  imageOptimization: {
    quality: 85,
    formats: ['webp', 'avif'],
    sizes: [400, 800, 1200, 1600],
    placeholder: 'blur'
  },
  analytics: {
    trackingId: process.env.NEXT_PUBLIC_GA_ID,
    enableInProduction: true
  },
  seo: {
    defaultOpenGraph: {
      type: 'website',
      locale: 'ko_KR',
      site_name: SITE_CONFIG.name
    }
  }
}

// 에러 메시지
export const ERROR_MESSAGES = {
  required: '필수 입력 항목입니다.',
  invalidEmail: '올바른 이메일 주소를 입력해주세요.',
  invalidPhone: '올바른 전화번호를 입력해주세요.',
  tooShort: '너무 짧습니다.',
  tooLong: '너무 깁니다.',
  networkError: '네트워크 오류가 발생했습니다. 다시 시도해주세요.',
  serverError: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
}

// 성공 메시지
export const SUCCESS_MESSAGES = {
  formSubmitted: '문의가 성공적으로 전송되었습니다.',
  newsletterSubscribed: '뉴스레터 구독이 완료되었습니다.',
  reviewSubmitted: '리뷰가 성공적으로 등록되었습니다.'
}
