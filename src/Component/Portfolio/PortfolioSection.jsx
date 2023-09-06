import React from "react";
import SectionTitle from "../About/SectionTitle";
import "./portfolio.css";
import PortfolioItem from "./PortfolioItem";
import PortfolioData from "./PortfolioData";
const PortfolioSection = () => {
  return (
    <div className="portfolio section-container">
      <SectionTitle title="Portfolio" />
      <div className="gridBox">
      {
        PortfolioData.map((item, index) => {
          return <PortfolioItem key={index} data={item} />
        })
      }
      
      </div>
    </div>
  );
};

export default PortfolioSection;
