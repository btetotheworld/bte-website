"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/bte.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "-50px 0px -50px 0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      let foundActive = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          foundActive = true;
        }
      });

      if (!foundActive) {
        setActiveSection("about");
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleLinkClick = (id: string) => {
    setMenuOpen(false);
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="bg-white fixed top-0 w-full z-50 font-sans shadow-md">
      <div className="max-w-full mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="BTE Logo" width={80} height={80} className="mr-2 grayscale" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {["events", "about", "volunteer", "subscribe", "featured"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`hover:text-gray-800 px-6 font-semibold relative ${
                activeSection === section ? "text-gray-900" : "text-gray-600"
              }`}
              onClick={() => handleLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <div>
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gray-900"></span>
                  <span className="absolute right-0 top-2  h-[0.6rem] w-[0.6rem] rounded-full  bg-text-default"></span>
                </div>
                  
              )}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <button
          onClick={() => handleLinkClick("contact")}
          className="hidden md:block bg-white text-gray-900 py-2 px-4 rounded-b-[24px] rounded-tr-[24px] border-gray-900 border-2 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 ease-out"
        >
          Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 border-gray-900 border-2 px-2 rounded-b-[24px] rounded-tr-[24px] transition-all duration-300 ease-in-out"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white space-y-4 py-4 min-h-screen shadow-lg">
          {["events", "about", "volunteer", "subscribe", "featured"].map((section) => (
            <button
              key={section}
              onClick={() => handleLinkClick(section)}
              className={`block w-full text-center py-3 font-semibold ${
                activeSection === section ? "text-gray-900" : "text-gray-600"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick("visit")}
            className="block w-full text-center rounded-b-[24px] rounded-tr-[24px] bg-gray-900 text-white py-3 px-4 hover:bg-opacity-90 mx-6 mt-2"
          >
            Join the BTE Family
          </button>
        </div>
      )}
    </header>
  );
}
