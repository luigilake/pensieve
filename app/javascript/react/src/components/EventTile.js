import React from 'react';
import { Link } from 'react-router';

const EventTile = props => {
  return(
    <div className='timeline-item entire-event-item-timeline' >
        <div className="timeline-icon" ></div>
        <div className={`timeline-content ${props.right}`} >
          <h3 className='timeline-content-date' >{props.date}</h3>
          <div className='timeline-content-title-hover'>
            <Link to={`/events/${props.id}`}><h3>{props.title}</h3></Link>
          </div>
          <p>{props.snippet}</p>
        </div>
    </div>
  )
}

export default EventTile;
