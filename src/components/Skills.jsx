import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiFirebaseFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div className="container p-10 text-red-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-md">
          <div className="box ">
          <h1 className="mb-8 text-white font-semibold">Technical Skills</h1>
        <div className="flex flex-wrap gap-10">
          <div className=" px-4 flex justify-center items-center gap-2"><FaHtml5 className="text-white"/><h1>Html</h1></div>
          <div className= " px-4 flex justify-center items-center gap-2"><FaCss3Alt className="text-white"/><h1>Css</h1></div>
          <div className="  px-4 flex justify-center items-center gap-2"><FaReact className="text-white"/><h1>React</h1></div>
          <div className="  px-4 flex justify-center items-center gap-2"><IoLogoJavascript className="text-white"/><h1>Javascript</h1></div>
          <div className="  px-4 flex justify-center items-center gap-2"><RiFirebaseFill className="text-white"/><h1>Firebase</h1></div>
          <div className="  px-4 flex justify-center items-center gap-2"><SiTailwindcss className="text-white"/><h1>Tailwind</h1></div>
        </div>
          </div>
    
          <div className="box ">
          <h1 className="mb-8 text-slate-200 font-semibold">Professional Skills</h1>
        <div className="flex flex-wrap gap-10">
          <div className="  px-4 flex justify-center items-center gap-2"><h1>Creativity </h1></div>
          <div className="  px-4 flex justify-center items-center gap-2"><h1>Communication</h1></div>
          <div className="  px-4 flex justify-center items-center gap-2"><h1>Problem Solving</h1></div>
          <div className="  px-4 flex justify-center items-center gap-2"><h1>Teamwork</h1></div>
        </div>
          </div>
        </div>
  )
}

export default Skills