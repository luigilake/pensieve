import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'material-ui/DatePicker';

const DateComponent = props => {
  let eventDates = props.eventDates.map( (date, index) => {
    if(index + 1 == props.eventDates.length){
        return(
          <div key={index}>
            <div>
              <input
                onChange={props.handleDateSelect}
                value={date}
                name='event-date-select'
                type='radio'
              /> {date}
            </div>
            <div>
              <input
                onChange={props.handleDateSelect}
                value={'none'}
                name='event-date-select'
                type='radio'
              /> NONE OF THE ABOVE
            </div>
          </div>
        )
    } else {
      return(
        <div key={index}>
          <input
            onChange={props.handleDateSelect}
            value={date}
            name='event-date-select'
            type='radio'
          /> {date}
        </div>
      )
    }
  })

  return(
      <label className='new-event-form-event-label' name='event-date-select'>
        {eventDates}
      </label>
  )
}

export default DateComponent
