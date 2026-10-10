import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/HomePages'
import ArticlesPages from './pages/ArticlesPages'
import ArticlePage from './pages/ArticlePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import UnAuthenticatedRoute from './components/UnAuthenticatedRoute'

const App = () => {
  return (
    <AuthProvider> 
    <div>
      {/* header */}
      <Header/>
      <main>
           {/* route */}

           <Routes>
               {/* pubilc routes */}
               <Route path='/' element={<HomePages/>}/>
               <Route path='/articles' element={<ArticlesPages/>}/>
               <Route path='/article/:id' element={<ArticlePage/>}/>

               {/* unauthenticated routes (redirect to home if logged in ) */}

               <Route path='/signin' element={
                <UnAuthenticatedRoute>
                   <SignInPage/>
                </UnAuthenticatedRoute>
                
                }/>
               <Route path='signup' element={
                 <UnAuthenticatedRoute>
                   <SignUpPage/>
                </UnAuthenticatedRoute>
                
                }/>
           </Routes>
      </main>
      {/* footer */}
      <Footer/>
    </div>
    </AuthProvider>
  )
}

export default App
