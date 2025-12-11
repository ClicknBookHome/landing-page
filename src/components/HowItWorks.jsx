import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, FileCheck, Key } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Explore Listings",
      description: "Browse thousands of high-quality, verified property listings across your preferred locations.",
      step: "01"
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Apply Filters & Compare",
      description: "Use smart filters to match your budget and lifestyle. Compare properties side-by-side.",
      step: "02"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Visits",
      description: "Book property visits instantly and communicate directly with owners—no brokers needed.",
      step: "03"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Secure Booking",
      description: "Complete verification, sign digital agreements, and make secure payments online.",
      step: "04"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Move In",
      description: "Get your keys and move into your new home. Manage rent and documents from your dashboard.",
      step: "05"
    }
  ];

  return (
    <section className="py-20 bg-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding and booking your dream rental is simple with our streamlined process.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#FFDD32]/30 -z-10"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-[#FFDD32] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                  <div className="text-gray-900">
                    {item.icon}
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-500 mb-2">Step {item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;