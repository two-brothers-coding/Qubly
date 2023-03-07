import React from 'react'
import './singleProduct.scss'
function SingleProduct({item}) {
  return (
    <div className='products'>
      <img className='img' src={item.img} alt="img" />
      <h4 className='qublyTitle'>{item.title}</h4>
      <p className='qublyDesc'>{item.desc}</p>
    </div>
  )
}

export default SingleProduct
