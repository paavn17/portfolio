'use client';

import { motion } from 'framer-motion';
import { FiEye, FiCode } from 'react-icons/fi';

const Portfolio = () => {
  const projects = [
    {
      title: "Ace Bot",
      category: "Web Development",
      previewLink: "https://ace-bot-nu.vercel.app/",
      codeLink: "https://github.com/paavn17/AceBot",
      imageUrl: "./proj1.png",
    },
    {
      title: "Sealed Ideas",
      category: "Mobile App",
      previewLink: "https://sealed-ideas.web.app",
      codeLink: "https://github.com/paavn17/sealed-ideas",
      imageUrl: "./proj2.png",
    },
    {
      title: "Project 3",
      category: "UI/UX Design",
      previewLink: "#",
      codeLink: "#",
      imageUrl: "/path/to/image3.jpg",
    },
    {
      title: "Project 4",
      category: "Data Science",
      previewLink: "#",
      codeLink: "#",
      imageUrl: "/path/to/image4.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#121212] px-0">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-2 mt-4 text-white"
        >
          Portfolio
        </motion.h1>
        <div className="border-b-2 border-yellow-500 mb-8 sm:mb-10 w-16"></div>

        {/* Portfolio Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-xl group w-full max-w-[550px] mx-auto border border-gray-800 hover:shadow-yellow-500/20 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Content */}
                <div className="p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {project.category}
                    </p>
                  </div>

                  {/* Icons */}
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default Portfolio;
