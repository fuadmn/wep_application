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
                <div className="flex-shrink-0 flex items-center">
                    <Link className='text-2xl font text-orange-600'>Blogify</Link>
                </div>
            </div>
         </div>
       </div>
    </header>
  )
}

export default Header
