import React from 'react'
const ServiceItem = ({data}) => {
  return (
    <div className="service-item">
    <div className="service-icon">
        {data.icon}
    </div>
    <div className="service-content">
      <h3>{data.title}</h3>
      <p>
      {data.text}
      </p>
    </div>
  </div>
  )
}

export default ServiceItem