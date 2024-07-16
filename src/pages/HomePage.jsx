import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Statistik from "../components/Statistik"

const HomePage = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <Hero />
      <Statistik />
    </div>
  )
}

export default HomePage