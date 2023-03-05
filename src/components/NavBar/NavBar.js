import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
// img
import Logo from '../../images/Logo.png'

function NavBar() {
    const [toggleMenu,setToggleMenu]= useState(false)
    
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
        <div className='navbar-mobile'>
            <GiHamburgerMenu onClick={()=> setToggleMenu(!toggleMenu)} />
        {toggleMenu ? ( <ul >
            
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/pricing'>Pricing</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink className='btnTrail' to='/trail'>Start Free Trail</NavLink>
        </ul>) : null}
        </div>
    </div>
  )
}

export default NavBar
