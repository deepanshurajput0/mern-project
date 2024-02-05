import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import { Error } from './pages/Error'
import { useAuth } from './store.js/auth'
import AdminDashboard from './layouts/AdminDashboard'
import AdminUsers from './layouts/AdminUsers'
import AdminContacts from './layouts/AdminContacts'
import AdminUpdate from './layouts/AdminUpdate'
function App() {
 const { token } = useAuth()
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="*" element={<Error/>}/>
      <Route path='/' element={<Home/>} />
      {
        token ? <> 
         <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/admin' element={<AdminDashboard/>} >
           <Route path='users' element={<AdminUsers/>} />
           <Route path='contacts' element={<AdminContacts/>} />
           <Route path='users/:id/edit' element={<AdminUpdate/>} />

      </Route>
        </> : <> 
        
        <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
        </>
      }
      
    
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
