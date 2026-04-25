import React, { useState } from "react";
import { Link } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const avatar_url = null;
  //  "https://images.unsplash.com/photo-1761839258605-d1b118266ccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* left and right  hambuger*/}
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
                  <button
                    className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {avatar_url ? (
                      <img className="h-8 w-8 rounded-full" src={avatar_url} />
                    ) : avatar_url ? (
                      <img className="h-8 w-8 rounded-full" src={avatar_url} />
                    ) : (
                      <FaUserAlt className="text-gray-600" />
                    )}
                  </button>

                  {/* dropDown menu */}
                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 w-48  mt-1 rounded-md shadow bg-white z-50"
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div className="absolute h-3 w-full top{[12px] "></div>
                      <Link className="block px-4 py-2 text-s text-gray-700 hover:text-gray-100">
                        Your Profile
                      </Link>
                      <Link className="block px-4 py-2 text-s text-gray-700 hover:bg-gray-100">
                        Manage Articles
                      </Link>
                      <Link className="block px-4 py-2 text-s text-gray-700 hover:bg-gray-100">
                        Signin
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* button */
              
             <div className='items-center space-x-4'>
                      <Link to="/signin" className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>sign In</Link>

                      <Link to="/singup" className='hidden sm:inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>Sing Up</Link>
                      
                  </div>
                  
            )}
          </div>

          {/* humbuger */}

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
            >
              {isMenuOpen ?  <IoMdClose className="block w-6 h-6" />  :  <CiMenuBurger className="block w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}

      {isMenuOpen && (
        <div className="sm:hidden py-5">
          <div className="pt-2 bp-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium text-orange-700 bg-orange-50"
            >
              Home
            </Link>

            <Link
              to="/articles"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              Articles
            </Link>
          </div>

          {/* if is logged in */}

          {isLoggedIn && (
            <>
             <Link
                to="/editor" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800">Write</Link>

             <Link
                to="/manage-articles" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800">My Articles</Link>

             <Link
                to="/profile" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800">Profile</Link>

                <button
                //  onClick={logout}
                 className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600  hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">Sign Out
                  

                </button>
            </>
          )}


           {/* if is not logged in */}

          {!isLoggedIn && ( 
            <>
              <Link
                  to="/signin"
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800"
                >
                  sign In
                </Link>

                <Link
                  to="/singup"
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800"
                >
                  Sing Up
                </Link>
            </>
          )}

        </div>
      )}
    </header>
  );
};

export default Header;
