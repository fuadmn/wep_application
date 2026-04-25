import React, { useState } from "react";
import { Link } from "react-router";
import { FaUserAlt } from "react-icons/fa";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const avatar_url = null
  //  "https://images.unsplash.com/photo-1761839258605-d1b118266ccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* left and right */}
        <div className="flex justify-between h-16">
          {/* left */}

          <div className="flex">
            {/* logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-orange-600">
                Blogify
              </Link>
            </div>

            {/* nav */}

            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-bold"
              >
                Home
              </Link>

              <Link
                to="/articles"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold"
              >
                Articles
              </Link>

              <Link
                to="/write"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold"
              >
                Write
              </Link>

              <Link
                to="/articles"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold"
              >
                Articles
              </Link>

              <Link
                to="/My Articles"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold"
              >
                My Articles
              </Link>
            </nav>
          </div>

          {/* right */}

          <div className="flex items-center space-x-4">
            {/* profile */}

            {isLoggedIn ? (
             <>
               <div className="text-sm text-gray-700">
                 <span>Hello, Hamuuda</span>
              </div>

              <div className="relative">
                    <button className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                      {
                        avatar_url ? <img className="h-8 w-8 rounded-full" src={avatar_url} /> : 
                        avatar_url ? <img className="h-8 w-8 rounded-full" src={avatar_url} /> : <FaUserAlt  className="text-orange-600"/>

                      }
                    </button>
              </div>
             </>
            ) : (
              /* button */
              <div className="items-center space-x-4">
                <Link
                  to="/signin"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  sign In
                </Link>

                <Link
                  to="/singup"
                  className="hidden md:inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Sing Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
