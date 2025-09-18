export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  category: string | string[]
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
    description: '컴팩트한 공간에 최적화된 2단 분리수거함으로, 일반/재활용 분리수거를 깔끔하게 해결합니다. 가정용부터 카페, 사무실까지 다양한 공간에 적합한 모던한 디자인과 실용성을 겸비한 필수 아이템입니다.',
    price: 38000,
    originalPrice: 70000,
    discount: 46,
    category: ['home', 'office'],
    features: [
      '컴팩트한 2단 구조',
      '일반/재활용 완벽 분리',
      '각 칸 독립 분리 가능',
      '편리한 손잡이 디자인',
      '미끄럼 방지 바닥',
      '친환경 소재 사용',
      '좁은 공간 최적화',
      '가정용/업소용 겸용'
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
    description: '완벽한 분리수거 솔루션을 제공하는 3단 분리수거함입니다. 일반/재활용/음식물 쓰레기를 체계적으로 분리하여 가정의 주방부터 레스토랑, 카페까지 깔끔한 환경을 만들어줍니다.',
    price: 55000,
    originalPrice: 102000,
    discount: 46,
    category: ['home', 'office'],
    features: [
      '완벽한 3단 분리수거 시스템',
      '일반/재활용/음식물 완벽 분리',
      '스택형 구조로 공간 절약',
      '각 칸 독립 분리 가능',
      '편리한 손잡이 디자인',
      '미끄럼 방지 바닥',
      '친환경 소재 사용',
      '냄새 차단 밀폐 설계',
      '가정용/업소용 겸용'
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
  }
]