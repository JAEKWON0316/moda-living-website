import Products from '@/components/sections/Products'
import ShoppingMalls from '@/components/sections/ShoppingMalls'
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
      <ShoppingMalls />
      <ProductDetailsSection />
      <Features />
      <Reviews />
      <About />
      <Contact />
    </>
  )
}
