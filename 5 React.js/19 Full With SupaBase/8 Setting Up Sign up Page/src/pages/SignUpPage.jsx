import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  return (
    <div className='min-h-screen flex items-center justify-center bg-white px-4'>
      <div className="max-w-md w-full">
        {/* title subtitle */}
        <div className="text-center mb-10">
          <h1 className='text-3xl font-bold'>Create an account</h1>
          <p className='text-gray-600 mt-2'>join our community and start sharing your ideas</p>
        </div>
        {/* form info */}
        <div className="bg-white rounded-lg shadow-md p-4">


          <form>

            <div className="mb-6">
              <label className='block text-sm font-semibold mb-2' htmlFor="email">
                Email Address
              </label>
              <input id='email' type="email" className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='your@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="mb-6">
              <label className='block text-sm font-semibold mb-2' htmlFor="username">
                Username
              </label>
              <input id='username' type="text" className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='johndoe' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>

            <div className="mb-6">
              <label className='block text-sm font-semibold mb-2' htmlFor="password">
                password
              </label>
              <input id='password' type="password" className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='******' value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
              <p className='text-xs text-gray-500 mt-1'>Must be at least 6 characters</p>
            </div>

            <div className="mb-6">
              <label className='block text-sm font-semibold mb-2' htmlFor="confirmPassword">
                confirm Password
              </label>
              <input id='confirmPassword' type="password" className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='******' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength={6} />
            </div>


            <button type='submit' className='w-full bg-orange-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform duration-200 disabled:cursor-not-allowed disabled:bg-orange-700' disabled={isLoading}>{isLoading ? 'Creating Account...' : 'Account Creating'}</button>

          </form>

          <div className="text-center mt-6">
            <p>Already have an account?{' '}
              <Link to='/signin' className='text-orange-600 hover:text-orange-800 font-semibold'> Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
