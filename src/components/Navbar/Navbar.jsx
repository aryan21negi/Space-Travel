import React from "react"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return  (
  
  <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-0 ">
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-white font-bold text-2xl">
          <img src={Logo} alt="JustLogo" className="w-10"/>
          <span>SPACE TOUR </span>
        </div>
        <div className="text-white hidden sm:block">
          <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
            <li>
              <a href="#"> About </a>
            </li>
            <li>
              <a href="https://www.nasa.gov/technology/"> Technology </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Galaxy"> Galaxy </a>
            </li>
            <li>
              <a href="https://www.isro.gov.in/Satellites.html"> Satelite </a>
            </li>
          </ul>
        </div>
        <div>
          <button  className=" text-white border-2 border-white px-3 py-1 rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
    

  </div>
  
)}

export default Navbar ;