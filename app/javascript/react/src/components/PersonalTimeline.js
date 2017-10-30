import React from 'react';
import { Link } from 'react-router';

const PersonalTimeline = props => {
  let personals = props.personals.map(memory => {
    return(
      <div key={memory.id}>
        <p>{memory.id}</p>
        <p>{memory.body}</p>
      </div>
    )
  })

  return(
    <div>
      <h2>Personal Timeline</h2>
      <div>
        {personals}
      </div>
    </div>
  )
}

export default PersonalTimeline
