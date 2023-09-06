import React from 'react'

const Info = ({info}) => {
  return (
    <div className='info'>
       <p>{info.title} : <span>{info.value}</span></p>
    </div>
  )
}

export default Info