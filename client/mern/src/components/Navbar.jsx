import { Link } from "react-router-dom"
import './Navbar.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../store.js/auth";
import { useEffect } from "react";
const Navbar =()=>{
    const { removeToken, token } = useAuth()
    
    return<>
    <header>
        <div className="container">
            <div className="logo-brand">
                <Link to='/' >
                    Tech Xverse
                </Link>
            </div>
            <nav>
                <ul>
                    <li> <Link to='/' >Home</Link> </li>
                 {
                    token ? <>
                        <li> <Link to='/about' >About</Link> </li>
                    <li> <Link to='/contact' >Contact</Link> </li>
                    <li> <Link to='/services' >Services</Link> </li>
                  
                    <li> <button onClick={removeToken} >Logout</button> </li>
                    </> : <>
                    <li> <Link to='/register' >Register</Link> </li>
                    <li> <Link to='/login' >Login</Link> </li>
                    </>
                 }
                    
                </ul>
            </nav>
        </div>
        <ToastContainer autoClose={2000} />
    </header>
    </>
}
export default Navbar