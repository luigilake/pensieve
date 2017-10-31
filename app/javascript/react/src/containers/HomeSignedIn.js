import React, {Component} from 'react';
import { Link } from 'react-router';
import TimelinesIndex from '../components/TimelinesIndex'
import PersonalTimeline from '../components/PersonalTimeline'

class HomeSignedIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      timelinesFilter: true,
      userMemories: []
    }
    this.changeFilterTimelines = this.changeFilterTimelines.bind(this)
    this.changeFilterPersonals = this.changeFilterPersonals.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.userId}.json`, {
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
    if(this.state.timelinesFilter == false){
      this.setState({ timelinesFilter: true })
    }
  }

  changeFilterPersonals(){
    if(this.state.timelinesFilter == true){
      this.setState({ timelinesFilter: false })
    }
  }

  render(){
    let rendered;
    let timelineClass;
    let personalClass;
    if(this.state.timelinesFilter){
      timelineClass = 'selected-homepage-button'
      rendered = <TimelinesIndex timelines={this.props.timelines} />
    } else {
      personalClass = 'selected-homepage-button'
      rendered = <PersonalTimeline personals={this.state.userMemories} />
    }

    return(
      <div>
        <div className='grid-container'>
          <div className='grid-x home-page-signed-buttons'>
            <button className={`home-page-signed-buttons small-12 medium-4 large-2 large-offset-4 cell ${timelineClass}`} onClick={this.changeFilterTimelines}>TIMELINES</button>
            <button className={`home-page-signed-buttons small-12 medium-4 large-2 cell ${personalClass}`} onClick={this.changeFilterPersonals}>PERSONAL TIMELINE</button>
          </div>
        </div>
        {rendered}
      </div>
    )
  }
}

export default HomeSignedIn;
