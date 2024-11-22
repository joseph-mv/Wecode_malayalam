import AboutSection from "../components/About/About"
import { Header } from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero"

export const HomePage = () => {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <AboutSection/>
    </div>
  )
}
