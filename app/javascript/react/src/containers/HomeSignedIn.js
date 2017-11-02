import React, {Component} from 'react';
import { Link } from 'react-router';
import TimelinesIndex from '../components/TimelinesIndex'
import PersonalTimeline from '../components/PersonalTimeline'
import TimelineForm from './TimelineForm'

class HomeSignedIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      timelinesFilter: 'timelines',
      userMemories: []
    }
    this.changeFilterTimelines = this.changeFilterTimelines.bind(this)
    this.changeFilterPersonals = this.changeFilterPersonals.bind(this)
    this.changeFilterNew = this.changeFilterNew.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.user.id}.json`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ userMemories: response })
    })
  }

  changeFilterTimelines(){
    if(this.state.timelinesFilter != 'timelines'){
      this.setState({ timelinesFilter: 'timelines' })
    }
  }

  changeFilterPersonals(){
    if(this.state.timelinesFilter != 'personals'){
      this.setState({ timelinesFilter: 'personals' })
    }
  }

  changeFilterNew(){
    if(this.state.timelinesFilter != 'new'){
      this.setState({ timelinesFilter: 'new' })
    }
  }

  render(){
    let rendered;
    let timelineClass;
    let personalClass;
    let newClass;
    let name;

    if(this.props.user.name){
      name = this.props.user.name.split(' ')[0]
    }

    if(this.state.timelinesFilter == 'timelines'){
      timelineClass = 'selected-homepage-button'
      rendered = <TimelinesIndex timelines={this.props.timelines} />
    } else if (this.state.timelinesFilter == 'personals') {
      personalClass = 'selected-homepage-button'
      rendered = <PersonalTimeline personals={this.state.userMemories} userName={name}/>
    } else if (this.state.timelinesFilter == 'new') {
      newClass = 'selected-homepage-button'
      rendered = <TimelineForm addNewTimeline={this.props.addNewTimeline}/>
    }

    return(
      <div>
        <div className='grid-container'>
          <div className='grid-x home-page-signed-buttons'>
            <button className={`home-page-signed-buttons small-12 medium-4 large-2 large-offset-3 cell ${timelineClass}`} onClick={this.changeFilterTimelines}>TIMELINES</button>
            <button className={`home-page-signed-buttons small-12 medium-4 large-2 cell ${personalClass}`} onClick={this.changeFilterPersonals}>PERSONAL TIMELINE</button>
            <button className={`home-page-signed-buttons small-12 medium-4 large-2 cell new-timeline-button ${newClass}`} onClick={this.changeFilterNew} >ADD NEW TIMELINE</button>
          </div>
        </div>
        {rendered}
      </div>
    )
  }
}

export default HomeSignedIn;
