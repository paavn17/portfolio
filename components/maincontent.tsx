"use client"
import { useState } from 'react';
import Aboutme from './aboutme';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Resume", "Portfolio", "Contact"];

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <Aboutme/>
        );
  
      case "Resume":
        return (
          <Resume/>
        );
  
      case "Portfolio":
        return (
          <Portfolio/>
        );
  
      case "Contact":
        return (
          <Contact/>
        );
  
    }
  };
  

  return (
    <div className="relative w-full md:w-2/3 lg:w-3/4 bg-[#121212] text-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-700 mb-8">
      
      {/* Desktop Tabs (md+) */}
      <nav className="hidden md:flex absolute top-5 right-6 space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              cursor-pointer
              text-sm font-semibold
              transition duration-200
              ${
                activeTab === tab
                  ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1'
                  : 'text-gray-400 hover:text-white'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Card Content */}
      <div className="mt-6">{renderContent()}</div>

      {/* Mobile Tabs (smaller than md) */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#1f1f1f] border border-gray-700 rounded-xl shadow-md p-2 px-4 flex space-x-4 md:hidden z-50">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              cursor-pointer
              text-xs font-medium
              transition duration-150
              ${
                activeTab === tab
                  ? 'text-yellow-400 border-b border-yellow-400 pb-0.5'
                  : 'text-gray-300 hover:text-white'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  
  );
}
