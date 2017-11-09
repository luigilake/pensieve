import React from 'react';
import { Link } from 'react-router';
import swal from 'sweetalert';

const UserSignedIn = props => {
  let signOut = () => {
    swal("Are you sure you want to sign out?", {
      buttons: ["Cancel", "Sign Out"],
    }).
    then(value => {
      if(value){
        window.location.replace("/signout")
      }
    })
  }

  return(
    <div className='grid-container'>
      <div className='grid-x navbar'>
        <Link to='/'><button className='small-12 medium-2 large-2 cell'>HOME</button></Link>
        <Link><button className='small-12 medium-2 large-2 large-offset-6 cell'>HI, {props.firstname.toUpperCase()}</button></Link>
        <button onClick={signOut} className='small-12 medium-2 large-2 cell'>SIGN OUT</button>
      </div>
    </div>
  )
}

export default UserSignedIn;
