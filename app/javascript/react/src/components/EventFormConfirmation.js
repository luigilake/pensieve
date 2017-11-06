import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'material-ui/DatePicker';

const EventFormConfirmation = props => {
  let minDate = new Date()
  minDate = minDate.setFullYear(minDate.getFullYear() - 1000)
  return(
    <div>
      <h3>{props.finalData.title}</h3>
      <p>{props.finalData.body}</p>
      <form>
        <DatePicker hintText="Select Event Date" onChange={(e, date) => {props.onDateSelect(e, date)}} minDate={new Date(minDate)}/>
        <label>EVENT LOCATION:
          <input type='text' onChange={props.handleLocationChange} value={props.locationValue}/>
        </label>
        <button className='eventshow-memory-button' type='submit' value='Submit' onClick={props.finalSubmit}>SUBMIT</button>
      </form>
    </div>
  )
}

export default EventFormConfirmation;
