import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AppDownload = () => {
  // const { toast } = useToast();

  // const handleDownload = (store) => {
  //   toast({
  //     title: `Download on ${store}`,
  //     description: "🚧 The app is coming soon to stores! 🚀"
  //   });
  // };

  return (
    <section id="app-download" className="py-16 md:py-24 bg-[#FFDD32]/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFDD32] rounded-full text-sm font-semibold text-gray-900 mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Mobile App</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Download the <span className="text-[#FFDD32]">ClickNBook</span> App
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the easiest way to rent or list properties right from your pocket. 
              Get real-time notifications, chat with landlords, and manage your bookings on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 h-16 px-6"
                onClick={() => handleDownload('App Store')}
              >
                <div className="flex items-center text-left">
                  <Download className="w-8 h-8 mr-3" />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 h-16 px-6"
                onClick={() => handleDownload('Google Play')}
              >
                <div className="flex items-center text-left">
                  <Download className="w-8 h-8 mr-3" />
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-[#FFDD32] rounded-3xl blur-3xl opacity-30 transform rotate-6"></div>
              <img 
                className="relative rounded-3xl shadow-2xl border-8 border-white"
                alt="ClickNBook mobile app interface showing property listings"
               src="https://images.unsplash.com/photo-1569587889770-9134d27b292e" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;