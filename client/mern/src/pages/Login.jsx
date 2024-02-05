import React,{useEffect, useState} from 'react'
import regImg from '../assets/4966434.jpg'
import './Register.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store.js/auth'
import axios from 'axios'
const Login = () => {
  const { storeTokenInLS } = useAuth()
  const navigate = useNavigate()
  const [user,setUser]=useState({
    email:"",
    password:"",
  })

  const handleInput=(e)=>{
   const name = e.target.name
   const value = e.target.value

   setUser({
    ...user,
    [name]:value
   })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await axios.post('http://localhost:8000/api/v1/auth/login', user);
  
      if (data.success) {
        storeTokenInLS(data.token)
        toast.success(data.message);
        navigate('/');
        
      } else if (data.success === false) {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
  
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred during login');
      }
    }
  };
  
  return (
    <div>
         <div className='register'>
        <div className="reg-img">
          <img src={regImg} alt="reg-img" />
        </div>

        <div className="reg-sec">
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}  >
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
    </div>
  )
}

export default Login
