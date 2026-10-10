import React from 'react'

const Sing_In = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#f7f1f1]'>
      <div className="w-250 h-120 rounded-2xl shadow bg-white flex">
        <div className="bg-[#525261] h-full w-1/2 rounded-l-2xl p-5">
        <h1 className='text-white text-3xl font-bold'>Care that comes to you</h1>
        </div>
        
        <div className="h-full w-1/2 rounded-l-2xl p-5">
        <h1>Sign in</h1>
        <p>Welcome back -- sing in to continue</p>

        <div className="mt-5">
          <legend>Email</legend>
          <input type="text" value="" placeholder='Email' className='w-100 h-9 p-3 rounded mt-2 outline' />
        </div>
        
        <div className="mt-5">
          <legend>Password</legend>
          <input type="text" value="" placeholder='Password' className='w-100 h-9 p-3 rounded mt-2 outline' />
        </div>
        <div className="mt-5">
          <button className='w-100 h-11 font-bold text-white p-3 rounded mt-2 bg-gray-400 flex items-center justify-center '>Sign in</button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Sing_In
