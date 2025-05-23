'use client';

import { motion } from 'framer-motion';
import { FiEye, FiCode } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Portfolio = () => {
  const projects = [
    {
      title: "Ace Bot",
      category: "AI assisted voice app",
      previewLink: "https://ace-bot-nu.vercel.app/",
      codeLink: "https://github.com/paavn17/AceBot",
      imageUrl: "./proj1.png",
    },
    {
      title: "Sealed Ideas",
      category: "Full Stack Development",
      previewLink: "https://sealed-ideas.web.app",
      codeLink: "https://github.com/paavn17/sealed-ideas",
      imageUrl: "./proj2.png",
    },
    {
      title: "Financial Tracker",
      category: "frontend",
      previewLink: "https://finance-tracker-two-xi.vercel.app/",
      codeLink: "https://github.com/paavn17/finance-tracker",
      imageUrl: "./proj4.png",
    },
    {
      title: "Sticky Docs",
      category: "Simple frontend",
      previewLink: "https://doc-kappa-olive.vercel.app/",
      codeLink: "https://github.com/paavn17/doc",
      imageUrl: "./proj3.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#121212] px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-2 text-white"
        >
          Portfolio
        </motion.h1>
        <div className="border-b-2 border-yellow-500 mb-8 w-16"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-xl group border border-gray-800 hover:shadow-yellow-500/20 transition-all"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {project.category}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-[#121212] rounded-full text-yellow-500 hover:bg-yellow-600 hover:text-black transition-colors"
                  >
                    <FiEye size={18} />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-[#121212] rounded-full text-yellow-500 hover:bg-yellow-600 hover:text-black transition-colors"
                  >
                    <FiCode size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Portfolio;
