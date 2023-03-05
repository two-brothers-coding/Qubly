import React from 'react'
import './btn.scss'

function Btn({icon,title}) {
  return (
      <button 
        className='btn'>
        <img src={icon} alt="spark"/>
        {title}
      </button>
   
  )
}

export default Btn
