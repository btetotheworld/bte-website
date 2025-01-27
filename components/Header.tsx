"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/bte.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Use the IntersectionObserver API to detect which section is currently in view
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust this value to determine when a section is considered in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // Collapse the menu when a link is clicked
  };

  return (
    <header className="bg-white fixed top-0 w-full z-50">
      <div className="max-w-full min-h-[112px] mx-auto px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo} // Path to your image in the public folder
              alt="BTE Logo"
              width={80} // Adjust the width as needed
              height={80} // Adjust the height as needed
              // apply image filter of grayscale to the image
              className="mr-2  grayscale"
            />
          </Link>
          {/* <div className="text-color-primary font-bold text-xl">
            <Link href="/">BTE</Link>
          </div> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-color-text ">
          {["events", "about", "volunteer"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`hover:text-black text-text-default  font-[600] relative ${
                activeSection === section ? "text-color-primary" : ""
              }`}
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {/* Active underline */}
              {activeSection === section && (
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-color-primary"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block ">
          <Link
            href="#contact"
            className="bg-white text-text-default py-2 px-4 rounded-b-[24px] rounded-tr-[24px] border-[#55A4CE] border-2 font-[600] hover:bg-opacity-90 transition-all"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          {/* <Link
            href="#contact"
            className=" text-text-default py-[0.65rem] px-4 rounded-b-[24px] rounded-tr-[24px] bg-[#F4F1DE] font-[600] hover:bg-opacity-90 transition-all ml-[20px]"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-default rounded-b-[24px] rounded-tr-[24px]  border-[#55A4CE] border-2 px-2 transition-all duration-300 ease-in-out"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-8 h-8" /> // Show close icon when menu is open
          ) : (
            <Bars3Icon className="w-8 h-8" /> // Show hamburger icon when menu is closed
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-color-bg  space-y-4 py-4 transition-all min-h-screen">
          {["events", "about", "volunteer"].map((section) => (
            <Link
              key={section}
              href={`/#${section}`}
              className={`block text-center hover:text-black text-text-default  font-[600]  ${
                activeSection === section ? "text-color-primary" : ""
              }`}
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <Link
            href="#visit"
            className=" text-center rounded-b-[24px] rounded-tr-[24px] bg-[#03045E] text-white py-3 px-4 rounded-lg hover:bg-opacity-90 mx-6 mt-2 flex items-center justify-center gap-2  "
            onClick={handleLinkClick}
          >
            <p>Join the BTE family </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16.5C5.10457 16.5 6 15.6046 6 14.5C6 13.3954 5.10457 12.5 4 12.5C2.89543 12.5 2 13.3954 2 14.5C2 15.6046 2.89543 16.5 4 16.5Z"
                fill="#FCFCFD"
              />
              <path
                d="M1.22 18.08C0.48 18.4 0 19.12 0 19.93V21.5H4.5V19.89C4.5 19.06 4.73 18.28 5.13 17.6C4.76 17.54 4.39 17.5 4 17.5C3.01 17.5 2.07 17.71 1.22 18.08Z"
                fill="#FCFCFD"
              />
              <path
                d="M20 16.5C21.1046 16.5 22 15.6046 22 14.5C22 13.3954 21.1046 12.5 20 12.5C18.8954 12.5 18 13.3954 18 14.5C18 15.6046 18.8954 16.5 20 16.5Z"
                fill="#FCFCFD"
              />
              <path
                d="M22.78 18.08C21.93 17.71 20.99 17.5 20 17.5C19.61 17.5 19.24 17.54 18.87 17.6C19.27 18.28 19.5 19.06 19.5 19.89V21.5H24V19.93C24 19.12 23.52 18.4 22.78 18.08Z"
                fill="#FCFCFD"
              />
              <path
                d="M16.24 17.15C15.07 16.63 13.63 16.25 12 16.25C10.37 16.25 8.93 16.64 7.76 17.15C6.68 17.63 6 18.71 6 19.89V21.5H18V19.89C18 18.71 17.32 17.63 16.24 17.15ZM8.07 19.5C8.16 19.27 8.34 19.08 8.56 18.98C9.66 18.49 10.82 18.25 11.99 18.25C13.17 18.25 14.32 18.5 15.42 18.98C15.65 19.08 15.82 19.27 15.91 19.5H8.07Z"
                fill="#FCFCFD"
              />
              <path
                d="M9 12.5C9 14.16 10.34 15.5 12 15.5C13.66 15.5 15 14.16 15 12.5C15 10.84 13.66 9.5 12 9.5C10.34 9.5 9 10.84 9 12.5ZM13 12.5C13 13.05 12.55 13.5 12 13.5C11.45 13.5 11 13.05 11 12.5C11 11.95 11.45 11.5 12 11.5C12.55 11.5 13 11.95 13 12.5Z"
                fill="#FCFCFD"
              />
              <path
                d="M2.48 11.36C2.17 10.6 2 9.86 2 9.1C2 6.52 4.02 4.5 6.6 4.5C9.28 4.5 10.42 6.24 12 8.09C13.57 6.26 14.7 4.5 17.4 4.5C19.98 4.5 22 6.52 22 9.1C22 9.86 21.83 10.6 21.52 11.36C22.17 11.67 22.7 12.18 23.05 12.8C23.65 11.6 24 10.38 24 9.1C24 5.4 21.1 2.5 17.4 2.5C15.31 2.5 13.31 3.47 12 5.01C10.69 3.47 8.69 2.5 6.6 2.5C2.9 2.5 0 5.4 0 9.1C0 10.38 0.35 11.6 0.96 12.8C1.31 12.18 1.84 11.67 2.48 11.36Z"
                fill="#FCFCFD"
              />
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
}
