import React from 'react';
import { Link } from 'react-router';

const PersonalTile = props => {

  return(
    <div className='timeline-item personal-timeline-div'>
      <div className="timeline-icon" >

      </div>
      <div className={`timeline-content ${props.right}`} >
        <Link to={`/events/${props.memory.event_id}`} >
          <p className='timeline-content-date' >{props.memory.created_at}</p>
          <p>{props.memory.body}</p>
        </Link>
        <button className='personal-timeline-button' onClick={props.onEdit} >EDIT</button><button onClick={props.onDelete} className='personal-timeline-button' >DELETE</button>
      </div>
    </div>
  )
}

export default PersonalTile;
