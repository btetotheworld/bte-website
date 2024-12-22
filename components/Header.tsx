"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/bte.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Route mapping for cleaner navigation logic
  const routes: Record<string, string> = {
    home: "/",
    volunteer: "/volunteer",
    events: "/events",
    about: "/community",
  };

  // Handle navigation
  const handleLinkClick = (id: keyof typeof routes) => {
    setMenuOpen(false);
    if (routes[id]) {
      router.push(routes[id]);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-white fixed top-0 w-full z-50 font-sans shadow-md">
      <div className="max-w-full mx-auto px-6 md:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="BTE Logo" width={80} height={80} priority className="mr-2 grayscale" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {["events", "about", "volunteer"].map((section) => (
            <div
              key={section}
              className={`hover:text-gray-800 cursor-pointer px-6 font-semibold relative ${
                pathname === routes[section] ? "text-gray-900" : "text-gray-600"
              }`}
              onClick={() => handleLinkClick(section as keyof typeof routes)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {pathname === routes[section] && (
                <div>
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gray-900"></span>
                  <span className="absolute right-0 top-2 h-[0.6rem] w-[0.6rem] rounded-full bg-text-default"></span>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link
            href="/contact-us"
            className="hidden md:block bg-white text-gray-900 py-2 px-4 rounded-b-[24px] rounded-tr-[24px] border-gray-900 border-2 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 ease-out"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="hidden md:block bg-[#f7f2d4] text-gray-900 py-2 px-4 rounded-b-[24px] rounded-tr-[24px] font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 ease-out"
          >
            Become a Sponsor
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 border-gray-900 border-2 px-2 rounded-b-[24px] rounded-tr-[24px] transition-all duration-300 ease-in-out"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white space-y-4 py-4 min-h-screen shadow-lg">
          {["events", "about", "volunteer"].map((section) => (
            <div
              key={section}
              onClick={() => handleLinkClick(section as keyof typeof routes)}
              className={`block w-full text-center py-3 font-semibold ${
                pathname === routes[section] ? "text-gray-900" : "text-gray-600"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
          <Link
            href="/contact-us"
            className="block w-full text-center rounded-b-[24px] rounded-tr-[24px] bg-gray-900 text-white py-3 px-4 hover:bg-opacity-90 mx-6 mt-2"
          >
            Join the BTE Family
          </Link>
        </div>
      )}
    </header>
  );
}
