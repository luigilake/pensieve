import React, {Component} from 'react';
import { Link } from 'react-router';
import Timeline from './Timeline'
import NewEventFormContainer from './NewEventFormContainer'

class TimelineShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeline: {},
      userSignedIn: false,
      id: this.props.params.id,
      selectedTab: 'events'
    }
    this.selectEvents = this.selectEvents.bind(this)
    this.selectNew = this.selectNew.bind(this)
  }

  componentDidMount(){
    let id = this.props.params.id
    fetch(`/api/v1/timelines/${id}`)
    .then(response => response.json())
    .then(response => {
      this.setState({ timeline: response })
    })

    fetch(`/api/v1/current_user.json`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(response => {
      if(response){
        this.setState({ userSignedIn: true })
      }
    })
  }

  selectEvents(){
    if(this.state.selectedTab != 'events'){
      this.setState({ selectedTab: 'events' })
    }
  }

  selectNew(){
    if(this.state.selectedTab != 'new'){
      this.setState({ selectedTab: 'new' })
    }
  }

  render(){

    let image;
    let title;
    if(this.state.timeline.title){
      image = this.state.timeline.image.url
      title = this.state.timeline.title.toUpperCase();
    }

    let buttons;
    if(this.state.userSignedIn){
      buttons = <div><button className='eventshow-memory-button' onClick={this.selectEvents} >EVENTS</button><button className='eventshow-memory-button' onClick={this.selectNew} >ADD NEW EVENT</button></div>
    }

    let selectedEvents;
    let selectedNewEvent;
    if(this.state.selectedTab == 'events'){
      selectedEvents = true;
    } else if (this.state.selectedTab == 'new'){
      selectedNewEvent = true;
    }

    return(
      <div className='showpage-total'>
        <div className='showpage-header'>
          <div className='showpage-header-img-div'>
            <img className='showpage-header-img' src={image}/>
          </div>
          <h1 className='showpage-header-title'>{title}</h1>
        </div>
        {buttons}
        <hr id='show-divider'/>
        <Timeline id={this.state.id} selected={selectedEvents}/>
        <NewEventFormContainer selected={selectedNewEvent} />
      </div>
    )
  }
}

export default TimelineShow
