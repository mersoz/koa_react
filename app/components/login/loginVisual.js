import React, {Component} from 'react';

export default class LoginVisual extends Component {
  render() {
    return(
      this.props.signIn ?
      <form onSubmit={this.props.signIn}>
        <label htmlFor="email">E-Mail</label>
        <input onChange={this.props.setUser} name="email" type="text"/>
        <label htmlFor="password"> password</label>
        <input onChange={this.props.setUser} name="password" type="password" />
        <input type="submit" />
      </form> : <div>Loading..</div>
    );
  }
}
