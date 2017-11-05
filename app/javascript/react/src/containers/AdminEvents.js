import React, {Component} from 'react';
import { Link } from 'react-router';

class AdminEvents extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount(){
    fetch(`/api/v1/events`)
    .then(response => response.json())
    .then(response => {
      this.setState({ events: response })
    })
  }

  deleteEvent(event_id){
    fetch(`/api/v1/events/${event_id}`,{
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body =>{
      this.setState({ events: body })
    })
  }

  render(){
    let events;
    if(this.props.eventClick){
      events = this.state.events.map( event => {

        let deleteEvent = () => {
          this.deleteEvent(event.id)
        }

        return(
          <div key={event.id}>
            <span onClick={deleteEvent}>✘</span>
            <h3>{event.date}</h3>
            <Link to={`/events/${event.id}`}><h3>{event.title}</h3></Link>
            <p>{event.snippet}</p>
          </div>
        )
      })
    }

    return(
      <div className='grid-x all-user-profiles'>
        {events}
      </div>
    )
  }
}

export default AdminEvents
