import React from 'react'

const SkillBar = ({data}) => {
  return (
    <div className="skill-bar">
      <div className='skill-bar-icon'>
         {data.icon}
      </div>
      <div className="skill-bar-progress">
        <div className='progress-bar-details'>
        <span>{data.title}</span>
        <span>{data.percentage}%</span>
        </div>
        <div className='progress-bar-outer'>
           <div className='progress-bar-inner' style={{width : `${data.percentage}%`}}>

           </div>
        </div>
      </div>
    </div>
  )
}

export default SkillBar