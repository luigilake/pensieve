import React from 'react';
import { Link } from 'react-router';
import { hello, signOut } from '../POJOs/NavBarFunctions'

const AdminSignedIn = props => {

  return(
    <div className='grid-container'>
      <div className='grid-x navbar'>
      <Link to='/'><button className='small-12 medium-2 large-2 cell'>HOME</button></Link>
      <Link to='/admin'><button className='small-12 medium-2 large-2 large-offset-4 cell'>ADMIN</button></Link>
      <button onClick={hello} className='small-12 medium-2 large-2 cell'>HI, {props.firstname.toUpperCase()}</button>
      <button onClick={signOut} className='small-12 medium-2 large-2 cell'>SIGN OUT</button>
      </div>
    </div>
  )
}

export default AdminSignedIn;
