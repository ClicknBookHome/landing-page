import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById('app-download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find Your Perfect <span className="text-[#FFDD32]">Home</span> or List Your <span className="text-[#FFDD32]">Property</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              ClickNBook connects property owners with quality tenants. Whether you're searching for your dream rental or looking to list your property, we make it simple, secure, and efficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#FFDD32] text-gray-900 hover:bg-[#FFE865] font-semibold text-lg px-8 py-3 h-auto transition-transform hover:scale-105"
                onClick={scrollToDownload}
              >
                <Search className="w-5 h-5 mr-2" />
                Find a Home
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold text-lg px-8 py-3 h-auto transition-all"
                  >
                    List Your Property
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>List Your Property</DialogTitle>
                    <DialogDescription className="text-lg pt-4">
                      Please contact us at:
                      <br />
                      <span className="font-bold text-gray-900 select-all">contact@clicknbookhome.com</span>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <img alt="Modern apartment interior with bright living space" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1601799115105-2d021afb8de1" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFDD32]/10 rounded-full blur-3xl"></div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;