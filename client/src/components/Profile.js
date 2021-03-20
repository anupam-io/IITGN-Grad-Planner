import React, { Component } from 'react';
import ProfileInfo from '../components/ProfileInfo';
import axios from 'axios';

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      username: '',
      profile: {},
    }
  }

  componentWillMount () {
    axios.get(`https://api.github.com/users/${this.props.username}`)
      .then(response => {
        this.setState({
          loading: false,
          username: this.props.username,
          profile: response.data
        });
        
      })
      .catch(error => this.props.history.push('/', { message: 'User not found!' }));
  }

  render () {

    return (
      <div>
        <ProfileInfo profile={this.state.profile}/>
      </div>
    );
  }
}

export default Profile;