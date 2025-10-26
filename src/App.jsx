import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsGrid from './components/ProductsGrid'
import WhyChoose from './components/WhyChoose'
import AboutIntro from './components/AboutIntro'
import QualityAssurance from './components/QualityAssurance'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProductsGrid />
        <WhyChoose />
        <AboutIntro />
        <QualityAssurance />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
