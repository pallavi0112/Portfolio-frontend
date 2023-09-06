import React from 'react'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
const PortfolioItem = ({data}) => {
  return (
    <div>
    <img src={data.img} alt="mypic" />
    <div className="Overlay">
      <a href={data.link} target="_blank" loading="lazy">
        <LiaExternalLinkAltSolid />
      </a>
    </div>
    <div className="imgOverlay">
      <div className="overlay-text">
        <h3>{data.title}</h3>
        <p>{data.skill}</p>
      </div>
    </div>
  </div>
  )
}

export default PortfolioItem