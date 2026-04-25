import { Route, Routes } from "react-router"
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import ArticlesPage from './pages/ArticlesPage'
import SigninPage from "./SigninPage"
import SingUpPage from "./SingUpPage"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
     {/* header */}
     <Header/>
     <main>
        {/* routes */}
        <Routes>
          {/* pubilc routes */}
          <Route path='/' element={<HomePage/>}/>
          <Route path='/articles' element={<ArticlesPage/>}/>
          <Route path="/article/:id" element={<ArticlePage/>}/>
          
          {/* unauthenticated routes (redirect to home if logged in)
           */}

           <Route path="/signin" element={<SigninPage/>}/>
           <Route path="singup" element={<SingUpPage/>}/>
        </Routes>
     </main>
     {/* footer */}
     <Footer/>
    </div>
  )
}

export default App
