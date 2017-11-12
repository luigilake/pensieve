import React from 'react';
import { Link } from 'react-router';

const EventFormOptions = props => {
  let searchOptions;
  let instruction;
  if(props.searchOptions != null && props.searchOptions.length > 0){
    instruction = 'PLEASE SELECT THE APPROPRIATE EVENT FROM THE FOLLOWING WIKIPEDIA ARTICLES:'
    searchOptions = props.searchOptions.map( (option, index) => {
      return(
        <div key={index} className='new-event-form-options'>
          <input type='radio' name='searchValueGroup' value={index} onChange={props.selectSearchOption}/>
          <h4>{option.title}</h4>
          <p>{option.snippet}</p>
          <a href={option.url} target='_blank' >{option.url}</a>
        </div>
      )
    })
  }

  return(
    <label className='new-event-form-search-label' >{instruction}
      {searchOptions}
      <input className='new-event-form-option-submit' name='searchValueGroup' type='submit' value='SUBMIT' onClick={props.submitSearchOption}/>
    </label>
  )
}

export default EventFormOptions;
