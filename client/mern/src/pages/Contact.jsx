import React,{useState} from 'react'
import ConImg from './../assets/5124556.jpg'
import { useAuth } from '../store.js/auth'
import axios from 'axios'
import { toast } from 'react-toastify'
const Contact = () => {
  const { ourUser } = useAuth()
   const [user,setUser]=useState({
    name:"",
    email:"",
    message:""
   })
  const [contactUser, setContactUser]=useState(true)
   if(contactUser && ourUser){
    setUser({
      name:ourUser.name,
      email:ourUser.email,
      message:""
    })
    setContactUser(false)
   }
  
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
      const { data } = await axios.post('http://localhost:8000/api/v1/auth/contact',user)
      if(data.success){
        toast.success(data.message)
      }
     } catch (error) {
      console.log(error)
     }
  }
 
  return (
    <div>
    <div className='register'>
   <div className="reg-img">
     <img src={ConImg} alt="reg-img" />
   </div>

   <div className="reg-sec">
     <h1>Contact Us</h1>
     <form onSubmit={handleSubmit}  >
     <div>
         <label htmlFor="name">Name</label>
         <input type="name" 
         name='name'  
         value={user.name}
         onChange={handleInput}
         placeholder='Enter Your Name' 
         required  />
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
         <label htmlFor="message">Message</label>
        <textarea style={{paddingTop:"10px", paddingLeft:"10px", marginTop:"10px"}} name="message"
        value={user.message}
        onChange={handleInput}
        placeholder='Enter Your Message'
        required
        rows={8}
        ></textarea>
       </div> <br />
       <button type='submit' >Register</button>
     </form>
   </div>
</div>

</div>
  )
}

export default Contact