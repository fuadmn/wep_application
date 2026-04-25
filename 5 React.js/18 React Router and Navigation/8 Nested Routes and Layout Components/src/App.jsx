

import {  Link, Outlet } from 'react-router'


const App = () => {

  return (
    <div>
      <nav className='space-x-4'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
          <Outlet/>
    </div>
  )
}

export default App
