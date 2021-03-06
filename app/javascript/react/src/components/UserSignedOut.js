import React from 'react';
import { Link } from 'react-router';
import { signIn } from '../POJOs/NavBarFunctions'


const UserSignedOut = props => {

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
