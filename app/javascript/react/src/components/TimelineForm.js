import React from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone'

const TimelineForm = props => {
  return(
    <div className='grid-container new-timeline-form'>
      <div className='grid-x new-timeline-form-inner'>
        <h4 id='personal-timeline-intro' >HERE'S WHERE YOU CAN CREATE A NEW TIMELINE. A PREVIEW WILL SHOW UP AS YOU TYPE, SO TRY TO MAKE THE TITLE CONCISE! E.G. "HISTORY OF THE UNITED STATES", "WW2", OR "LORD OF THE RINGS TIMELINE"</h4>
        <div id='preview-div'>
          {props.success}
          {props.preview}
          {props.loading}
        </div>
        <form className='small-12 medium-6 large-4 large-offset-4 medium-offset-3 cell entire-timeline-form'>
            <ul>
              {props.errors}
            </ul>
          <label className='new-timeline-form-label' >
            <input className='new-timeline-form-input' type='text' onChange={props.handleChange} value={props.titleValue} placeholder={'TIMELINE TITLE'}/>
          </label>
          <label className='new-timeline-form-image-label'>
            <Dropzone id='new-timeline-form-dropzone' style={props.dropzoneStyle} onDrop={props.onDrop} value={props.imageValue}>PLEASE DRAG YOUR IMAGE HERE</Dropzone>
          </label>
          <button className='eventshow-memory-button' type='submit' onClick={props.handleSubmit} value='Submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default TimelineForm;
