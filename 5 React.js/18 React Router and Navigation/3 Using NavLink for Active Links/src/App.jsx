// npm i react-router // waxa uu naga sacidaa in pages relood asigoo sameeynin inaa adno paga kale

//  useLocation waxa lagu ogaadaaa lokeeshanka is badalaayo
//  Link // waxa u nasaacidaa in paga ka u refareesh dhihin
//  NavLink waxa u nasiinaa yaa akvtiva ah

import { Link, NavLink, Outlet, useLocation } from 'react-router'
import React, { useEffect, useState } from 'react'
import { Nav } from './components/Nav';

const App = () => {

  const [pageVisit,setPageVisit] = useState(0);

  const location = useLocation();

 useEffect(()=> {
 setPageVisit((pre)=> pre+1)
 },[location])

  return (
    <div>
    <Nav />
     <main className='p-6'>
          <Outlet/>
     </main>
    
    </div>
  )
}

export default App
