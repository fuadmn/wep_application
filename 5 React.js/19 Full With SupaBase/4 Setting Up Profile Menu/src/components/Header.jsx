import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const avatar_Url = null; 
  // 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

  return (
    <header className='bg-white shadow'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* left and right */}
        <div className="flex justify-between h-16">
          {/* left */}

          <div className="flex">
            {/* logo */}

            <div className="flex-shrink-0 flex items-center">
              <Link className='text-2xl font text-orange-600'>Blogify</Link>
            </div>

            {/* nav */}

            <nav className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <Link to='/' className='inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-medium text-gray-900'>Home</Link>

              <Link to='/articles' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Articles</Link>

              <Link to='/write' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Write</Link>

              <Link to='/articles' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Articles</Link>

              <Link to='/My Articles' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>My Articles</Link>
            </nav>
          </div>

          {/* right */}

          <div className='flex items-center space-x-4'>
            {/* profile */}

            {isLoggedIn ? (
              <>
              <div className='text-sm text-gray-700'>
                <span>Home , Hamuuda</span>
              </div>
            
            <div className="relative">
              <button className='flex justify-center items-center h-8 w-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focys:ring-offset-2 focus:ring-amber-500'>
                 {
                  avatar_Url  ?  <img className=' h-8 w-8 rounded-full' src={avatar_Url}/> : <FaUser className='text-orange-600'/>
                 }
              </button>
            </div>
              </>
            ) :
              // {/* button */}
              (<div className='flex items-center space-x-4'>
                <Link to='/signin' className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>Sign In</Link>

                <Link to='/signup' className='hidden sm:inline-flex items-center justify-center px-4 py-2 border text-sm  font-medium text-orange-600 bg-white rounded-md border-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>Sign Up</Link>
              </div>)}


          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
