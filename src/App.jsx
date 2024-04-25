import './App.css'
import AyurvedaMagix from './components/AyurvedaMagic'
import LandingPage from './components/LandingPage'
import AyurvedicSets from './components/AyurvedicSets'
import BookConsultation from './components/BookConsultation'
import Cards from './components/Cards'
import TestimonialCarousel from './components/TestimonialSlider'
import AyurvedaExpert from './components/AyurvedaExpert'
import GetApp from './components/GetApp'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div className=" w-[100%] overflow-hidden  h-auto">
        <LandingPage />
        < AyurvedaMagix />
        < AyurvedicSets />
        < BookConsultation />
        < Cards />
        <TestimonialCarousel/>
        <AyurvedaExpert />
        <GetApp />
        <Footer />
      </div>
    </>
  )
}

export default App
