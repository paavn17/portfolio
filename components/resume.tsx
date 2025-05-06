'use client';

import { Book, Briefcase, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#111]">
      <div className="max-w-full mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-2 mt-4 text-white"
        >
          Resume
        </motion.h1>
        <div className="border-b-2 border-yellow-400 mb-8 w-16"></div>

        {/* Education Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-bold mb-2 mt-4 text-white">Education</h2>
          <div className="border-b-2 border-yellow-400 mb-4 sm:mb-6 w-16"></div>

          <ol className="relative border-s border-white ml-3">
            <li className="mb-8 sm:mb-10 ms-4">
              <div className="absolute w-2.5 h-2.5 bg-yellow-500 rounded-full mt-1.5 -start-[5px] border-white border animate-ping-slow shadow-yellow-500 shadow-md"></div>
              <time className="mb-1 text-xs sm:text-sm font-medium text-yellow-500">2021 — 2025</time>
              <h3 className="text-base sm:text-lg font-semibold text-white">Vignan's Institute Of Information Technology</h3>
              <p className="text-sm text-gray-400">
                Pursued my Under Graduation in the stream of Computer Science and Engineering
              </p>
            </li>
            <li className="ms-4">
              <div className="absolute w-2.5 h-2.5 bg-yellow-500 rounded-full mt-1.5 -start-[5px] border-white border animate-ping-slow shadow-yellow-500 shadow-md"></div>
              <time className="mb-1 text-xs sm:text-sm font-medium text-yellow-500">2019 — 2021</time>
              <h3 className="text-base sm:text-lg font-semibold text-white">Ascent Classes</h3>
              <p className="text-sm text-gray-400">Intermediate in the stream of MPC</p>
            </li>
          </ol>
        </section>

        {/* Experience Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-bold mb-2 mt-4 text-white">Experience</h2>
          <div className="border-b-2 border-yellow-400 mb-4 sm:mb-6 w-16"></div>

          <ol className="relative border-s border-white ml-3">
            <li className="mb-8 sm:mb-10 ms-4">
              <div className="absolute w-2.5 h-2.5 bg-yellow-500 rounded-full mt-1.5 -start-[5px] border-white border animate-ping-slow shadow-yellow-500 shadow-md"></div>
              <time className="mb-1 text-xs sm:text-sm font-medium text-yellow-500">Jan 2025 — Apr 2025</time>
              <h3 className="text-base sm:text-lg font-semibold text-white">Front-End Intern, Vasmi Groups</h3>
              <p className="text-sm text-gray-400">
                Completed a 3-month internship focused on front-end development. Gained valuable experience working in a professional environment, explored company work culture, and adapted to delivering quality work under pressure and deadlines.
              </p>
            </li>
          </ol>
        </section>


        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <h2 className="text-lg sm:text-2xl font-bold text-yellow-400">My Skills</h2>
          </div>

          <div className="space-y-5 px-4 sm:px-10">
            {[ 
              { name: 'HTML', level: 90 },
              { name: 'CSS, Tailwind And Bootstrap', level: 90 },
              { name: 'React.js', level: 85 },
              { name: 'Next.js', level: 80 },
              { name: 'Firebase', level: 80},
              { name: 'JavaScript', level: 70 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-100 font-medium">{skill.name}</span>
                  <span className="text-yellow-400 font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
