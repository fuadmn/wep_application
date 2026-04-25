import React from 'react'

const UserProfile = ({user}) => {
  return (
    <div>
      <h2>UseProfile</h2>
      <h3>{user.name}</h3>
    </div>
  )
}

export default UserProfile;
