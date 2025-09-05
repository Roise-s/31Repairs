import Header from '@/components/Header'
import HeroSection from "@/components/HeroSection"
import Portfolio from '@/components/Pricing'
import '../styles/style.css'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
     <Header />
     <HeroSection />
     <div className="Price">
     `<Portfolio />
     </div>
     <Contact />
     <Footer />
    </>
  )
}

export default Home
