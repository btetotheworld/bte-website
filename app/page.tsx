// welcome/page.tsx

import React from "react";
import HeroSection from "@/components/HeroSection";
// import MainSection from "@/components/MainSection";
// import AboutUs from "@/components/AboutUs";
// import ContactUs from "@/components/ContactUs";
import FeturedProgramme from "@/components/FeturedProgramme";
import Events from "@/components/Events/Events";
import Subscribe from "@/components/Subscribe";
// import Volunteer from "@/components/Volunteer";
//import TellAFriend from "@/components/TellAFriend";

const Page: React.FC = () => {
  return (
    <div>
      {/* events", "about", "volunteer", "subscribe", "featured */}
      <section id="home">
        <HeroSection />
      </section>
      <section id="featured">
        <FeturedProgramme />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="subscribe">
        <Subscribe />
      </section>
      {/* <section id="volunteer">
        <Volunteer />
      </section> */}

      {/* <section id="main">
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
      </section> */}
      {/* <section id="refer">
        {" "}
        <TellAFriend />
      </section> */}
    </div>
  );
};

export default Page;
