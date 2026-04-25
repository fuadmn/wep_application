import React from 'react'
import { Link } from 'react-router'
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='bg-white'>
      
      <div className="max-w-7xl mx-auto py-4 overflow-hidden sm:px-6 li:px-8">
          {/* nav */}
          <nav className='mx-5 -my-2 flex flex-wrap justify-center'>
           <div className="px-2 py-2">
              <Link to="/" className='text-base text-gray-500 hover:text-gray-900'>Home</Link>
           </div>
           
           <div className="px-2 py-2">
              <Link to="/articles" className='text-base text-gray-500 hover:text-gray-900'>Articles</Link>
           </div>

           <div className="px-2 py-2">
            <Link to="/tags" className='text-base text-gray-500 hover:text-gray-900'>Tags</Link>
           </div>

           <div className="px-2 py-2">
              <Link to="/about" className='text-base text-gray-500 hover:text-gray-900'>About Us</Link>
           </div>

           <div className="px-2 py-2">
            <Link to="/contact" className='text-base text-gray-500 hover:text-gray-900'>Contact</Link>
           </div>

          </nav>

          {/* social icons */}

     <div className="mt-5 flex justify-center space-x-6">
      <a href="a" className='text-gray-400 hover:text-gray500'><FaTwitter /></a>
      <a href="a" className='text-gray-400 hover:text-gray500'><AiFillInstagram /></a>
      <a href="a" className='text-gray-400 hover:text-gray500'> <FiGithub /></a>
     </div>

      <p className='mt-5 text-center text-base text-gray-400'>copy;{new Date().getFullYear()} Blogify. All rights reserved.</p>

      </div>
      
    </div>
  )
}

export default Footer
