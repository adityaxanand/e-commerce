import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">ECOMMERCE</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-black">Categories</a>
            <a href="#" className="text-gray-600 hover:text-black">Sale</a>
            <a href="#" className="text-gray-600 hover:text-black">Clearance</a>
            <a href="#" className="text-gray-600 hover:text-black">New stock</a>
            <a href="#" className="text-gray-600 hover:text-black">Trending</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">Help</a>
            <a href="#" className="text-gray-600 hover:text-black">Orders & Returns</a>
            <span>Hi, John</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <div className="text-center py-2 bg-gray-100 text-sm">
          &lt; Get 10% off on business sign up &gt;
        </div>
      </div>
    </header>
  );
};

export default Header;