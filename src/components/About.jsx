import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About ClickNBook Home
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            ClickNBook Home is a modern digital rental marketplace designed to simplify the home-search and booking experience. Our platform brings together verified listings, owner–tenant transparency, and a smooth online rental workflow.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Traditional renting is full of challenges—unclear information, multiple visits, unreliable brokers, hidden charges, and slow processes. <span className="font-bold text-gray-900">We solve these problems</span> through a transparent and user-friendly system where everyone wins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border border-[#FFDD32] rounded-2xl p-8 text-center h-full hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-[#FFDD32] rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To remove the stress from house hunting and provide a seamless digital renting ecosystem.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border border-[#FFDD32] rounded-2xl p-8 text-center h-full hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-[#FFDD32] rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To build India's most trusted digital ecosystem for rentals—where finding a home takes minutes, not months.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border border-[#FFDD32] rounded-2xl p-8 text-center h-full hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-[#FFDD32] rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-600">
              Combining technology with trust to make renting as effortless as booking a hotel—fast, reliable, and fully online.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;