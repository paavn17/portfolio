import React from 'react'
import Anim2 from './Anim2'
import { useEffect } from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';

function Hero() {

  useEffect(() => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const phrases = ["Web Enthusiast", "Passionate Programmer", "Competitive Coder"];
    const el = document.getElementById("typewriter");
    const sleeptime = 200;
    let index = 0;

    const loop = async () => {
      while (true) {
        let word = phrases[index];
        
        for (let i = 0; i < word.length; i++) {
          el.innerText = word.substring(0, i + 1);
          await sleep(sleeptime);
        }
        await sleep(sleeptime * 10);

        for (let i = word.length; i > 0; i--) {
          el.innerText = word.substring(0, i - 1);
          await sleep(sleeptime);
        }
        await sleep(sleeptime * 5);

        index = (index + 1) % phrases.length; 
      }
    };

    loop();
  }, []);


  return (
    <div className="main h-[calc(100vh-8rem)] w-full relative">
    <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center">
      {/* Heading */}
      <h1 className="mb-6 text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold">
        I'm Pavan
      </h1>
  
      {/* Subheading with Typewriter Effect */}
      <h2 className="mb-6 text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] flex justify-center items-center">
        <span className="ml-2 text-red-500 flex items-center">
          <span id="typewriter"></span>
          <span id="cursor" className="ml-1 text-white bg-transparent">|</span>
        </span>
      </h2>
  
      <style>{`
        #cursor {
          animation: blink 2s linear infinite;
        }
        @keyframes blink {
          0% { opacity: 100%; }
          50% { opacity: 0%; }
          100% { opacity: 100%; }
        }
      `}</style>
  
      {/* Paragraph */}
      <p className="max-w-md mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
       I specialize in creating user-friendly, responsive, and efficient web applications that solve real-world problems.
      From building pixel-perfect frontends to optimizing backends, I enjoy the challenge of crafting clean and maintainable code.
      </p>
  
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mt-6">
  <a
    href="https://leetcode.com/pavan__011"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:text-red-800 transition-transform transform hover:scale-110 text-3xl sm:text-4xl md:text-5xl"
  >
    <SiLeetcode />
  </a>
  <a
    href="https://www.codechef.com/pavan_031"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:text-red-800 transition-transform transform hover:scale-110 text-3xl sm:text-4xl md:text-5xl"
  >
    <SiCodechef />
  </a>
  <a
    href="https://www.linkedin.com/in/pavan-damarouthu-14208326a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:text-red-800 transition-transform transform hover:scale-110 text-3xl sm:text-4xl md:text-5xl"
  >
    <LiaLinkedin />
  </a>
  <a
    href="https://www.hackerrank.com/pavandamarouthu"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:text-red-800 transition-transform transform hover:scale-110 text-3xl sm:text-4xl md:text-5xl"
  >
    <FaHackerrank />
  </a>
</div>

    </div>
  </div>
  
  )
}

export default Hero