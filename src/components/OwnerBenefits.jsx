import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Star, CreditCard, ShieldCheck, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const OwnerBenefits = () => {
  const benefits = [
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Zero Listing Charges",
      description: "List your property for free with no hidden costs.",
      badge: "FREE"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Priority Promotion",
      description: "Get highlighted to active renters searching in your area.",
      badge: "PREMIUM"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Monthly Payouts",
      description: "Guaranteed on-time payments. No delays, no follow-ups.",
      badge: "GUARANTEED"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Document Security",
      description: "100% encrypted storage for all your rental documents.",
      badge: "ENCRYPTED"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Premium Support",
      description: "We treat your property like our own with dedicated assistance.",
      badge: "24/7"
    }
  ];

  return (
    <section className="py-20 bg-[#0F172A] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Best Deals for Property Owners
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Exclusive benefits designed to give you the best value and peace of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-gray-900 p-6 rounded-xl relative hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute top-4 right-4 bg-[#FFDD32] text-[10px] font-bold px-2 py-1 rounded text-gray-900 uppercase">
                {item.badge}
              </div>
              <div className="w-12 h-12 bg-[#FFDD32] rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#FFDD32] hover:bg-[#FFE865] text-gray-900 font-bold text-lg h-14 px-10 rounded-lg">
                    Get Started Today - It's Free!
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join as a Property Owner</DialogTitle>
                  <DialogDescription className="text-lg pt-4">
                    Email us to get your free listing started:
                    <br />
                    <span className="font-bold text-gray-900 select-all">contact@clicknbookhome.com</span>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
        </div>
      </div>
    </section>
  );
};

export default OwnerBenefits;