import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-inner py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
        
        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} Registration System. All rights reserved.
        </p>
        
        {/* Right side */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
