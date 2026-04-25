import { useState } from "react"
import { Link } from "react-router"


const SingUpPage = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [conFirmPassword, setConFirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-md w-full">
      {/* title and subtitle */}
      <div className="text-center mb-10">
         <h1 className="text-3xl font-bold">Create an Account</h1>
         <p>join our community and start  sharing your ideas</p>
      </div>
      {/* from info */}
      <div className="bg-white rounded-lg shadow-md p-8">

    
       <form>

         <div className="mb-6"> 
           <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email </label> 
           <input id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="your@gmail.com" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required/>
        </div>

         <div className="mb-6"> 
           <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">UserName</label> 
           <input id="username" type="username" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="jonhdoe" value={username} onChange={(e) => setEmail(e.target.value)} required/>
        </div>

         <div className="mb-6"> 
           <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Password</label> 
           <input id="password" type="password"  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="********" value={password}  onChange={(e) => setEmail(e.target.value)} required minLength={6} />
           <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
        </div>

         <div className="mb-6"> 
           <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">ConfirmPassword</label> 
           <input id="confirmPassword" type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="********" value={password}onChange={(e) => setEmail(e.target.value)} required minLength={6}/>
           <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
        </div>

        <button  type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform duration-200 disabled:cursor-not-allowed disabled:bg-orange-700" disabled={isLoading}> 
         
          {isLoading ? 'Create Account...' : "Create Account"}
        </button>

       </form>

       <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">Already have an account{''}
          <Link to="/sign" className="text-orange-600 haver:text-orange-800"> Sign in</Link>
        </p>
       </div>
       
      </div>
    </div>
    </div>
  )
}

export default SingUpPage
