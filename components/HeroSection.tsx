import React from "react";
import { faker } from "@faker-js/faker";
//import Image from "next/image";


export default function HeroSection() {
  const LoremShort = faker.lorem.paragraph(2);
  return (
    <div className="hero-section bg-cover bg-center text-white flex flex-col justify-center items-center h-[100vh] md:h-[80] relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
      {/* Overlay for text contrast */}
      <div className="z-10 px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-8">
          Welcome to Beliver&apos;s Tech Expo
        </h1>
        <p className="text-lg md:text-xl p-4 mb-6">
        {LoremShort}
        </p>
        <a
          href="#about"
          className="inline-block bg-color-primary text-white py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition"
        >
          Explore More
        </a>
      </div>
      <div className="absolute bottom-10 flex justify-center w-full">
        <a href="#about" className="text-color-primary text-xl animate-bounce">
          ↓ Scroll Down
        </a>
      </div>
    </div>
  );
}
