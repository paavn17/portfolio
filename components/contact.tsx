'use client';

import React, { FormEvent, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append('access_key', '380b4b7c-c0a7-4707-ac65-0e79816f55aa');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      } else {
        toast.error('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-[#111] text-white">
      <ToastContainer position="bottom-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-2 text-white"
        >
          Contact
        </motion.h1>
        <div className="border-b-2 border-yellow-400 w-16 mb-6"></div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10 sm:mb-12 rounded-xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8207848232726!2d83.18257217599892!3d17.70402209502196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3959c8ac661f65%3A0xf862a09b4de4e7f0!2sDuvvada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714469062376!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ filter: 'invert(90%) hue-rotate(180deg)', border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold mb-4 text-white"
        >
          Contact Form
        </motion.h2>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className="bg-[#1c1c1c] text-white text-base p-4 rounded-xl border border-gray-700 focus:border-yellow-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="bg-[#1c1c1c] text-white text-base p-4 rounded-xl border border-gray-700 focus:border-yellow-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="bg-[#1c1c1c] text-white text-base p-4 rounded-xl border border-gray-700 focus:border-yellow-500 md:col-span-2 min-h-[150px] resize-none"
            required
          ></textarea>
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-yellow-500 text-black font-semibold text-base py-3 px-6 rounded-xl hover:bg-yellow-600 transition-all duration-200"
            >
              <FaPaperPlane /> Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </main>
  );
};

export default Contact;
