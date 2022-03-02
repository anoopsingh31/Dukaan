import React from 'react'
import "./SloganCard.css"

const SloganCard = (props) => {
  return (
    <div className='slogan-card'>
        <p>{props.slogan}</p>
    </div>
  )
}

export default SloganCard