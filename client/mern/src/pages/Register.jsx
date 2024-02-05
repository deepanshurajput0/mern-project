import React,{useState} from 'react'
import regImg from '../assets/6310507.jpg'
import axios from 'axios'
import './Register.css'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store.js/auth'
const Register = () => {
  const { storeTokenInLS } = useAuth()
  const navigate = useNavigate()
  const [user,setUser]=useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })

  const handleInput=(e)=>{
  let name = e.target.name
  let value = e.target.value
 setUser({
  ...user,
  [name]:value
 })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
       try {
        const {data} = await axios.post('http://localhost:8000/api/v1/auth/register',user)
        if(data.success){
          storeTokenInLS(data.token)
         toast.success(data.message)
         navigate('/login')
        }
       } catch (error) {
        console.log('Error while register',error)
        if(error.response && error.response.data && error.response.data.message){
          toast.error(error.response.data.message)
        }else{
          toast.error('An error occurred during Register');
        }
       }
  }
  return (
    <div className='register'>
        <div className="reg-img">
          <img src={regImg} alt="reg-img" />
        </div>

        <div className="reg-sec">
          <h1>Registartion Page</h1>
          <form  onSubmit={handleSubmit} >
            <div>
              <label htmlFor="name">Username</label>
              <input type="text" 
              name='name'  
              value={user.name}
              onChange={handleInput}
              placeholder='Enter Your username' 
              required autoComplete='off' />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" 
              name='email'  
              value={user.email}
              onChange={handleInput}
              placeholder='Enter Your Email' 
              required  />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="number" 
              name='phone'  
              value={user.phone}
              onChange={handleInput}
              placeholder='Enter Your Phone No.' 
              required autoComplete='off' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" 
              name='password'
              value={user.password}  
              onChange={handleInput}
              placeholder='Enter Your Password' 
              required autoComplete='off' />
            </div> <br />
            <button type='submit' >Register</button>
          </form>
        </div>
    </div>
  )
}

export default Register

