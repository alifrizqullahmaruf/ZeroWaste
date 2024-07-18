import Category from "../components/Category"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Statistik from "../components/Statistik"
import ValueCompany from "../components/ValueCompany"

const HomePage = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <Hero />
      <Statistik />
      <Features />
      <ValueCompany />
      <Category />
      <Footer />
    </div>
  )
}

export default HomePage