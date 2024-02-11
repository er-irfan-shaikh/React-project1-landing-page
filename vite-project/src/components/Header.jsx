import React from 'react'
import logo from "../assets/brand_logo.svg"





console.log(logo);
 
const Header = () => {
  return (
    <nav className='navBar'>
        <div>
        <img src={logo} alt="" />
        </div>
        
        <ul className='links'>
               <li href="#">MENU</li>
               <li href="#">LOCATION</li>
               <li href="#">ABOUT</li>
               <li href="#">CONTACT</li>
        </ul>
        <button className='loginButton'>
         Login
        </button>
    </nav>
  )
}

export default Header