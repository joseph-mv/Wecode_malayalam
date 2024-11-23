import AboutSection from "../components/About/About"
import ContactSection from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero"

export const HomePage = () => {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
