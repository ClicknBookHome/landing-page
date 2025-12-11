import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CTA = () => {
  const { toast } = useToast();

  const handleAction = (action) => {
    toast({
      title: action,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFDD32] rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFDD32] rounded-full blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started with <span className="text-[#FFDD32]">ClickNBook?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Join thousands of satisfied property owners and tenants. Start your journey today and experience the easiest way to rent or list properties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FFDD32] text-gray-900 hover:bg-[#FFE865] font-semibold text-lg px-8 py-6 group"
              onClick={() => handleAction('Get Started Now')}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg px-8 py-6"
              onClick={() => handleAction('Contact Sales')}
            >
              Contact Sales
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#FFDD32]">15K+</p>
              <p className="text-gray-300 mt-2">Properties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#FFDD32]">50K+</p>
              <p className="text-gray-300 mt-2">Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#FFDD32]">98%</p>
              <p className="text-gray-300 mt-2">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#FFDD32]">24/7</p>
              <p className="text-gray-300 mt-2">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;