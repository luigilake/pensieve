import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import DateComponent from './DateComponent';

const EventFormConfirmation = props => {
  let minDate = new Date()
  minDate = minDate.setFullYear(minDate.getFullYear() - 1000)

  let datePickerStyle = {
    color: 'white'
  }

  let foundDate;
  let dateComponent;
  let datePicker;
  if(props.eventDates.length == 0){
    foundDate = <p>IT LOOKS LIKE WE COULDN'T FIND ANY DATES IN THIS ARTICLE. PLEASE SELECT THE EVENT DATE IN THE FIELD BELOW. THANKS!</p>
    datePicker = <DatePicker style={datePickerStyle} hintText="Select Event Date" onChange={(e, date) => {props.onDateSelect(e, date)}} minDate={new Date(minDate)} hintStyle={{color: 'white'}} />
  } else {
    dateComponent = <DateComponent eventDates={props.eventDates} handleDateSelect={props.handleDateSelect}/>
    foundDate = <p>WE FOUND SOME DATES FROM THAT WIKIPEDIA ARTICLE. PLEASE CONFIRM THE CORRECT EVENT DATE. IF NONE OF THEM ARE CORRECT, PLEASE ENTER THE CORRECT DATE. THANKS!</p>
    if(props.formDate == 'none'){
      datePicker = <DatePicker style={datePickerStyle} hintText="Select Event Date" onChange={(e, date) => {props.onDateSelect(e, date)}} minDate={new Date(minDate)} hintStyle={{color: 'white'}} />
    }
  }
  return(
    <div className='final-new-event-form-div' >PLEASE CONFIRM THE EVENT DATE AND LOCATION BELOW.
      <hr id='home-divider'/>
      <h3>{props.finalData.title.toUpperCase()}</h3>
      {props.error}
      <form>
        {foundDate}
        {dateComponent}
        {datePicker}
        <label className='new-event-form-event-label' >EVENT LOCATION:
          <input className='new-event-form-event-input' type='text' onChange={props.handleLocationChange} value={props.locationValue}/>
        </label>
        <button className='eventshow-memory-button' type='submit' value='Submit' onClick={props.finalSubmit}>SUBMIT</button>
      </form>
      <p>{props.finalData.body}</p>
    </div>
  )
}

export default EventFormConfirmation;
