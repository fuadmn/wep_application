
import  {Header} from './Header';
import UserContext from './UserContext';

import { useState } from 'react';

const App = () => {

  const   [user,setUser] = useState({name: "Mc", role: "admin"})
  
  return(
    <UserContext.Provider value={user}>
      <h1>My Application</h1>
        <Header/>
    </UserContext.Provider>

  )
}

export default App;