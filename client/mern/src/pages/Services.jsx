import React, { useEffect, useState } from 'react'
import './Services.css'
import axios from 'axios'
const Services = () => {
  const [card,setCard]=useState([])

  const getCardData=async()=>{
    try {
      const {data} = await axios.get('http://localhost:8000/api/v1/auth/get-services')
      setCard(data.serviceData)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getCardData() 
  },[])
  return (
    <div className='service'>
   {
    card.map((item,i)=>{
      return(
        <div key={i} class="card">
        <img src="https://via.placeholder.com/300" alt="Card Image"/>
        <div class="card-content">
          <div class="card-title">{item.name}</div>
          <div class="card-description">
            {item.description}
          </div>
        </div>
        <div class="card-footer">
          <span>Estimated Time:{item.estimated_time}</span>
        </div>
      </div>
      )
    })
   }
    </div>
  )
}

export default Services