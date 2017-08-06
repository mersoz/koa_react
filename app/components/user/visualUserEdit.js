import React, {Component} from 'react';

export default class VisualUserEdit extends Component {

  render() {
    return(
      this.props.user ?
      <form>
      <label htmlFor="username">
        Username
      </label>
      <input type="text" name="username" onChange={this.props.setUser} defaultValue={this.props.user.username}/>
      <label htmlFor="email">
        email
      </label>
      <input type="text" name="email" onChange={this.props.setUser} defaultValue={this.props.user.email}/>
      <button onClick={this.props.updateUser}>Update!</button>
      </form> : <div>Loading..</div>
    );
  }
}
