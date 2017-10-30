import React from 'react';
import { Link } from 'react-router';

const AdminSignedIn = props => {
  let signOut = () => {
    window.location.replace("/signout")
  }

  return(
    <div>
      <Link to='/'><button>Home</button></Link>
      <Link><button>Users</button></Link>
      <Link><button>Hi, {props.firstname}</button></Link>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default AdminSignedIn;
