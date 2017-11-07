import React from 'react';
import { Link } from 'react-router';

const PersonalTileEdit = props => {
  return(
    <div className='timeline-item personal-timeline-div'>
      <div className="timeline-icon" >

      </div>
      <div className={`timeline-content ${props.right}`} >
        <p className='timeline-content-date' >{props.memory.created_at}</p>
        <form>
          <textarea className='new-event-form-event-input' onChange={props.changeMemory} value={props.editValue}/>
          <button className='personal-timeline-button' onClick={props.submitMemory} type='submit' >SAVE</button>
        </form>
      </div>
    </div>
  )
}

export default PersonalTileEdit;
