import React from 'react'
import "./FpCard.css"

const FpCrard = (props) => {
  return (
    <div>
        <div className='freeproducts-card-image'>
         <img src={props.img} alt=""></img>
       </div>
       <div className='freeproducts-card-head'>
         <h1>{props.head}</h1>
       </div>
       <div className='freeproducts-card-para'>
         <p>{props.para}</p>
       </div>
    </div>
  )
}

export default FpCrard