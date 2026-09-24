import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <div className="bg-blue-100 w-full h-20">
        <div className="max-w-5xl mx-auto h-full flex items-center ">
          <Link to='/generalLedger' >generalLedger</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
