import React from 'react'
import "./Homehero.css"
import Cross from '../../../assets/home/freeproducts/cross.png';
import Paging from '../../../assets/home/freeproducts/paging.png';
import NextArrow from '../../../assets/home/homehero/next-arrow.png';
import SloganCard from './SloganCard'

const Homehero = () => {
  return (
    <div className='homehero-wrapper'>
    <div className='homehero-blue'></div>
      <div className='homehero-inner-wrap'>
        <div className='homehero-top'>
          <h1>Free slogan maker</h1>
          <p>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
          <h6>Word for your slogan</h6>
          <div className='homehero-textfield'>
          <div><p>Cozy</p></div>
          <div><img src={Cross} alt=""></img></div>
          </div>
          <br></br>
          <div className='homehero-button'> <button>Generate slogans</button></div>
        </div>
        <div className='homehero-bottom'>
          <div className='homehero-bottom-head'>
            <div className='slogan-heading'>
              <h1>We have generated 1,023 slogans for “cozy”</h1>
            </div>
            <div className='slogan-download'>
              <button>Download All</button>
            </div>
          </div>
          <div className='homehero-bottom-content'>
            <SloganCard
              slogan="There is no Sore it will Not Heal, No cool it will not Subdue."
            />
             <SloganCard
              slogan="coziness building for tomorrow."
            />
             <SloganCard
              slogan="There is no Sore it will Not Heal, No cool it will not Subdue."
            />
             <SloganCard
              slogan="Review the facts cool is the best."
            />
             <SloganCard
              slogan="Review the facts cool is the best."
            />
             <SloganCard
              slogan="coziness building for tomorrow."
            />
             <SloganCard
              slogan="There is no Sore it will Not Heal, No cool it will not Subdue."
            />
             <SloganCard
              slogan="coziness building for tomorrow."
            />
            <SloganCard
              slogan="There is no Sore it will Not Heal, No cool it will not Subdue."
            />
             <SloganCard
              slogan="coziness building for tomorrow."
            />
            <SloganCard
              slogan="There is no Sore it will Not Heal, No cool it will not Subdue."
            />
             <SloganCard
              slogan="coziness building for tomorrow."
            />
            <SloganCard
              slogan="There is no Sore it will Not Heal, No cool it will not Subdue."
            />
             <SloganCard
              slogan="coziness building for tomorrow."
            />
            <SloganCard
              slogan="There is no Sore it will Not Heal, No cool it will not Subdue."
            />
             <SloganCard
              slogan="coziness building for tomorrow."
            />
            <SloganCard
              slogan="There is no Sore it will Not Heal, No cool it will not Subdue."
            />
             <SloganCard
              slogan="coziness building for tomorrow."
            />
             
          </div>
        </div>
        <div className='homehero-paging'>
        <div className='paging-blank'></div>
        <div className='paging-number'>
        <img src={Paging} alt=""></img>  
        </div>
        <div className='paging-next'>
        <div><p>Next</p> </div>
        <div><img src={NextArrow} alt=""></img></div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Homehero