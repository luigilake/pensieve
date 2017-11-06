import React from 'react';
import { Link } from 'react-router';

const EventFormSearch = props => {

  return(
    <form>
      <label>SEARCH FOR AN EVENT:
        <input value={props.searchValue} onChange={props.onChangeSearch}/>
      </label>
    </form>
  )
}

export default EventFormSearch;
