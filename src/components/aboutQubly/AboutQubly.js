import React from 'react'
import './aboutQubly.scss'
import profile from '../../images/Profile.png'
import tonken from '../../images/Tonkean.png'
import bigspring from '../../images/BigSpring.png'
import clearbit from '../../images/Clearbit.png'
import mine from '../../images/Mine.png'
import shake from '../../images/Shake.png'
function AbaoutQubly() {
  return (
    <div className="aboutCto">
    <div className='container'>
      <div className="about">
        <div className="cto">
          <h3 className='ctoText'>"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"</h3>
          <img src={profile} alt="profile"  />
          <p className='ctoT'>Guillaume Cabane<br/>
             CTO @ BigSpring</p>             
        </div>
        <hr/>
      <div className="images">
        <img src={tonken} alt="tonken"  />
        <img src={bigspring} alt="bigspring"  />
        <img src={clearbit} alt="clearbit"  />
        <img src={mine} alt="mine"  />
        <img src={shake} alt="shake"  />
      </div>
      </div>
    </div>
    </div>
  )
}

export default AbaoutQubly
