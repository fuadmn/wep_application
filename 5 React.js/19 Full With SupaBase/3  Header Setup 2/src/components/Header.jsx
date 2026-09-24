import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
                   <Link  to='/' className='inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-medium text-gray-900'>Home</Link>

                   <Link  to='/articles' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Articles</Link>

                   <Link  to='/write' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Write</Link>

                   <Link  to='/articles' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>Articles</Link>

                   <Link  to='/My Articles' className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900'>My Articles</Link>
                </nav>
            </div>

            {/* right */}

            <div className='flex items-center space-x-4'>
              {/* profile */}
              <div>
                <span>Home , Hamuuda</span>
              </div>

              {/* button */}
              <div className='flex items-center space-x-4'>
                  <Link to='/signin' className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>Sign In</Link>

                  <Link to='/signup' className='hidden sm:inline-flex items-center justify-center px-4 py-2 border text-sm  font-medium text-orange-600 bg-white rounded-md border-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>Sign Up</Link>
              </div>
            </div>
         </div>
       </div>
    </header>
  )
}

export default Header
