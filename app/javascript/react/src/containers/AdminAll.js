import React, {Component} from 'react';
import { Link } from 'react-router';
import UserProfile from '../components/UserProfile'
import AllUsers from '../components/AllUsers'

class AdminAll extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: {},
      allUsers: []
    }
    this.deleteUser = this.deleteUser.bind(this);
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

    fetch(`/api/v1/users.json`)
    .then(response => response.json())
    .then(response => {
      this.setState({ allUsers: response })
    })
  }

  deleteUser(user_id){
    fetch(`/api/v1/users/${user_id}`,{
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body =>{
      this.setState({ allUsers: body })
    })
  }

  render(){
    let userProfile;
    let allUsers;
    
    if(this.state.currentUser.admin){
      userProfile = <UserProfile current={this.state.currentUser}/>
      allUsers = <AllUsers users={this.state.allUsers} current={this.state.currentUser} deleteUser={this.deleteUser}/>
    }

    return(
      <div className='grid-container'>
        <div className='grid-x all-user-profiles'>
          {userProfile}
          {allUsers}
        </div>
      </div>
    )
  }
}

export default AdminAll
