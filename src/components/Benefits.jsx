import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Gift, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Benefits = () => {
  const { toast } = useToast();

  const deals = [
    {
      icon: <Percent className="w-8 h-8" />,
      title: "First Month 50% Off",
      description: "New tenants get half off their first month's rent",
      badge: "Limited Time"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Free Property Listing",
      description: "List your first property completely free",
      badge: "New Owners"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges",
      badge: "Always"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Damage Protection",
      description: "Comprehensive coverage for property owners",
      badge: "Premium"
    }
  ];

  const handleClaimDeal = (deal) => {
    toast({
      title: `Claim ${deal}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Exclusive <span className="text-[#FFDD32]">Benefits & Deals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take advantage of our special offers designed to save you money and provide extra value
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2">
                <span className="bg-[#FFDD32] text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  {deal.badge}
                </span>
              </div>
              <div className="bg-[#FFDD32]/10 w-16 h-16 rounded-lg flex items-center justify-center text-[#FFDD32] mb-4">
                {deal.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
              <Button
                className="w-full bg-[#FFDD32] text-gray-900 hover:bg-[#FFE865] font-semibold"
                onClick={() => handleClaimDeal(deal.title)}
              >
                Claim Deal
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Save More?
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our premium membership and unlock even more exclusive benefits and priority support
          </p>
          <Button
            size="lg"
            className="bg-[#FFDD32] text-gray-900 hover:bg-[#FFE865] font-semibold text-lg px-8"
            onClick={() => handleClaimDeal('Premium Membership')}
          >
            Upgrade to Premium
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;