import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";


function Crds({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={1.2}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
      className="relative leading-tight w-[80%] sm:w-60 h-72 bg-zinc-900/80 rounded-3xl text-slate-300 p-5 overflow-hidden z-[4]"
    >
      <h1 className="text-center text-red-500" >{data.Title}</h1>
      <p className="mt-5 text-sm md:text-base">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between py-4 px-5 sm:px-9">
      </div>
      </div>
    </motion.div>
  );
}

export default Crds;