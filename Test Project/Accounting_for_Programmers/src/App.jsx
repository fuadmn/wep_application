import { Route, Routes } from "react-router"
import GeneralLedger from "./pages/GeneralLedger"
import Header from "./components/Header"

function App() {

  return (
    <div>
      <Header/>
       <div>
        <Routes>
        <Route path="/generalLedger" element={<GeneralLedger/>}/>
       </Routes>
       </div>
    </div>
  )
}

export default App
