
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Offerings from '@/components/home/Offerings';
import Industries from '@/components/home/Industries';
import CTA from '@/components/home/CTA';
import Footer from '@/components/Footer';
import WhatWeDo from '@/components/home/WhatWeDo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#12121e]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatWeDo />
        <Offerings />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
