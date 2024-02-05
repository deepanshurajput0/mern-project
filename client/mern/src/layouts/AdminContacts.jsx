import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useAuth } from '../store.js/auth'
import './Admindas.css'
import { toast } from 'react-toastify'
const AdminContacts = () => {
  const { token } =useAuth()
  const [contactData,setContactData]=useState([])

  const getContactData=async()=>{
    try {
      const {data} = await axios.get('http://localhost:8000/api/v1/admin/contacts',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setContactData(data.contacts)
      console.log(data.contacts)
    } catch (error) {
      console.log(error)
    }
  }

  const contactDelete=async(id)=>{
 try {
  const {data} = await axios.delete(`http://localhost:8000/api/v1/admin/remove/${id}`,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  if(data.success){
    toast.success(data.message)
  getContactData()
  }
 } catch (error) {
  console.log(error)
 }

  }

  useEffect(()=>{
    getContactData()
  },[])
  return (
    <div className='admin-users' >

    <div className='user-card' style={{display:"flex",flexDirection:"column", marginLeft:"20px",alignItems:"center"}}>
      
      {
       contactData.map((user,i)=>{
         return(
           <div key={i} className="user-card-body" style={{width:"40%"}} >
           <h2>Name</h2>
           <p><span className="icon">&#128100;</span>{user.name}</p>
           <h2>Email</h2>
           <p><span className="icon">&#9993;</span>{user.email}</p>
           <h2>Message</h2>
           <p><span className="">&#9742;</span>{user.message}</p>
          <button onClick={()=>contactDelete(user._id)} className="action-button">Delete</button>
         </div>
         )
       })
      }
     </div>
        </div>
  )
}

export default AdminContacts

