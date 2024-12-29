import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Anim1() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for Line component
    gsap.to("#line h1", {
      transform: "translateX(-150%)",
      scrollTrigger: {
        trigger: "#line",
        scroller: "body",
        start: "top 80%", // Animation starts when #line enters the viewport
        end: "top -100%", // Animation ends when #line reaches the top of the viewport
        scrub: 2, // Smooth animation tied to scroll
      },
    });
  }, []);

  return (
    <div id="line" className="line  font-semibold text-red-500 overflow-x-hidden">
      <h1 className="text-[15vw]">SKILLS/PROJECTS</h1>
    </div>
  );
}

export default Anim1;
