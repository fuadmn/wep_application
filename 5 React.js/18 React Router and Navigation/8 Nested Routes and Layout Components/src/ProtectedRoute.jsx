import { useContext } from 'react'
import { AuthContext } from './AuthContext.jsx'

const ProtectedRoute = ({element}) => {

 const {AuthProvider} = useContext(AuthContext)

 console.log(isAuthenticated)

  return element;
}

export default ProtectedRoute
