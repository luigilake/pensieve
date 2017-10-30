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
    if(this.state.timelinesFilter){
      rendered = <TimelinesIndex timelines={this.props.timelines} />
    } else {
      rendered = <PersonalTimeline personals={this.state.userMemories} />
    }
    return(
      <div>
        <div>
          <button onClick={this.changeFilterTimelines}>Timelines</button>
          <button onClick={this.changeFilterPersonals}>Personal Timeline</button>
        </div>
        {rendered}
      </div>
    )
  }
}

export default HomeSignedIn;
