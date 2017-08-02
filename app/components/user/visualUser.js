import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class VisualUser extends Component {
  render() {
    return(
      <div>
        <h1>{ this.props.user ? this.props.user.username:''}</h1>
        <p><strong>emal: { this.props.user ? this.props.user.email:''}</strong></p>
        <Link to={`/profile/${this.props.user ? this.props.user._id: ''}/edit`}><button>Edit</button></Link>
        <button disabled onClick={this.props.removeUser}>Delete</button>
      </div>
    );
  }
}
