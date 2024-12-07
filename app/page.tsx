// welcome/page.tsx

import React from "react";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
//import TellAFriend from "@/components/TellAFriend";

const Page: React.FC = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>

      <section id="main">
        {" "}
        <MainSection />
      </section>
      <section id="about">
        {" "}
        <AboutUs />
      </section>
      <section id="contact">
        {" "}
        <ContactUs />
      </section>
      {/* <section id="refer">
        {" "}
        <TellAFriend />
      </section> */}
    </div>
  );
};

export default Page;
