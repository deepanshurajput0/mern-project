import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../pages/Register.css';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store.js/auth';
import { toast } from 'react-toastify';

const AdminUpdate = () => {
  const { token } = useAuth();
  const params = useParams();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });
 
  const getUpdatedData = async () => {
    try {
      const {data} = await axios.get(`http://localhost:8000/api/v1/admin/users/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data.updatedata)
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpdatedData();
  }, [params.id, token]);

  const handleInput =(e)=>{
   let name = e.target.name;
   let value = e.target.value;
   setData({
    ...data, 
    [name]:value
   })
  }
  const handleUpdate=async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:8000/api/v1/admin/update/${params.id}`,{ updateData: data }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      })
      if(response.success){
        toast.success('Updated successfully')
      }
    } catch (error) {
      console.log(error)
      toast.error('Error while Updating',error)
    }
  }
  return (
    <div className="register" style={{ marginLeft: '50px' }}>
      <div className="reg-sec">
        <form onSubmit={handleUpdate} >
          <div>
            <label htmlFor="name">Username</label>
            <input 
              type="text"
              name="name"
              value={data.name}
              placeholder="Enter Your username"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Enter Your Email"
             onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              value={data.phone}
              placeholder="Enter Your Phone No."
              onChange={handleInput}
            />
          </div>
          {/* Remove the 'handleInput' function if it's not used */}
          <button type="submit">Update data</button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdate;
