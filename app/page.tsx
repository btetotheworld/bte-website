import React from "react";
import HeroSection from "@/components/HeroSection";
import FeturedProgramme from "@/components/FeturedProgramme";
import Events from "@/components/Events/Events";
import Subscribe from "@/components/Subscribe";
import Volunteer from "@/components/Volunteer";

const Page: React.FC = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="featured">
        <FeturedProgramme />
      </section>
      {/* <section id="volunteer">
        <Volunteer />
      </section> */}
      <section id="subscribe">
        <Subscribe />
      </section>
    </div>
  );
};

export default Page;
