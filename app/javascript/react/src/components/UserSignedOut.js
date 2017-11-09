import React from 'react';
import { Link } from 'react-router';
import swal from 'sweetalert';

const UserSignedOut = props => {

  let signIn = () => {
    swal({
      title: "Sign In",
      icon: "info",
      buttons: {
        google: {
          text: 'Sign In with Google',
          value: 'google'
        },
        github: {
          text: 'Sign In with Github',
          value: 'github'
        }
      }
    })
    .then(value => {
      if(value == 'github'){
        window.location.replace("/auth/github")
      } else if (value == 'google'){
        window.location.replace("/auth/google")
      }
    })
  }

  return(
    <div className='grid-container'>
      <div className='grid-x navbar'>
        <Link to='/'><button className='small-12 medium-2 large-2 cell'>HOME</button></Link>
        <button onClick={signIn} className='small-12 medium-2 large-2 large-offset-8 cell'>SIGN IN</button>
      </div>
    </div>
  )
}

export default UserSignedOut;
