import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from '../store.js/auth'
import './Admindas.css'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const AdminUsers = () => {
  const [usersData,setUsersData] =useState([])
 const { token } = useAuth()
  const getUsers=async()=>{
     try {
      const { data } = await axios.get('http://localhost:8000/api/v1/admin/users',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
     setUsersData(data.users)
     } catch (error) {
      console.log(error)
     }
  }

 

  const deleteUser=async(id)=>{
   try {
    const {data} = await axios.delete(`http://localhost:8000/api/v1/admin/delete/${id}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
     if(data.success){
      getUsers()
      toast.success(data.message)
     }
   } catch (error) {
   console.log(error) 
   }
  }
  // useEffect(()=>{
  //   deleteUser()
  // },[])
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div className='admin-users'>

<div className='user-card'>
  
  {
   usersData.map((user,i)=>{
     return(
       <div key={i} className="user-card-body">
       <h2>Name</h2>
       <p><span className="icon">&#128100;</span>{user.name}</p>
       <h2>Email</h2>
       <p><span className="icon">&#9993;</span>{user.email}</p>
       <h2>Phone</h2>
       <p><span className="icon">&#9742;</span>{user.phone}</p>
       <Link to={`/admin/users/${user._id}/edit`}><button className="action-button">Update</button></Link>
      <button onClick={()=>deleteUser(user._id)} className="action-button">Delete</button>
     </div>
     )
   })
  }
 </div>
    </div>
  )
}

export default AdminUsers

