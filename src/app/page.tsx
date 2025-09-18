import Products from '@/components/sections/Products'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Reviews from '@/components/sections/Reviews'
import Hero from '@/components/sections/Hero'
import ProductDetailsSection from '@/components/sections/ProductDetailsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <ProductDetailsSection />
      <Features />
      <Reviews />
      <About />
      <Contact />
    </>
  )
}
