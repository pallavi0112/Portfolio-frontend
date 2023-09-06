import React,{useEffect} from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
const TimelineItem = ({ Item }) => {
  return (
    <div className="timeline-item">
      <div className="circle-dot"></div>
      <h3 className="timeline-date">
        <FaRegCalendarAlt />
        {Item.date}
      </h3>
      <h4 className="timeline-title">{Item.post}</h4>
      <p className="timeline-location">{Item.location}</p>
      <p className="timeline-desc">
        {Item.desc}
      </p>
    </div>
  );
};
export default TimelineItem;
