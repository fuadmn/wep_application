// npm i react-router // waxa uu naga sacidaa in pages relood asigoo sameeynin inaa adno paga kale

//  useLocation waxa lagu ogaadaaa lokeeshanka is badalaayo
//  Link // waxa u nasaacidaa in paga ka u refareesh dhihin
//  NavLink waxa u nasiinaa yaa akvtiva ah

import {  Outlet } from 'react-router'
import { Nav } from './components/Nav';

const App = () => {

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
