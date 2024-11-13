import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <h1 className="text-2xl font-bold">BTE</h1>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <a href="/" className="hover:text-blue-200">Home</a>
          <a href="/about" className="hover:text-blue-200">About</a>
          <a href="/contact" className="hover:text-blue-200">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
