import React, {Component} from 'react';
import { Link } from 'react-router';
import TimelineTile from './TimelineTile'
import SearchBar from '../components/SearchBar'


class TimelinesIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(event){
    this.setState({ search: event.target.value })
  }

  render(){
    let timelines = this.props.timelines.map(timeline => {
      if(this.state.search != ''){
        if(timeline.title.toLowerCase().includes(this.state.search.toLowerCase())){
          return(
            <TimelineTile
            id={timeline.id}
            key={timeline.id}
            title={timeline.title}
            image={timeline.image}
            />
          )
        }
      } else {
        return(
          <TimelineTile
          id={timeline.id}
          key={timeline.id}
          title={timeline.title}
          image={timeline.image}
          />
        )
      }
    })

    return(
      <div className='grid-container'>
        <div className='grid-x'>
          <SearchBar searchInput={this.onSearch} searchValue={this.state.search.toUpperCase()}/>
        </div>
        <div className='grid-x timeline-index'>
          {timelines}
        </div>
      </div>
    )
  }
}

export default TimelinesIndex
