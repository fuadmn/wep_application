import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { BiCalendarAlt } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { LiaSmsSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";



const App = () => {
  return (
    <div className='h-full pb-5 w-full bg-[#f4f4fa] pt-3 static'>

          <div className="max-w-5xl mx-auto bg-white drop-shadow-sm shadow- h-15 rounded-2xl flex justify-between items-center px-3">
            <h1 className='font-bold'>Dugsiiye</h1>
            <div className="space-x-3">
                  <a href="#" className='text-[0.8rem] text-gray-700'>Courses</a>
                  <a href="#" className='text-[0.8rem] text-gray-700'>mentorship</a>
                  <a href="#" className='text-[0.8rem] text-gray-700'>Courses</a>
                  <a href="#" className='text-[0.8rem] text-gray-700'>Mentorship</a>
                  <a href="#" className='text-[0.8rem] text-gray-700'>Community</a>
                  <a href="#" className='text-[0.8rem] text-gray-700'>Ambassador</a>
                  <a href="#" className='text-[0.8rem] text-gray-700'>Blog</a>
                  <a href="#" className='text-[0.8rem] text-gray-700'>About</a>
                  <a href="#" className='text-[0.8rem] text-gray-700 bg-blue-50 px-2 py-1.5 rounded'>Contact</a>
              </div>
    
            <div className="flex items-center space-x-3">
              <IoSunnyOutline className=' text-1xl'/>
              <BiCalendarAlt className=' text-1xl' />
              <div className="">
                <CiBellOn className='font-bold text-2xl relative'/>
                <div className="bg-green-500 h-4 w-4 rounded-full absolute top-3 right-14">
                  <h1 className='h-full flex items-center justify-center text-[0.5rem]'>79</h1>
                </div>
              </div>
                <img className='h-9 w-9 rounded-full' src="https://cdn.dugsiiye.com/avatars/64b39c148130ed05199505c5-1771703060896.jpg" alt="" srcset="" />
            </div>
          </div>

          <div className=" max-w-5xl mx-auto">
            <h1 className='mt-15'>Contact</h1>
            <h1 className='font-bold text-6xl'>Let's talk.</h1>
            <p className='mt-8 mb-20'>Have a question about courses, mentorship, or partnerships? We'd love to hear from you. <br /> Send us a message or reach out directly.</p>
            

          <div className="flex justify-between">

            
              <div className="w-1/2">
                <h1>Get in touch</h1>
                <h6 className='font-bold text-2xl my-1'>Multiple ways to reach us.</h6>
                <p className='text-[0.8rem] mb-5'>Choose whichever channel works best for you.</p>

              {/* email */}

                <div className="mt-5">
                  <div className="flex items-center justify-between">

              <div className="flex items-center"> 
                <div className="bg-gray-200 h-10 w-11 rounded-2xl flex items-center justify-center">
                  <LiaSmsSolid  className='text-[0.8rem]'/>
                </div>

                <div className="ml-3">
                    <h1 className='text-[0.7rem]'>EMAIL</h1>
                    <h2 className='font-bold text-1xl'>info@dugsiiye.con</h2>
                    <p className='text-[0.8rem] text-gray-500'>Well respond within 24 hours</p>
                </div>
              </div>
  
                <FaArrowRight className='text-gray-400 text-[0.8rem]'/>

              </div>

              <div className="border border-b-gray-50 my-3 "></div>
              </div>
              
                <div className="mt-5">
                  <div className="flex items-center justify-between">

              <div className="flex items-center"> 
                <div className="bg-gray-200 h-10 w-11 rounded-2xl flex items-center justify-center">
                  <LiaSmsSolid  className='text-[0.8rem]'/>
                </div>

                <div className="ml-3">
                    <h1 className='text-[0.7rem]'>EMAIL</h1>
                    <h2 className='font-bold text-1xl'>info@dugsiiye.con</h2>
                    <p className='text-[0.8rem] text-gray-500'>Well respond within 24 hours</p>
                </div>
              </div>
  
                <FaArrowRight className='text-gray-400 text-[0.8rem]'/>

              </div>

              <div className="border border-b-gray-50 my-3 "></div>
              </div>
              
                <div className="mt-5">
                  <div className="flex items-center justify-between">

              <div className="flex items-center"> 
                <div className="bg-gray-200 h-10 w-11 rounded-2xl flex items-center justify-center">
                  <LiaSmsSolid  className='text-[0.8rem]'/>
                </div>

                <div className="ml-3">
                    <h1 className='text-[0.7rem]'>EMAIL</h1>
                    <h2 className='font-bold text-1xl'>info@dugsiiye.con</h2>
                    <p className='text-[0.8rem] text-gray-500'>Well respond within 24 hours</p>
                </div>
              </div>
  
                <FaArrowRight className='text-gray-400 text-[0.8rem]'/>

              </div>

              <div className="border border-b-gray-50 my-3 "></div>
              </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between">

              <div className="flex items-center"> 
                <div className="bg-gray-200 h-10 w-11 rounded-2xl flex items-center justify-center">
                  <LiaSmsSolid  className='text-[0.8rem]'/>
                </div>

                <div className="ml-3">
                    <h1 className='text-[0.7rem]'>EMAIL</h1>
                    <h2 className='font-bold text-1xl'>info@dugsiiye.con</h2>
                    <p className='text-[0.8rem] text-gray-500'>Well respond within 24 hours</p>
                </div>
              </div>
  
                <FaArrowRight className='text-gray-400 text-[0.8rem]'/>

              </div>

              <div className="border border-b-gray-50 my-3 "></div>
              </div>
              
              <div className="h-50 w-full rounded-3xl bg-gray-200 border-shadow-sm p-4">
                <h1 className='font-bold'>Looking for the mentorship program?</h1>
                <p className='my-2 '>Join our 12-month flagship program with live sessions and career <br /> support.</p>
                <button className='bg-black text-white  py-2 px-5 rounded-sm mt-3'>Learn more </button>
              </div>



              
              </div>

              <div className="bg-white drop-shadow-md rounded-2xl w-120 px-5 py-8"> 
                  <h1 className='font-bold text-2xl'>Send us a message</h1>
                  <p className='text-[0.7em] mt-2 mb-7'>We'll get back to you as soon as possible.</p>
                  <div className="mb-5">
                    <h1>Full name</h1>
                    <div className="h-7 w-full border border-red-200 rounded-[0.5rem] ">
                      <input type="text" className='outline-none w-full h-full pl-3' placeholder='Fuad Mohamed Nur '/>
                    </div>
                  </div>
                  <div className="mb-7">
                    <h1>Email address</h1>
                    <div className="h-7 w-full border border-red-200 rounded-[0.7rem] ">
                      <input type="text" className='outline-none w-full h-full pl-3' placeholder='you@exmpl3e.com'/>
                    </div>
                  </div>
                  <div className="mb-7">
                    <h1>Phone number</h1>
                    <div className="h-7 w-full border border-red-200 rounded-[0.7rem] ">
                      <input type="text" className='outline-none w-full h-full pl-3' placeholder='+27261XXXXXX'/>
                    </div>
                  </div>
                  <div className="mb-7">
                    <h1>Subject</h1>
                    <div className="h-7 w-full border border-red-200 rounded-[0.7rem] ">
                      <input type="text" className='outline-none w-full h-full pl-3' placeholder='What is this about ?'/>
                    </div>
                  </div>
                  <div className="mb-7">
                    <h1>Message</h1>
                    <div className="h-20 w-full border border-red-200 rounded-[0.5rem] ">
                      <textarea name="" id=""className='outline-none w-full h-20 pl-3' placeholder='Tell us how we can help...'></textarea>
                    </div>
                  </div>
                  <div className="h-10 w-full border bg-black rounded-[0.5rem] flex items-center justify-center fo">
                    <RiTelegram2Line className='text-white' />
                    <h1 className='text-white pl-3'>Send message</h1>
              </div>

                </div>
              </div>

          </div>

          <div className="border border-gray-300 mt-50 mb-10"> </div>
          <div className="max-w-7xl mx-auto "> 
      <div className=" flex h-45"> 

          <div className=" w-100 ">
            <h1 className='font-bold text-xl'>Dugsiiye</h1>
            <p className='text-[1rem] mt-5 text-gray-00'>Become a Full Stack AI Engineer in 6 months. <br /> The only Somali-language program teaching <br /> AI-assisted development.</p>
            {/* icons */}

            <div className="flex gap-7 mt-4">
              <FaYoutube />
              <FaGithub />
              <IoLogoWhatsapp />
              <FaFacebook />
              <FaXTwitter />
              <FaLinkedin />

            </div>
          </div>
          <div className="w-70">
            <h1 className='font-bold text-xl'>Product</h1>
           <div className="space-x-5 mt-2">
             <p className='text-gray-500'>Mentorship Program</p>
             <p  className='text-gray-500'>Courses</p>
             <p  className='text-gray-500'>Blog</p>
             <p  className='text-gray-500'>Community</p>
           </div>
          </div>
          <div className="w-70">
            <h1 className='font-bold text-xl'>Company</h1>
             <div className="space-x-5 mt-2">
             <p className='text-gray-500'>Mentorship Program</p>
             <p  className='text-gray-500'>Courses</p>
             <p  className='text-gray-500'>Blog</p>
             <p  className='text-gray-500'>Community</p>
           </div>
          </div>
          <div className="w-50">
            <h1 className='font-bold text-xl'>Legal</h1>
             <div className="space-x-5 mt-2">
             <p className='text-gray-500'>Mentorship Program</p>
             <p  className='text-gray-500'>Courses</p>
             <p  className='text-gray-500'>Blog</p>
             <p  className='text-gray-500'>Community</p>
           </div>
          </div>
          </div>
             <div className="border border-b-red-200"></div>
             <div className="flex justify-between mt-10 mb-20">
              <h1 className='text-gray-400 text-1xl'>© 2026 Dugsiiye. All rights reserved.</h1>
              <h1 className='text-gray-400 text-1xl'>Proudly built in Somalia</h1>
             </div>
        </div>

       {/* WhatApp */}
       
         <div className="fixed top-165 right-15">
          <div className="relative">
            <div className="h-14 w-14 bg-red-500 rounded-full flex justify-center items-center">
               <MdOutlineWhatsapp className='text-3xl text-white'/>
            </div>
            <div className="">
                <div className="h-4 w-4 bg-red-400 rounded-full absolute top-0 left-11  border border-white "></div>
            </div>
          </div>
      </div>



   </div>
   
  )
}

export default App
