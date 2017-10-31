import React from 'react';
import { Link } from 'react-router';

const PersonalTimeline = props => {
  let personals = props.personals.map((memory, index) => {

    let right;
    if(index % 2 == 0){
      right = ' right'
    }

    return(
      <div className='timeline-item personal-timeline-div' key={memory.id}>
        <div className="timeline-icon" >

        </div>
        <div className={`timeline-content ${right}`} >
          <p className='timeline-content-date' >{memory.created_at}</p>
          <p>{memory.body}</p>
        </div>
      </div>
    )
  })

  return(
    <div>
      <div className='timeline'>
        {personals}
      </div>
    </div>
  )
}

export default PersonalTimeline
