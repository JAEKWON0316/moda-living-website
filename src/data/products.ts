export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  category: string
  features: string[]
  specifications: {
    capacity: string
    material: string
    dimensions: string
    weight: string
    colors: string[]
  }
  images: string[]
  rating: number
  reviews: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 'moda-stack-2tier',
    name: '모다리빙 스택형 분리수거함 2단',
    description: '컴팩트한 공간에 최적화된 2단 분리수거함으로, 일반/재활용 분리수거를 깔끔하게 해결합니다. 모던한 디자인과 실용성을 겸비한 필수 아이템입니다.',
    price: 69000,
    originalPrice: 89000,
    discount: 22,
    category: 'home',
    features: [
      '컴팩트한 2단 구조',
      '일반/재활용 완벽 분리',
      '각 칸 독립 분리 가능',
      '편리한 손잡이 디자인',
      '미끄럼 방지 바닥',
      '친환경 소재 사용',
      '좁은 공간 최적화'
    ],
    specifications: {
      capacity: '각 칸 20L (총 40L)',
      material: 'PP 플라스틱 (친환경, BPA-free)',
      dimensions: '410 × 225 × 760mm',
      weight: '4.8kg',
      colors: ['화이트', '베이지', '그레이', '그라데이션']
    },
    images: [
      '/images/products/유아 대표사진.jpg',
      '/images/products/신규 대표사진.png',
      '/images/products/1.jpg',
      '/images/products/2.jpg',
      '/images/products/3.jpg',
      '/images/products/4.jpg',
      '/images/products/5.jpg',
      '/images/products/IMG_8140.jpg',
      '/images/products/IMG_8143.jpg',
      '/images/products/IMG_8196.jpg'
    ],
    rating: 4.9,
    reviews: 892,
    inStock: true
  },
  {
    id: 'moda-stack-3tier',
    name: '모다리빙 스택형 분리수거함 3단',
    description: '완벽한 분리수거 솔루션을 제공하는 3단 분리수거함입니다. 일반/재활용/음식물 쓰레기를 체계적으로 분리하여 깔끔한 주방 환경을 만들어줍니다.',
    price: 89000,
    originalPrice: 119000,
    discount: 25,
    category: 'home',
    features: [
      '완벽한 3단 분리수거 시스템',
      '일반/재활용/음식물 완벽 분리',
      '스택형 구조로 공간 절약',
      '각 칸 독립 분리 가능',
      '편리한 손잡이 디자인',
      '미끄럼 방지 바닥',
      '친환경 소재 사용',
      '냄새 차단 밀폐 설계'
    ],
    specifications: {
      capacity: '각 칸 20L (총 60L)',
      material: 'PP 플라스틱 (친환경, BPA-free)',
      dimensions: '410 × 225 × 1115mm',
      weight: '7kg',
      colors: ['화이트', '베이지', '그레이', '그라데이션']
    },
    images: [
      '/images/products/신규 대표사진.png',
      '/images/products/6.jpg',
      '/images/products/7.jpg',
      '/images/products/8.jpg',
      '/images/products/10.jpg',
      '/images/products/11.jpg',
      '/images/products/12.jpg',
      '/images/products/IMG_8198.jpg',
      '/images/products/IMG_8206.jpg',
      '/images/products/IMG_8214.jpg'
    ],
    rating: 4.8,
    reviews: 1247,
    inStock: true
  },
  // 업소용 제품들
  {
    id: 'moda-stack-2tier-office',
    name: '모다리빙 스택형 분리수거함 2단 (업소용)',
    description: '카페, 사무실, 상점에 최적화된 2단 분리수거함으로, 일반/재활용 분리수거를 효율적으로 해결합니다. 업무 환경에 어울리는 모던한 디자인과 실용성을 겸비했습니다.',
    price: 69000,
    originalPrice: 89000,
    discount: 22,
    category: 'office',
    features: [
      '컴팩트한 2단 구조',
      '일반/재활용 완벽 분리',
      '각 칸 독립 분리 가능',
      '편리한 손잡이 디자인',
      '미끄럼 방지 바닥',
      '친환경 소재 사용',
      '업무 공간 최적화',
      '고객 구역 설치 가능'
    ],
    specifications: {
      capacity: '각 칸 20L (총 40L)',
      material: 'PP 플라스틱 (친환경, BPA-free)',
      dimensions: '410 × 225 × 760mm',
      weight: '4.8kg',
      colors: ['화이트', '베이지', '그레이', '그라데이션']
    },
    images: [
      '/images/products/유아 대표사진.jpg',
      '/images/products/신규 대표사진.png',
      '/images/products/1.jpg',
      '/images/products/2.jpg',
      '/images/products/3.jpg',
      '/images/products/4.jpg',
      '/images/products/5.jpg',
      '/images/products/IMG_8140.jpg',
      '/images/products/IMG_8143.jpg',
      '/images/products/IMG_8196.jpg'
    ],
    rating: 4.9,
    reviews: 684,
    inStock: true
  },
  {
    id: 'moda-stack-3tier-office',
    name: '모다리빙 스택형 분리수거함 3단 (업소용)',
    description: '레스토랑, 카페, 대형 사무실에 완벽한 3단 분리수거 솔루션입니다. 일반/재활용/음식물 쓰레기를 체계적으로 분리하여 청결한 업무 환경을 만들어줍니다.',
    price: 89000,
    originalPrice: 119000,
    discount: 25,
    category: 'office',
    features: [
      '완벽한 3단 분리수거 시스템',
      '일반/재활용/음식물 완벽 분리',
      '스택형 구조로 공간 절약',
      '각 칸 독립 분리 가능',
      '편리한 손잡이 디자인',
      '미끄럼 방지 바닥',
      '친환경 소재 사용',
      '냄새 차단 밀폐 설계',
      '대용량 업무 환경 최적화'
    ],
    specifications: {
      capacity: '각 칸 20L (총 60L)',
      material: 'PP 플라스틱 (친환경, BPA-free)',
      dimensions: '410 × 225 × 1115mm',
      weight: '7kg',
      colors: ['화이트', '베이지', '그레이', '그라데이션']
    },
    images: [
      '/images/products/신규 대표사진.png',
      '/images/products/6.jpg',
      '/images/products/7.jpg',
      '/images/products/8.jpg',
      '/images/products/10.jpg',
      '/images/products/11.jpg',
      '/images/products/12.jpg',
      '/images/products/IMG_8198.jpg',
      '/images/products/IMG_8206.jpg',
      '/images/products/IMG_8214.jpg'
    ],
    rating: 4.8,
    reviews: 923,
    inStock: true
  }
]