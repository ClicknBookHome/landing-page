import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // else: silently ignore (no toast)
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-[#FFDD32] rounded-lg flex items-center justify-center shadow-sm">
              <Home className="w-6 h-6 text-gray-900" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              ClickN<span className="text-[#FFDD32]">Book</span>Home
            </span>

          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-[#FFDD32] font-medium transition-colors">Services</button>
            <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-[#FFDD32] font-medium transition-colors">About</button>
            <button onClick={() => handleNavClick('app-download')} className="text-gray-700 hover:text-[#FFDD32] font-medium transition-colors">Mobile App</button>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <Button variant="ghost" className="font-semibold text-gray-700 hover:text-gray-900">Sign In</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#FFDD32] text-gray-900 hover:bg-[#FFE865] font-bold shadow-sm">
                    List Property
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col space-y-4">
                <button onClick={() => handleNavClick('services')} className="text-left py-2 font-medium text-gray-700">Services</button>
                <button onClick={() => handleNavClick('about')} className="text-left py-2 font-medium text-gray-700">About Us</button>
                <button onClick={() => handleNavClick('app-download')} className="text-left py-2 font-medium text-gray-700">Mobile App</button>
                <hr className="border-gray-100" />
                <Button variant="ghost" className="w-full justify-start font-semibold">Sign In</Button>
                <Button className="w-full bg-[#FFDD32] text-gray-900 hover:bg-[#FFE865] font-bold">List Property</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;