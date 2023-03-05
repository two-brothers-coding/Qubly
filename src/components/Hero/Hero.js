import React from 'react'
import heroImg from '../../images/hero-right-img.png'
import Btn from '../btn/Btn'
import sparks from '../../images/sparks.png'
// styling
import './hero.scss'

function Hero() {
  return (
    <div className='hero '>
        <div className='container hero-content'>
            <div className='hero-left' >
              <Btn  icon={sparks} title="v3.1 released. Learn more"/>
             <h1 className='heroTitle'>Your data with<br/>real-time analytics</h1>
             <p className='heroText'>Harness the potential of Big Data Analytics & Cloud Services<br/> and become a data-driven organization with Needle tail</p>
             <button className='leftBtn'>Start free trials</button>
              <button className='rightBtn'>Learn more</button>
            </div>
            <div className='hero-right'>
            <img src={heroImg} alt="hero-right"  />
            </div>
        </div>
    </div>
  )
}

export default Hero