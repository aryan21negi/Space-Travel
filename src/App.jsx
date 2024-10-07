import React from 'react'
import bgVideo from "./assets/earth-bg.mp4"
import Navbar from  "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
// import wave from './assets/wave.gif'
import Services from "./components/Services/Services"
import Rapidscat from './components/Rapidscat/RapidCast'
import Satellite from './components/Satelite/Satellite'
import Footer from './components/Footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"


const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  
  return <div className=''> 

        <div className="h-[700px] relative">

          <video 
            autoPlay 
            loop 
            muted 
            className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
          
            <source src={bgVideo} type="video/mp4"/>
          
          </video>

          <Navbar/>
          <Hero/>
        
        </div>

        <Services/>
        <Rapidscat/>
        <Satellite/>
        <Footer/>


  </div>
  
}

export default App