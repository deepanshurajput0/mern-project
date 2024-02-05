import React from 'react'
import homeImg from './../assets/2672335.jpg'
import './Home.css'
import { useAuth } from '../store.js/auth'
const Home = () => {
  const { ourUser } =useAuth()
  return (
    <div className='home'>
         <div className="section">
          <div className="home-img">
            <img src={homeImg} alt="" />
          </div>

          <div className="home-sec">
            <p>We are the World Best Learning Platform</p>
            <h1>Hello, {ourUser.name}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora doloremque quo harum pariatur nulla iure doloribus tenetur adipisci, voluptatem earum inventore magnam reprehenderit a deserunt blanditiis explicabo iusto aspernatur distinctio mollitia ad quisquam amet repellat dicta aliquid? Quibusdam, laboriosam. Laboriosam ipsa nemo accusamus? Blanditiis, reprehenderit cupiditate, soluta corrupti adipisci earum quis quia ratione ab dolor architecto? Sint, amet illo? Nostrum consequuntur, atque quidem, at magni quaerat quasi iure, corrupti aperiam mollitia provident consectetur facilis voluptate adipisci totam laudantium praesentium earum distinctio inventore in. Aliquid, accusantium cumque tempora ipsum deserunt quaerat veniam placeat dolore a iusto necessitatibus nesciunt magnam sit quae?</p>
            <div className="btns">
              <button className="btn1">Connect Now</button>
              <button className="btn2">Learn More</button>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Home


