import React, {Component} from 'react';
import { Link } from 'react-router';
import EventTile from '../components/EventTile'

class Timeline extends Component {
  constructor(props){
    super(props);
    this.state = {
      timelineArray: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/timelines/${this.props.id}/events`)
    .then(response => response.json())
    .then(response => {
      this.setState({ timelineArray: response })
    })
  }

  render(){
    let events = this.state.timelineArray.map( (event, index) => {
      let right;
      if(index % 2 != 0){
        right = ' right'
      }

      return(
        <EventTile
          key={event.id}
          id={event.id}
          right={right}
          date={event.date}
          title={event.title.toUpperCase()}
          snippet={event.snippet}
        />
      )
    })

    return(
      <div className='timeline'>
        {events}
      </div>
    )
  }
}

export default Timeline;
