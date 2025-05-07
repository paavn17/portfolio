"use client"
import { useState } from 'react';
import { RotatingText } from '@/animations/name';
import Image from 'next/image';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import GradientText from '@/animations/pavan';
import Hyperspeed from '@/animations/profilepic';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-[100%] sm:max-w-[80%] md:w-1/3 lg:w-1/4 bg-[#0f0f0f] rounded-2xl shadow-lg text-white p-6 shadow-xl mb-8 border border-[#2e2e2e] mx-auto relative pb-1 pt-1">

      {/* Toggle Button */}
      <button 
        className="absolute top-3 right-3 text-cyan-500 sm:hidden hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
        onClick={toggleSidebar}
      >
        <FaAngleDown size={20} />
      </button>

      {/* Avatar + Name + Role */}
      <div className="flex flex-row sm:flex-col items-center sm:items-center justify-start sm:justify-center mb-6 mt-6 space-x-4 sm:space-x-0 sm:space-y-1">
        <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] overflow-hidden rounded-xl bg-black">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
              },
            }}
          />
        </div>

        <div className="flex flex-col justify-center items-start sm:items-center mt-0 sm:mt-4">
          <h1 className="text-2xl sm:text-4xl font-semibold text-left sm:text-center">
            <GradientText
              colors={["#FF00FF", "#00FFFF", "#FF00CC", "#00FF00", "#FF007F", "#8A2BE2", "#00BFFF"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Pavan
            </GradientText>
          </h1>
          <div className="mt-1 sm:mt-3 w-full">
            <RotatingText
              texts={['Web Developer', 'Passionate Programmer', 'Competitive Coder']}
              mainClassName="w-[10rem] lg:w-[12rem] sm:w-full text-center bg-gradient-to-r from-[#8e008e] via-[#007a7a] to-[#007f00] text-black overflow-hidden py-1 text-xs sm:py-2 sm:text-base justify-center rounded-lg whitespace-nowrap text-bold"

              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      <div className={`${isExpanded ? 'block' : 'hidden'} sm:block transition-all duration-700 ease-out delay-700`}>
        <hr className="my-4 border-t-2 border-[#2a2a2a] mt-10" />

        <div className="mt-6 space-y-4 text-xs sm:text-sm leading-tight sm:leading-normal px-2 sm:px-4">

          {/* Email */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <span className="h-10 w-10 sm:h-12 sm:w-12 min-w-[2.5rem] sm:min-w-[3rem] text-lg sm:text-xl text-[#FF00FF] rounded-full flex items-center justify-center">
              <MdOutlineMail size={22} />
            </span>
            <div className="flex flex-col">
              <span className="text-gray-400 font-medium">EMAIL</span>
              <span>
                <a href="mailto:pavandamarouthu@gmail.com" className="text-white break-all">
                  pavandamarouthu@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <span className="h-10 w-10 sm:h-12 sm:w-12 min-w-[2.5rem] sm:min-w-[3rem] text-lg sm:text-xl text-[#99004C] rounded-full flex items-center justify-center">
              <FaPhoneAlt size={18} />
            </span>
            <div className="flex flex-col">
              <span className="text-gray-400 font-medium">PHONE</span>
              <span>
                <a href="tel:+919652039647" className="text-white">
                  +91 9652039647
                </a>
              </span>
            </div>
          </div>

          {/* Birthday */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <span className="h-10 w-10 sm:h-12 sm:w-12 min-w-[2.5rem] sm:min-w-[3rem] text-lg sm:text-xl text-[#FF00CC] rounded-full flex items-center justify-center">
              <CiCalendar size={22} />
            </span>
            <div className="flex flex-col">
              <span className="text-gray-400 font-medium">BIRTHDAY</span>
              <span>8th June, 2003</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <span className="h-10 w-10 sm:h-12 sm:w-12 min-w-[2.5rem] sm:min-w-[3rem] text-lg sm:text-xl text-[#8A2BE2] rounded-full flex items-center justify-center">
              <FaLocationDot size={20} />
            </span>
            <div className="flex flex-col">
              <span className="text-gray-400 font-medium">LOCATION</span>
              <span>Visakhapatnam, India</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3 mt-5 mb-2 ">
          <a href="https://www.instagram.com/pavan__011" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} className="text-[#FF007F]  transition-all" />
          </a>
          <a href="https://github.com/paavn17" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} className="text-[#8A2BE2]  transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}
