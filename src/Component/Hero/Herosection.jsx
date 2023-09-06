import React from 'react'
import './hero.css'
import ContentBox from './ContentBox'
import ImgBox from './ImgBox'
const Herosection = () => {
  return (
    <div className='home section-container'>
        <div className='section-row'>
         <ContentBox/>
         <ImgBox/>
        </div>
    </div>
  )
}

export default Herosection