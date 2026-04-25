import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
   <header className='bg-white shadow'>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* left and right */}
         <div className="flex justify-between h-16">
            {/* left */}

            <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                    <Link to='/' className='text-2xl font-bold text-orange-600'>Blogify</Link>
                </div>

                {/* nav */}

                <nav className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                     <Link to='/' className="inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-bold">Home</Link>

                     <Link to='/articles' className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold">Articles</Link>

                     <Link to='/write' className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold">Write</Link>
                     
                     <Link to='/articles' className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold">Articles</Link>

                     <Link to='/My Articles' className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold">My Articles</Link>

                </nav>
            </div>

               {/* right */}

               <div className="flex items-center space-x-4">
                {/* profile */}
                  <div>
                    <span>Hello, Hamuuda</span>
                  </div>
                  {/* button */}
                  <div className='items-center space-x-4'>
                      <Link to="/signin" className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>sign In</Link>

                      <Link to="/singup" className='hidden sm:inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>Sing Up</Link>
                      
                  </div>
               </div>
         </div>
       </div>
   </header>
  )
}

export default Header
