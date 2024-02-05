import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Admindas.css'
import { useAuth } from '../store.js/auth'
import { useNavigate } from 'react-router-dom'
const AdminDashboard = () => {
  const navigate = useNavigate()
  const { ourUser } =useAuth()

  if(!ourUser.isAdmin){
    return navigate('/') 
  }
  return (
    <div className='admin-dash'>
      <div>
      <h1>AdminDashboard</h1>

<ul>
  <li>
    <Link to={'/admin/users'} >Users</Link>
  </li>
  <li>
    <Link to={'/admin/contacts'} >Contacts</Link>
  </li>
  <li>
    <Link to={'/admin/services'} >Services</Link>
  </li>
  <li>
    <Link to={'/'} >Home</Link>
  </li>
</ul>
      </div>
          <Outlet/> 
    </div>
  )
}

export default AdminDashboard

