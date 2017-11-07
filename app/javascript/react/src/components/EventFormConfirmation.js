import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'material-ui/DatePicker';

const EventFormConfirmation = props => {
  let minDate = new Date()
  minDate = minDate.setFullYear(minDate.getFullYear() - 1000)

  let datePickerStyle = {
    color: 'white'
  }
  return(
    <div className='final-new-event-form-div' >
      <h3>{props.finalData.title.toUpperCase()}</h3>
      <p>{props.finalData.body}</p>
      <form>
        <DatePicker style={datePickerStyle} hintText="Select Event Date" onChange={(e, date) => {props.onDateSelect(e, date)}} minDate={new Date(minDate)} hintStyle={{color: 'white'}} />
        <label className='new-event-form-event-label' >EVENT LOCATION:
          <input className='new-event-form-event-input' type='text' onChange={props.handleLocationChange} value={props.locationValue}/>
        </label>
        <button className='eventshow-memory-button' type='submit' value='Submit' onClick={props.finalSubmit}>SUBMIT</button>
      </form>
    </div>
  )
}

export default EventFormConfirmation;
