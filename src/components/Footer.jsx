import React from 'react';
import { Home, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
// removed useToast import because we won't show the popup
// import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  // const { toast } = useToast(); // no toast used

  // noop handler — prevents default and does nothing (no popup)
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    // Optional: console.log for debug
    // console.log('Clicked dummy link:', link);
  };

  const footerLinks = {
    company: ['About Us', 'Careers', 'Press', 'Blog'],
    support: ['Help Center', 'Safety', 'Contact Us', 'FAQs'],
    legal: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility']
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FFDD32] rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-gray-900" />
              </div>
              <span className="text-2xl font-bold">ClickN<span className="text-[#FFDD32]">Book</span></span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Making home rentals simple, secure, and efficient for property owners and tenants worldwide. Join the digital revolution in real estate today.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-[#FFDD32]" />
                <a href="mailto:contact@clicknbookhome.com">contact@clicknbookhome.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[#FFDD32]" />
                <a href="tel:+910000000000">+91 000 000 0000</a>
              </div>
            </div>
          </div>

          <div>
            <span className="font-bold text-lg mb-6 block text-[#FFDD32]">Company</span>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link}>
                  <button
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-6 block text-[#FFDD32]">Support</span>
            <ul className="space-y-3">
              {footerLinks.support.map(link => (
                <li key={link}>
                  <button
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-6 block text-[#FFDD32]">Legal</span>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link}>
                  <button
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ClickNBook Home. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <button
                  key={social.name}
                  onClick={(e) => handleLinkClick(e, social.name)}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFDD32] text-gray-400 hover:text-gray-900 flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
