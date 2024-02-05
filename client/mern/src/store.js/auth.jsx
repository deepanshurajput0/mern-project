import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify'
import axios from "axios"

export const AuthContext = createContext()


export const AuthProvider=({children})=>{
  const [token,setToken]=useState(localStorage.getItem('token'))
  const [ourUser, setOurUser]=useState('')
  // const navigate = useNavigate()
  useEffect(() => {
    // Additional logic to handle token changes if needed
  }, [token]);

    const storeTokenInLS=(ourtoken)=>{
      setToken(ourtoken)
      return localStorage.setItem('token',ourtoken)
    }

    const removeToken = ()=>{
     setToken('')
     localStorage.removeItem('token')
     toast.success('User Logged Out Successfully')
    }
    
    const getContactData=async()=>{
      try {
        const { data } = await axios.get('http://localhost:8000/api/v1/auth/user',{
      headers:{
        Authorization: `Bearer ${token}`
      }
     })
     if(data.success){
      setOurUser(data.userData)
      console.log(data.userData)
     }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      getContactData()
    },[token])
   
    return(
      <AuthContext.Provider value={{storeTokenInLS, removeToken, token,ourUser}} >
        {children}
      </AuthContext.Provider>
    )
} 

export const useAuth =()=>{
   return useContext(AuthContext)
}