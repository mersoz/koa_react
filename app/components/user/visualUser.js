import React, {Component} from 'react';

export default class VisualUser extends Component {
  render() {
    return(
      <div>
        <h1>{ this.props.user ? this.props.user.username:''}</h1>
        <p><strong>emal: { this.props.user ? this.props.user.email:''}</strong></p>
        <button>Edit</button>
        <button disabled onClick={this.props.removeUser}>Delete</button>
      </div>
    );
  }
}
