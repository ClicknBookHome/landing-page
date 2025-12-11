import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import OwnerBenefits from '@/components/OwnerBenefits';
import ForPropertyOwners from '@/components/ForPropertyOwners';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>ClickNBook Home - Modern Digital Rental Marketplace</title>
        <meta name="description" content="Find your perfect home or list your property with ClickNBook Home. Verified listings, secure payments, and a seamless digital rental experience." />
      </Helmet>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Header />
        <Hero />
        <Services />
        <HowItWorks />
        <OwnerBenefits />
        <ForPropertyOwners />
        <About />
        <Testimonials />
        <AppDownload />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;