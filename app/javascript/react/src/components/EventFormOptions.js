import React from 'react';
import { Link } from 'react-router';

const EventFormOptions = props => {
  let searchOptions;
  let instruction;
  if(props.searchOptions != null && props.searchOptions.length > 0){
    instruction = 'PLEASE SELECT THE APPROPRIATE EVENT:'
    searchOptions = props.searchOptions.map( (option, index) => {
      return(
        <div key={index} >
          <input type='radio' name='searchValueGroup' value={index} onChange={props.selectSearchOption}/>
          <h4>{option.title}</h4>
          <p>{option.snippet}</p>
          <a href={option.url} target='_blank' >{option.url}</a>
        </div>
      )
    })
  }

  return(
      <label>{instruction}
        {searchOptions}
        <input className='eventshow-memory-button' name='searchValueGroup' type='submit' onClick={props.submitSearchOption}/>
      </label>
  )
}

export default EventFormOptions;
