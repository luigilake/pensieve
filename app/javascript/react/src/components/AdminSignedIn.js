import React from 'react';
import { Link } from 'react-router';

const AdminSignedIn = props => {
  let signOut = () => {
    window.location.replace("/signout")
  }

  return(
    <div className='grid-container'>
      <div className='grid-x navbar'>
      <Link to='/'><button className='small-12 medium-2 large-2 cell'>HOME</button></Link>
      <Link><button className='small-12 medium-2 large-2 large-offset-4 cell'>USERS</button></Link>
      <Link><button className='small-12 medium-2 large-2 cell'>HI, {props.firstname.toUpperCase()}</button></Link>
      <button onClick={signOut} className='small-12 medium-2 large-2 cell'>SIGN OUT</button>
      </div>
    </div>
  )
}

export default AdminSignedIn;
