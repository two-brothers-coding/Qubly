import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
// img
import Logo from '../../images/Logo.png'

function NavBar() {
  return (
    <div className='navbar container'>
        <img src={Logo} alt="" />
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/pricing'>Pricing</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink className='btnTrail' to='/trail'>Start Free Trail</NavLink>
        </ul>
    </div>
  )
}

export default NavBar
