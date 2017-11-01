import React from 'react';
import { Link } from 'react-router';

const MemoryTile = props => {
  return(
    <div className="testimonial-block-vertical">
      <div className="testimonial-block-vertical-quote">
        <p>{props.body}</p>
      </div>
      <div className="testimonial-block-vertical-person">
        <img className="testimonial-block-vertical-avatar" src={props.image} alt="" />
        <div>
          <p className="testimonial-block-vertical-name">{props.name}</p>
        </div>
      </div>
    </div>
  )
}

export default MemoryTile
