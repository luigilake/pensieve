import React from 'react';
import { Link } from 'react-router';
import { hello, signOut } from '../POJOs/NavBarFunctions'


const UserSignedIn = props => {

  return(
    <div className='grid-container'>
      <div className='grid-x navbar'>
        <Link to='/'><button className='small-12 medium-2 large-2 cell'>HOME</button></Link>
        <button onClick={hello} className='small-12 medium-2 large-2 large-offset-6 cell'>HI, {props.firstname.toUpperCase()}</button>
        <button onClick={signOut} className='small-12 medium-2 large-2 cell'>SIGN OUT</button>
      </div>
    </div>
  )
}

export default UserSignedIn;
