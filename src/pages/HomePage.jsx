import Features from "../components/Features"
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
    </div>
  )
}

export default HomePage