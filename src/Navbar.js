import React from 'react'
import logo from './image/git.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
  const navigate=useNavigate()
  const LogoClickHandler=()=>{
    navigate('/')
  }
  return ( 
    <div className='Navbar'>
     <img className='GitLogo' onClick={LogoClickHandler} src={logo} alt="" />
        <div className='LinksDiv'>
        <li>Pull-Request</li>
        <li>Issues</li>
        <li>CodeSpace</li>
        <li>MarketPlace</li>
        <li>Explore</li>
        </div>
    </div>
  )
}
