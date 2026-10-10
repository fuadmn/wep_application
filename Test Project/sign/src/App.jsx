import { Route, Routes } from "react-router"
import Sing_In from "./pages/Sing_In"
import Header from "./components/Header"

function App() {

  return (
    <div>
      <Header/>
       <div>
        <Routes>
        <Route path="/Sing_In" element={<Sing_In/>}/>
       </Routes>
       </div>
    </div>
  )
}

export default App
