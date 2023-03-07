import React from 'react'
import './productTeams.scss'
import prodImg from '../../images/productsImg.png'
import Btn from '../btn/Btn'
import elTeams from '../../images/electronic-circuit.png'

function ProductsTeams() {
  return (
   <div className="container ">
     <div className="mainTeams">
        <div className="img">
        <img src={prodImg} alt="products img" />
          </div>
      <div className="productsTeams">       
        <Btn icon={elTeams}  title="For Product Teams"/>
        <h2 className='mainText'>Launch with the best stack</h2>
        <p className='p'>A centralized platform that integrates zillions of data sources<br/> using Big Data ELT (Extract, Load & Transform) that leaves<br/> no data behind</p>
      </div>
    </div>
 </div>
      
   
  )
}

export default ProductsTeams
