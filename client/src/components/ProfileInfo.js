import React, { Component } from 'react';
import './Profile.css';

class ProfileInfo extends Component {
  render () {
    const { profile } = this.props;
    return (
      <div className="profile">
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          <img className="profile-image" src={profile.avatar_url} alt={profile.name} title={profile.name} />
        </a>
        <h3 className="profile-name">{profile.name}</h3>
        <h5 className="profile-login">
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.login}
          </a>
        </h5>
        <p className="profile-bio">{profile.bio}</p>
      </div>
    );
  }
}

export default ProfileInfo;