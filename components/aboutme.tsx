'use client';

import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Aboutme = () => {
  return (
    <div >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-2 mt-4 text-white"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border-b-2 border-yellow-400 mb-4 w-16"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-yellow-400 font-semibold mb-6 border-b border-gray-700 pb-2 inline-block"
      >
        I'm a full stack developer and competitive programmer based in India. 
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-sm leading-relaxed text-gray-400"
      >
       As a full stack developer, I handle both the front-end and back-end of web applications — using technologies like HTML, CSS, JavaScript, React for the front end, and Node.js, Express, and MongoDB for the back end. I ensure seamless integration, responsive design, and optimized performance across devices and browsers.

In addition to development, I'm passionate about problem-solving and algorithms. I'm a 3★ rated coder on CodeChef and have solved over 250 problems on LeetCode. My experience in competitive programming strengthens my ability to write efficient, scalable, and clean code under pressure.

I thrive in collaborative environments, working closely with designers and backend engineers to bring ideas to life.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-2xl font-bold mt-10 mb-4 text-white"
      >
        What I'm Doing
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {[
          {
            title: 'Web Design',
            desc: 'The most modern and high-quality design made at a professional level.',
            icon: <FaRegLightbulb />,
          },
          {
            title: 'Web Development',
            desc: 'High-quality development of sites at the professional level.',
            icon: <FaCode />,
          },
          {
            title: 'CodeChef',
            desc: (
              <>
                I am a 3<span className="text-yellow-500">★</span> coder on CodeChef and have solved around 500 problems.
              </>
            ),
            icon: <SiCodechef />,
          },
          {
            title: 'Leetcode',
            desc: 'Solved around 250+ problems on leetcode.',
            icon: <SiLeetcode />,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + idx * 0.1 }}
            className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-700 text-white shadow-md hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex items-center mb-3">
              <div className="text-yellow-400 text-xl mr-3">{item.icon}</div>
              <h4 className="font-semibold text-lg text-yellow-400">{item.title}</h4>
            </div>
            <p className="text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Aboutme;
