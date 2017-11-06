import React, {Component} from 'react';
import { Link } from 'react-router';
import AllUsers from '../components/AllUsers'

class AdminUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
      allUsers: []
    }
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount(){
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
    let allUsers;
    if(this.props.userClick){
      allUsers = <AllUsers users={this.state.allUsers} current={this.props.current} deleteUser={this.deleteUser}/>
    }
    return(
      <div className='grid-x all-user-profiles'>
        {allUsers}
      </div>
    )
  }
}

export default AdminUsers
