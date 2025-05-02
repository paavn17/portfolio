'use client';

import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Aboutme = () => {
  return (
    <div className="px-3 sm:px-5">
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
        transition={{ delay: 0.1 }}
        className="border-b-2 border-yellow-400 mb-4 w-16"
      ></motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-yellow-400 font-semibold mb-6 border-b border-gray-700 pb-2 inline-block"
      >
        I'm a front-end developer based in India. I like to build interactive web applications.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-sm leading-relaxed text-gray-400"
      >
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        As a front-end developer, I create the visual and interactive elements of websites and web applications.
        My work involves using HTML for structure, CSS for styling, and JavaScript for functionality.
        I ensure that users have a seamless and engaging experience by making websites responsive, intuitive,
        and accessible across various devices and browsers. Additionally, I collaborate with designers to implement
        their visions and work with back-end developers to integrate front-end components with server-side logic.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold mt-10 mb-4 text-white"
      >
        What I'm Doing
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
            icon: <FaRegLightbulb />,
          },
          {
            title: 'Social Media Management',
            desc: 'Handle the social media platforms of my clients.',
            icon: <FaRegLightbulb />,
          },
          {
            title: 'Photography',
            desc: 'I make high-quality photos of any category at a professional level.',
            icon: <FaRegLightbulb />,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + idx * 0.1 }}
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
