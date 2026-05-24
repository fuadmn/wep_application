import React from 'react'

const App = () => {
  return (
    <div>
       
    <div className="bg-blue-700 h-screen w-full flex justify-center items-center">
      <div className="bg-white w-[40%] h-[85%] rounded-2xl shadow-blue-300">
       <div className="bg-blue-500 h-35 rounded-t-2xl text-center pt-12">
        <h1 className='text-5xl font-extrabold text-white'>Create Your Account</h1>
        <p className='text-[1.5rem] text-white'>Join our community and star your journey</p>
       </div>
         
         <form className="px-5 py-2">

          <div className="flex space-x-5"> 
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'> First Name</label>
            <div className="border h-12 w-88 rounded-xl mt-2 flex items-center ">
              <input type="text" placeholder='Enter Your First Name' className='rounded-2xl h-full w-full text-2xl '/>
            </div>
          </div>
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'> Last Name</label>
            <div className="border h-12 w-88 rounded-xl mt-2 flex items-center ">
              <input type="text" placeholder='Enter Your Last Name' className='rounded-2xl h-full w-full text-2xl '/>
            </div>
            </div>

          </div>

          <div className="flex space-x-5 mt-5"> 
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'> Email Address </label>
            <div className="border h-12 w-88 rounded-xl mt-2 flex items-center ">
              <input type="text" placeholder='Enter Your Email ' className='rounded-2xl h-full w-full text-2xl '/>
            </div>
          </div>
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'>Phone Number </label>
            <div className="border h-12 w-88 rounded-xl mt-2 flex items-center ">
              <input type="text" placeholder='Enter Your Phone Number' className='rounded-2xl h-full w-full text-2xl '/>
            </div>
            </div>

          </div>
          
          <div className="flex space-x-5 mt-5"> 
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'>Password</label>
            <div className="border h-12 w-88 rounded-xl mt-2 flex items-center ">
              <input type="text" placeholder='Create a Password ' className='rounded-2xl h-full w-full text-2xl '/>
            </div>
          </div>
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'>Confirm Password </label>
            <div className="border h-12 w-88 rounded-xl mt-2 flex items-center ">
              <input type="text" placeholder='Confirm your Password' className='rounded-2xl h-full w-full text-2xl '/>
            </div>
            </div>

          </div>
          
          <div className="flex space-x-5 mt-5"> 
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'>Date of Birth</label>
            <div className="border h-12 w-88 rounded-xl mt-2 flex items-center ">
              <input type="date" placeholder='Create a Password ' className='rounded-2xl h-full w-full text-2xl '/>
            </div>
          </div>
     
           <div className="mt-2">
            <label className='font-bold text-[1.1rem]'>Gender</label>
             <div className="flex">
             <div className="mt-5">
               <input type="radio" />
               <label className="text-[1.3rem] ml-2 mr-5">Male</label>
             </div>
             <div className="mt-5">
               <input type="radio" />
               <label className="text-[1.3rem] ml-2 mr-5">female</label>
             </div>
             <div className="mt-5">
               <input type="radio" />
               <label className="text-[1.3rem] ml-2">Other</label>
             </div>
             </div>
          </div>
          </div>
 
          <div className="flex space-x-5 mt-5"> 
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'>Country</label>
             <select name="" id=""className="border h-12 w-88 text-2xl rounded-xl mt-2 font-bold ">
              <option value="">Select your country</option>
             </select>
          </div>
             <div className="mt-2">
            <label className='font-bold text-[1.1rem]'>Phone Number </label>
            <div className="border h-12 w-88 rounded-xl mt-2 flex items-center ">
              <input type="text" placeholder='Enter Your Phone Number' className='rounded-2xl h-full w-full text-2xl '/>
            </div>
            </div>

          </div>

         </form>

      </div>
    </div>

    </div>
  )
}

export default App
