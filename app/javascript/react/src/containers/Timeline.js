import React, {Component} from 'react';
import { Link } from 'react-router';
import EventTile from '../components/EventTile'

class Timeline extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: this.props.events
    }
  }

  render(){
    let events;
    if(this.props.selected && this.props.events){
      events = this.props.events.map( (event, index) => {
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
    }

    return(
      <div className='timeline'>
        {events}
      </div>
    )
  }
}

export default Timeline;
