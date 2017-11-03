import React from 'react';
import { Link } from 'react-router';

const UserProfile = props => {
  let user = props.current
  let admin;
  if(props.current.admin){
    admin = <p>ADMINISTRATOR</p>
  }
  return(
    <div className="card-user-container-admin small-12 medium-4 large-3 cell">
      <div className="card-user-avatar">
        <img src={user.image_url} alt="" className="user-image"/>
      </div>
      <div className="card-user-bio">
        <h4>{user.name}</h4>
        <a href={`mailto:${user.email}`}>{user.email}</a>
        {admin}
      </div>
    </div>
  )
}

export default UserProfile;
