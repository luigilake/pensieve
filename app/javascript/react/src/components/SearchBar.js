import React from 'react';

const SearchBar = props => {
  return(
    <div className='grid-container'>
      <div className="grid-x input-group input-group-rounded">
        <input
          className="small-9 medium-8 large-5 cell input-group-field"
          type="text"
          placeholder='SEARCH FOR A TIMELINE'
          onChange={props.searchInput}
          value={props.searchValue}
        />
      </div>
    </div>
  )
}

export default SearchBar
