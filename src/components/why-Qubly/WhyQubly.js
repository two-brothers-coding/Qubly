import React from 'react'
import Btn from '../btn/Btn'
import eye from '../../images/eye.png'
import graficon from '../../images/Graficon.png'
import code from '../../images/code icon.png'
import timeline from '../../images/timeline.png'
import SingleProduct from '../singleProduct/SingleProduct'
import './whyQubly.scss'
function WhyQubly() {
    let myProduct = [
        {
            img:graficon,
            title: 'Valuable business insights',
            desc: 'Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.'
        },
        {
            img: code,
            title: 'Powerful Algorithms',
            desc: 'With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.'
        },
        {
            img: timeline,
            title: 'Data in real-times',
            desc: 'Collect data in real-time from multiple channels and move it into a data lake, in its original format.'
        },
        
    ]
  return (
    <div className='why'>
        <div className="container why-qubly">
            <div className="one">
            <Btn icon={eye} title="Why Qubly"/>
            <h2 className='why-text'>Get actionable insights from Big Data in 3 steps</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br/> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className="two">
             { myProduct.map((item)=>{
               return( <SingleProduct item={item} />
               )
               })} 
            </div>
        </div>
    </div>


       
    
   
  )
}

export default WhyQubly


// {myProduct.map((item)=>{
//     return(
//         <SingleProduct item={item} />
//     )
// })}