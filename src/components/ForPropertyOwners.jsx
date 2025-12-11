import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, BarChart3, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ForPropertyOwners = () => {
  const benefits = [
    {
      title: "List your property in minutes",
      desc: "Premium, clean presentation that attracts quality tenants."
    },
    {
      title: "Get verified tenant leads",
      desc: "We match you with tenants actively searching in your area."
    },
    {
      title: "Secure monthly UPI payments",
      desc: "Collect rent automatically with digital records."
    },
    {
      title: "Manage multiple properties",
      desc: "Control everything from one powerful dashboard."
    }
  ];

  const growthCards = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reduce Vacancy Time",
      desc: "Find quality tenants faster and improve occupancy rates."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Stay Organized",
      desc: "Manage everything with smart digital tools and automated workflows."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Management",
      desc: "Handle tenants and payments like a professional rental business."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increase Efficiency",
      desc: "Boost rental efficiency with transparent processes and clear communication."
    }
  ];

  return (
    <section className="py-20 bg-[#FFFDF5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#FFDD32]/20 text-gray-800 text-sm font-semibold mb-4">For Property Owners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Welcome to the Future of Property Management</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <img alt="Modern high-rise apartment building showing property value" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1582647509900-96801d340b69?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
             </div>
             {/* Abstract yellow shape behind */}
             <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-[#FFDD32] rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Your property deserves more than traditional renting. We bring you a smart, secure, and effortless rental experience designed for modern property owners. <span className="font-bold text-gray-900">No stress. No confusion. Just results.</span>
            </p>

            <div className="space-y-6 mb-12">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How We Help You Grow</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {growthCards.map((card, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-[#FFDD32]">
                    <div className="mb-3 text-gray-900">{card.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1">{card.title}</h4>
                    <p className="text-xs text-gray-600">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full sm:w-auto bg-[#FFDD32] hover:bg-[#FFE865] text-gray-900 font-bold text-lg h-12 px-8">
                  List Your Property Now
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Start Listing Your Property</DialogTitle>
                  <DialogDescription className="text-lg pt-4">
                    Contact our onboarding team to get started:
                    <br />
                    <span className="font-bold text-gray-900 select-all">contact@clicknbookhome.com</span>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForPropertyOwners;