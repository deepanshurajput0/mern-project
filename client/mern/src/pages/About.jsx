import React from 'react'
import aboutImg from './../assets/peakpx.jpg'
import './About.css'
import { useAuth } from '../store.js/auth'
const About = () => {
  const { ourUser } = useAuth()
  return (
    <div className='about-page'>
      <h1>My About </h1>

      <div className='about'>
          <div className="about-img">
            <img src={aboutImg} alt="about-img" />
          </div>

          <div className="about-info">
            <p>Name - {ourUser.name}</p>
            <p>Email - {ourUser.email}</p>
            <p>Phone - {ourUser.phone}</p>
          </div>
      </div>
    </div>
  )
}

export default About

