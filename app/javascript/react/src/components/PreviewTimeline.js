import React from 'react';

const PreviewTimeline = props => {
  return(
    <div className='timeline-tile-preview small-12 medium-6 large-2 cell'>
        <img className='timeline-tile-image' src={props.image} />
        <h3 className='timeline-tile-title'>{props.title}</h3>
    </div>
  )
}

export default PreviewTimeline;
