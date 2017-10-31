import React from 'react';
import { Link } from 'react-router';

const EventTile = props => {
  return(
    <div className='timeline-item' >
      <Link to={`/events/${props.id}`}>
        <div className="timeline-icon" ></div>
        <div className={`timeline-content ${props.right}`} >
          <h3 className='timeline-content-date' >{props.date}</h3>
          <h3>{props.title}</h3>
          <p>{props.snippet}</p>
        </div>
      </Link>
    </div>
  )
}

export default EventTile;
