import React from 'react' 

import UserProfile from './UserProfile';

export const Navbar = ({user}) => {
  return (
    <div>
      <h2>Navbar</h2>
      <UserProfile user={user}/>
    </div>
  )
}


