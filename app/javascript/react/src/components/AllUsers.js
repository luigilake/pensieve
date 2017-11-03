import React from 'react';
import { Link } from 'react-router';

const AllUsers = props => {

  let users = props.users.map( user => {

    if(user.id != props.current.id){
      let deleteUser = () => {
        props.deleteUser(user.id)
      }

      return(
        <div key={user.id} className="card-user-container small-12 medium-4 large-3 cell">
          <div className="card-user-avatar">
            <img src={user.image_url} alt="" className="user-image"/>
          </div>
          <div className="card-user-bio">
            <h4>{user.name}</h4>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </div>
          <button className='eventshow-memory-button' onClick={deleteUser} >DELETE</button>
        </div>
      )
    }
  })

  return(
    <div>
      {users}
    </div>
  )
}

export default AllUsers;
