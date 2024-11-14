// welcome/page.tsx

import React from 'react';
import HeroSection from '@components/HeroSection';
import MainSection from '@components/MainSection';
import AboutUs from '@components/AboutUs';
import ContactUs from '@components/ContactUs';
import TellAFriend from '@components/TellAFriend';
import Layout from './layout';

const Page: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <MainSection />
      <AboutUs />
      <ContactUs />
      <TellAFriend />
    </Layout>
  );
};

export default Page;
