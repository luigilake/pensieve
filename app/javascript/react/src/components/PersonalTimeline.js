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
          <Link to={`/events/${memory.event_id}`} >
            <p className='timeline-content-date' >{memory.created_at}</p>
            <p>{memory.body}</p>
          </Link>
        </div>
      </div>
    )
  })

  return(
    <div>
      <div>
        <h4 id='personal-timeline-intro' >HI, {props.userName.toUpperCase()}! THIS IS YOUR PERSONAL TIMELINE. ALL THE MEMORIES YOU'VE SUBMITTED ARE PLACED HERE IN CHRONOLOGICAL ORDER. IF YOU CLICK ON ONE OF THEM, IT WILL LEAD YOU TO THE EVENT YOU LEFT A MEMORY ON.</h4>
      </div>
      <div className='timeline all-personal-timeline'>
        {personals}
      </div>
    </div>
  )
}

export default PersonalTimeline
