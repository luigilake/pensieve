import React from 'react';
import { Link } from 'react-router';
import EventFormOptions from './EventFormOptions'

const EventFormSearch = props => {
  let searchOptions;
  if(props.searchOptions){
    searchOptions = <EventFormOptions searchOptions={props.searchOptions} submitSearchOption={props.submitSearchOption} selectSearchOption={props.selectSearchOption}/>
  }
  return(
    <div>
      <form>
        <label className='new-event-form-search-label' >SEARCH FOR AN EVENT:
          <input className='new-event-form-search-input' value={props.searchValue} onChange={props.onChangeSearch} placeholder='Attack on Pearl Harbor, etc. on Wikipedia'/>
        </label>
        <button className='eventshow-memory-button' type='submit' value='Submit' onClick={props.submitSearch}>SEARCH</button>
        {searchOptions}
      </form>
    </div>
  )
}

export default EventFormSearch;
