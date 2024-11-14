// welcome/page.tsx

import React from 'react';
import HeroSection from '@/components/HeroSection';
import MainSection from '@/components/MainSection';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import TellAFriend from '@/components/TellAFriend';
import Layout from './layout';

const Page: React.FC = () => {
  return (
    <div className="max-h-full">
      <HeroSection />
      <MainSection />
      <AboutUs />
      <ContactUs />
      <TellAFriend />
    </div>
  );
};

export default Page;
