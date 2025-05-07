"use client";

import { useState, useEffect } from "react";
import MainContent from "@/components/maincontent";
import Sidebar from "@/components/sidebar";
import ASCIIText from "@/animations/intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const greetings = [
    "Hello!",      // English
    "नमस्ते!",     // Hindi
    "హలో!",        // Telugu
    "Hola!",       // Spanish
    "Bonjour!"     // French
  ];

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 500); // 0.5 seconds
      return () => clearInterval(interval);
    } else {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 1000); // 1 sec delay before showing main content
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  if (showIntro) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black px-4 sm:px-8 overflow-auto">
        <ASCIIText
          key={currentIndex} // important to re-render animation
          text={greetings[currentIndex]}
          enableWaves={false}
          asciiFontSize={2}
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen text-white flex flex-col md:flex-row gap-4 px-4 sm:px-10 md:px-20 lg:px-32 pt-16">
      <Sidebar />
      <MainContent />
    </main>
  );
}
