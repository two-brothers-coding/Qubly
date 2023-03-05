import React from 'react'
import './singleProduct.scss'
function SingleProduct({item}) {
  return (
    <div className='products'>
      <img src={item.img} alt="img" />
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
  )
}

export default SingleProduct
