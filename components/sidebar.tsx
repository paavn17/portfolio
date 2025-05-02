'use client';
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

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-[100%] sm:max-w-[80%]  md:w-1/3 lg:w-1/4 bg-[#121212] rounded-2xl shadow-lg text-white p-6 shadow-xl mb-8 border border-gray-700 mx-auto relative pb-1 pt-1 ">
      
      {/* Toggle Button */}
      <button 
        className="absolute top-3 right-3 text-yellow-500 sm:hidden hover:scale-110 transition-transform duration-200 hover:cursor-pointer"
        onClick={toggleSidebar}
      >
        <FaAngleDown size={20}  />
      </button>

      {/* Avatar + Name + Role */}
      <div className="flex flex-row sm:flex-col items-center sm:items-center justify-start sm:justify-center mb-6 space-x-4 sm:space-x-0 sm:space-y-4">
        <div className="bg-[#2a2a2a] p-2 sm:p-4 rounded-xl">
          <Image
            src="/user_avatar.png"
            alt="Avatar"
            width={80}
            height={80}
            className="rounded-full sm:w-24 sm:h-24 w-20 h-20"
          />
        </div>

        <div className="flex flex-col justify-center items-start sm:items-center sm:mt-4">
          <h1 className="text-lg sm:text-3xl font-semibold text-left sm:text-center">
            Pavan
          </h1>
          <div className="mt-1 sm:mt-3 w-full">
            <RotatingText
              texts={['Web Developer', 'Passionate Programmer', 'Competitive Coder']}
              mainClassName="w-[10rem] lg:w-[12rem] sm:w-full text-center bg-yellow-500 text-black overflow-hidden py-1 text-xs sm:py-2 sm:text-base justify-center rounded-lg whitespace-nowrap"
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
            <span className="h-10 w-10 sm:h-12 sm:w-12 min-w-[2.5rem] sm:min-w-[3rem] text-lg sm:text-xl text-yellow-500 rounded-full flex items-center justify-center">
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
            <span className="h-10 w-10 sm:h-12 sm:w-12 min-w-[2.5rem] sm:min-w-[3rem] text-lg sm:text-xl text-yellow-500 rounded-full flex items-center justify-center">
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
            <span className="h-10 w-10 sm:h-12 sm:w-12 min-w-[2.5rem] sm:min-w-[3rem] text-lg sm:text-xl text-yellow-500 rounded-full flex items-center justify-center">
              <CiCalendar size={22} />
            </span>
            <div className="flex flex-col">
              <span className="text-gray-400 font-medium">BIRTHDAY</span>
              <span>8th June, 2003</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <span className="h-10 w-10 sm:h-12 sm:w-12 min-w-[2.5rem] sm:min-w-[3rem] text-lg sm:text-xl text-yellow-500 rounded-full flex items-center justify-center">
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
            <FaInstagram size={18} className="text-yellow-500 hover:text-yellow-400 transition-all" />
          </a>
          <a href="https://github.com/paavn17" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} className="text-yellow-500 hover:text-yellow-400 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}
