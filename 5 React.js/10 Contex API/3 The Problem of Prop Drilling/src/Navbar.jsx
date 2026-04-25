import React, { useContext } from 'react' 

import UserProfile from './UserProfile';

import UserContext from './UserContext';

export const Navbar = () => {

  const user = useContext(UserContext);

  return (
    <div>
      <h2> User {user.role} in Navbar</h2>
      <UserProfile />
    </div>
  )
}


