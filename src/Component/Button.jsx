import React from 'react'
import { Link } from 'react-router-dom'
import file from '../assets/Pallavi Soldey.pdf'

const Button = ({title}) => {
  return (
    <button className='portfolio-btn'><Link  
    to={file}
    target='_blank'
    rel="noopener" 
    download>{title}</Link></button>
  )
}

export default Button