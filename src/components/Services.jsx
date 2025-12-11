import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ShieldCheck, Calendar, CreditCard, FileText, FileSignature, LayoutGrid, UserCheck, Bell } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Premium Property Listing",
      description: "Professional photos & detailed descriptions to showcase your property."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Verified Tenant Leads",
      description: "Get quality tenant leads with complete ID checks and verification."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Visit Scheduling & Tracking",
      description: "Manage property visits seamlessly with real-time tracking and notifications."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Monthly UPI Rent Collection",
      description: "Automated rent collection with secure UPI payments—no delays, no follow-ups."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Auto-Generated Invoices",
      description: "Automatic invoice generation with complete payment history and records."
    },
    {
      icon: <FileSignature className="w-8 h-8" />,
      title: "Digital Rent Agreements",
      description: "Create, sign, and store legally valid rent agreements online."
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "Multi-Property Management",
      description: "Manage all your properties effortlessly from one unified dashboard."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Police Verification Support",
      description: "Tenant background checks and police verification assistance."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-Time Alerts",
      description: "Instant notifications for payments, visits, inquiries, and updates."
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-600 font-medium uppercase tracking-wider text-sm">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
             Everything You Need for a <span className="text-[#FFDD32]">Seamless Rental Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and features to make property rental management effortless and professional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-[#FFDD32] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#FFDD32] rounded-xl flex items-center justify-center text-gray-900 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;