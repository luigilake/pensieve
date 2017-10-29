import React, {Component} from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  signIn(){
    window.location.replace("/auth/github")
  }

  signOut(){
    window.location.replace("/signout")
  }

  render(){
    return(
      <div>
        <Link to='/'><button>Home</button></Link>
        <button onClick={this.signIn}>Sign In</button>
        <button onClick={this.signOut}>Sign Out</button>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
