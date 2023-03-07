import React from 'react'
import './engTeams.scss'
import compas from '../../images/compass.png'
import engImg from '../../images/engImg.png'
import Btn from '../btn/Btn'
function EngTeams() {
  return (
    <div className='container' >
        <div className="engTeams">
          <div className="engT">
            <Btn icon={compas} title="For Engineering Teams"/>
            <h2 className='mainText'>Data-driven pipelines in minutes</h2>
        <p className='p'>Maintenance-free data pipelines with quick set-up and<br/> straight-forward deployments that are powered by a modern<br/> & scalable platform.</p>
          </div>
      <div className="img">
        <img src={engImg} alt="IMG" />
      </div>
        </div>
    </div>
  )
}

export default EngTeams
