import React, { useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Anim1 from "./components/Anam1";
import Skills from "./components/Skills";

import Projectheading from "./components/Projectheading";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Bg from "./components/Bg";

function App() {


  return (
    <div className="main  min-h-screen w-full font-title text-white font-semibold overflow-y-hidden">

    <Bg/>
    
    <Navbar />
    <Hero />
    <div className="hidden lg:block">
      <Anim1 />
    </div>
    <div className="w-full text-red-500 flex justify-center items-center lg:hidden">
      <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-bold">
       SKILLS
      </h1>
    </div>
    <Skills/>
    <Projectheading/>
    <Projects/>
    <div className="w-full flex justify-center items-center mt-2">
      <div className="bg-red-500 w-[87%] h-1 text-center"></div>
    </div>
    <Contact/>
    <Footer/>
  </div>
  
  );
}

export default App;
