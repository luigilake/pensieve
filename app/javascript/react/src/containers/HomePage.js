import React, {Component} from 'react';
import { Link } from 'react-router';
import HomeSignedIn from './HomeSignedIn'
import TimelinesIndex from '../components/TimelinesIndex'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_user: {},
      timelines: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/users.json`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ current_user: response })
    })

    fetch(`/api/v1/timelines`)
    .then(response => response.json())
    .then(response => {
      this.setState({ timelines: response })
    })
  }

  render(){
    let homeStatus;
    if(this.state.current_user){
      homeStatus = <HomeSignedIn timelines={this.state.timelines} user={this.state.current_user}/>
    } else {
      homeStatus = <TimelinesIndex timelines={this.state.timelines}/>
    }
    return(
      <div>
        <img id='main-logo' src='https://image.ibb.co/imeFqm/Pensive_project_logo_V4.png' alt='logo'/>
        <hr id='home-divider'/>
        {homeStatus}
      </div>
    )
  }
}

export default HomePage;
