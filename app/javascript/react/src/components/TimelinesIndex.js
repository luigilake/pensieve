import React from 'react';
import { Link } from 'react-router';
import TimelineTile from './TimelineTile'

const TimelinesIndex = props => {
  let timelines = props.timelines.map(timeline => {
    return(
      <TimelineTile
      id={timeline.id}
      key={timeline.id}
      title={timeline.title}
      image={timeline.image}
      />
    )
  })

  return(
    <div>
      <h2>Timelines</h2>
      <div>
        {timelines}
      </div>
    </div>
  )
}

export default TimelinesIndex
