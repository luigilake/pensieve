import React from 'react';
import { Link } from 'react-router';

const EventInfo = props => {
  return(
    <div className='small-12 large-6 cell eventshow-info'>
      <h1>{props.title}</h1>
      <ul>
        <p>DATE: {props.date}</p>
        <p>LOCATION: {props.location}</p>
      </ul>
      <p>{props.body}</p>
    </div>
  )
}

export default EventInfo;
