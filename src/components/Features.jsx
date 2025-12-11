import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Shield, DollarSign, Clock, Star } from 'lucide-react';

const Features = () => {
  const ownerFeatures = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Maximize Revenue",
      description: "Get the best rental rates with our market analysis tools"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Quality Tenants",
      description: "Access verified tenants with background checks"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Safe and secure payment processing guaranteed"
    }
  ];

  const tenantFeatures = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Wide Selection",
      description: "Browse thousands of verified rental properties"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Booking",
      description: "Book your dream home in just a few clicks"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Best Deals",
      description: "Get access to exclusive rental offers and discounts"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Features for <span className="text-[#FFDD32]">Everyone</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a property owner or a tenant, we have the perfect features to meet your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Property Owners Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Property Owners</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {ownerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#FFDD32]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FFDD32] p-3 rounded-lg text-gray-900 shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tenants Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Tenants</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {tenantFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#FFDD32]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FFDD32] p-3 rounded-lg text-gray-900 shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;