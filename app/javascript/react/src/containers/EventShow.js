import React, {Component} from 'react';
import { Link } from 'react-router';
import EventInfo from '../components/EventInfo'
import MemoryIndex from './MemoryIndex'

class EventShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventDetails: {}
    }
  }

  componentDidMount(){
    let id = this.props.params.id
    fetch(`/api/v1/events/${id}`)
    .then(response => response.json())
    .then(response => {
      this.setState({ eventDetails: response })
    })
  }

  render(){
    let event = this.state.eventDetails
    let memoryIndex;
    let title;
    if(this.state.eventDetails.title){
      memoryIndex = <MemoryIndex id={event.id} />
      title = event.title.toUpperCase()
    }
    return(
      <div className='grid-container'>
        <div className='grid-x entire-show-page'>
          <EventInfo
            title={title}
            body={event.body}
            date={event.date}
            location={event.location}
          />
          {memoryIndex}
        </div>
      </div>
    )
  }
}

export default EventShow;
