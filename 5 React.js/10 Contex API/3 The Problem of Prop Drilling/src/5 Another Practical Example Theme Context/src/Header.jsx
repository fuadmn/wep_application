// rafc //   ES7 React/Redux/GraphQL/React-Native snippets   extensions
// rfce  // shardiin

import React from 'react'
import { Navbar } from './Navbar';


export const Header = ({user}) => {
  return (
    <div>
      <h2>Header</h2>
      <Navbar user={user} />
    </div>
  )
}


