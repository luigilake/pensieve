import React from 'react';
import { Link } from 'react-router';

const UserSignedOut = props => {

  let signIn = () => {
    window.location.replace("/auth/github")
  }

  return(
    <div>
      <Link to='/'><button>Home</button></Link>
      <button onClick={signIn}>Sign In</button>
    </div>
  )
}

export default UserSignedOut;
