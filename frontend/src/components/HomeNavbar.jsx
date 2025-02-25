import React from "react";

function HomeNavbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600">Meraj</span>
          </div>

          {/* Navigation */}
          <div className="flex space-x-4">
            <a
              href="/"
              className="text-gray-700 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 active:bg-indigo-600"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 active:bg-indigo-600"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 active:bg-indigo-600"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
