import React from 'react'
import TimelineItem from './TimelineItem'

const EduExp = ({header , Data ,  aosType}) => {
  return (
    <div className='EduExpCard'>
       <h3 className='header'>{header}</h3>
       <div className='timeline shadow-dark'>
        {
        Data.map((item , index)=>{
          return  <TimelineItem key={index} Item={item}/>
        })
        }
         
        
       </div>
    </div>
  )
}

export default EduExp