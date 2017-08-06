import React, {Component} from 'react';

export default class VisualRegister extends Component{
  render() {
    return(
      this.props.setUser ?
      <div>
        <h1> Register</h1>
        <form>
          <label htmlFor="username">username</label>
          <input onChange={this.props.setUser} type="text" name="username" placeholder="Demi" />
          <label htmlFor="email">email</label>
          <input onChange={this.props.setUser} type="text" name="email" placeholder="DemiLolo@cool.yes" />
          <label htmlFor="password">password</label>
          <input onChange={this.props.setUser} type="password" name="password" placeholder="password" />
          <label htmlFor="passwordConfirmation">passwordConfirmation</label>
          <input onChange={this.props.setUser} type="password" name="passwordConfirmation" placeholder="Demi" />
          <button onClick={this.props.register}>Join us!</button>
        </form>
      </div> : <div> loading ..</div>
    );
  }
}
