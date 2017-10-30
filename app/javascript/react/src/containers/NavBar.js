import React, {Component} from 'react';
import { Link } from 'react-router';
import UserSignedIn from '../components/UserSignedIn'
import UserSignedOut from '../components/UserSignedOut'
import AdminSignedIn from '../components/AdminSignedIn'

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_user: {}
    }
  }

  componentDidMount(){
    fetch(`/api/v1/users.json`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      if(response){
        this.setState({ current_user: response })
      } else {
        this.setState({ current_user: {} })
      }
    })
  }

  render(){
    let logInStatus = null;
    if(this.state.current_user.name){
      let username= this.state.current_user['name'].split(' ')[0]

      if(this.state.current_user.admin){
        logInStatus = <AdminSignedIn firstname={username}/>
      } else {
        logInStatus = <UserSignedIn firstname={username}/>
      }
    } else {
      logInStatus = <UserSignedOut />
    }

    return(
      <div>
        {logInStatus}
        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
