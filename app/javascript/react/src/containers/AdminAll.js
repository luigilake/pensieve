import React, {Component} from 'react';
import { Link } from 'react-router';
import UserProfile from '../components/UserProfile'
import AdminUsers from './AdminUsers'
import AdminTimelines from './AdminTimelines'
import AdminEvents from './AdminEvents'

class AdminAll extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {},
      selectedTab: 'users'
    }
    this.userClick = this.userClick.bind(this);
    this.timelineClick = this.timelineClick.bind(this);
    this.eventClick = this.eventClick.bind(this);
    this.memoryClick = this.memoryClick.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/current_user.json`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ currentUser: response })
    })
  }

  userClick(){
    if(this.state.selectedTab != 'users'){
      this.setState({ selectedTab: 'users' })
    }
  }

  timelineClick(){
    if(this.state.selectedTab != 'timelines'){
      this.setState({ selectedTab: 'timelines' })
    }
  }

  eventClick(){
    if(this.state.selectedTab != 'events'){
      this.setState({ selectedTab: 'events' })
    }
  }

  memoryClick(){
    if(this.state.selectedTab != 'memories'){
      this.setState({ selectedTab: 'memories' })
    }
  }

  render(){
    let userProfile,
     adminUsers,
     adminTimelines,
     adminEvents,
     buttonClass = 'eventshow-memory-button',
     userClick,
     timelineClick,
     eventClick,
     memoryClick;

    if(this.state.currentUser.admin){
      userProfile = <UserProfile current={this.state.currentUser}/>

      if(this.state.selectedTab == 'users') {
        userClick = true;
      } else if (this.state.selectedTab == 'timelines'){
        timelineClick = true;
      } else if (this.state.selectedTab == 'events'){
        eventClick = true;
      } else if (this.state.selectedTab == 'memories'){
        memoryClick = true;
      }

      adminUsers = <AdminUsers current={this.state.currentUser} deleteUser={this.deleteUser} userClick={userClick}/>
      adminTimelines = <AdminTimelines timelineClick={timelineClick} />
      adminEvents = <AdminEvents eventClick={eventClick} />
    }

    return(
      <div className='grid-container'>
        <div className='grid-x all-user-profiles'>
          {userProfile}
        </div>
        <div className='grid-x all-user-profiles'>
          <button className={buttonClass} onClick={this.userClick}>ALL USERS</button>
          <button className={buttonClass} onClick={this.timelineClick}>ALL TIMELINES</button>
          <button className={buttonClass} onClick={this.eventClick}>ALL EVENTS</button>
          <button className={buttonClass} onClick={this.memoryClick}>ALL MEMORIES</button>
        </div>
        {adminUsers}
        {adminTimelines}
        {adminEvents}
      </div>
    )
  }
}

export default AdminAll
