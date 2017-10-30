import React from 'react';
import { Link } from 'react-router';

const TimelineTile = props => {
  return(
    <div>
      <div>
        <img src={props.image} alt={`Photo of ${props.title}`}/>
      </div>
      <h2>{props.title}</h2>
    </div>
  )
}

export default TimelineTile
