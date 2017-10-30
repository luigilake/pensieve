import React from 'react';
import { Link } from 'react-router';

const UserSignedIn = props => {
  let signOut = () => {
    window.location.replace("/signout")
  }

  return(
    <div>
      <Link to='/'><button>Home</button></Link>
      <Link><button>Hi, {props.firstname}</button></Link>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default UserSignedIn;
