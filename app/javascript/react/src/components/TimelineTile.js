import React from 'react';
import { Link } from 'react-router';

const TimelineTile = props => {
  return(
    <div className='timeline-tile small-12 medium-6 large-2 cell'>
      <Link to={`/timelines/${props.id}`}>
        <img className='timeline-tile-image' src={props.image.url} alt={`Photo of ${props.title}`}/>
        <h3 className='timeline-tile-title'>{props.title.toUpperCase()}</h3>
      </Link>
    </div>
  )
}

export default TimelineTile
