"use client";

import { useState, useEffect } from "react";
import MainContent from "@/components/maincontent";
import Sidebar from "@/components/sidebar";
import ASCIIText from "@/animations/intro";


export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black px-4 sm:px-8 overflow-auto">
  <ASCIIText text="hey! Pavan here!" enableWaves={true} asciiFontSize={1} />
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