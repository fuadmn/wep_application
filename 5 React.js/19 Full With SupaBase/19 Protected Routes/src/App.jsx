import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/HomePages'
import ArticlesPages from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import UnAuthenticatedRoute from './components/UnAuthenticatedRoute'
import ArticleEditorPages from './pages/ArticleEditorPages'
import ManageArticles from './pages/ManageArticles'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'

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

           
               {/* Protected Routes */}

             <Route path='/editor' element={
              <ProtectedRoute>
                <ArticleEditorPages/>
              </ProtectedRoute>
             
              }/>

             <Route path='/editor/:id' element={
               <ProtectedRoute>
                <ArticleEditorPages/>
              </ProtectedRoute>
              }/>

             <Route path='/manage-articles' element={
               <ProtectedRoute>
                <ManageArticles/>
              </ProtectedRoute>
             }/>

             <Route path='/profile' element={
               <ProtectedRoute>
                 <Profile/>
              </ProtectedRoute>
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
