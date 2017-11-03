import React, {Component} from 'react';
import { Link } from 'react-router';
import HomeSignedIn from './HomeSignedIn'
import TimelinesIndex from '../components/TimelinesIndex'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_user: {},
      timelines: [],
      loading: false
    }
    this.addNewTimeline = this.addNewTimeline.bind(this)
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

  addNewTimeline(formPayload){
    this.setState({ loading: true })
    let formData = new FormData();
    for(var name in formPayload){
      formData.append(name, formPayload[name])
    }
    fetch(`/api/v1/timelines`, {
      'method': 'POST',
      'body': formData
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ timelines: this.state.timelines.concat(body), loading: false })
    })
  }

  render(){

    let homeStatus;
    if(this.state.current_user){
      homeStatus = <HomeSignedIn timelines={this.state.timelines} user={this.state.current_user} addNewTimeline={this.addNewTimeline} loading={this.state.loading}/>
    } else {
      homeStatus = <TimelinesIndex timelines={this.state.timelines} />
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
