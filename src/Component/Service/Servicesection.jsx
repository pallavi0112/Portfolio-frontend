import React from 'react'
import './service.css'
import SectionTitle from '../About/SectionTitle'
import ServiceItem from './ServiceItem'
import ServiceData from './ServiceData'
const Servicesection = () => {
  return (
    <div className='service section-container'>
        <SectionTitle title="Services" />
        <div className='gridBox'>
        {
          ServiceData.map((item, index) => {
            return <ServiceItem key={index} data={item} />
          })
        }
       
        </div>

</div>
  )
}

export default Servicesection