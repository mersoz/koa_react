import React from 'react';
import $ from 'jquery';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.setUser = this.setUser.bind(this);
    this.signIn = this.signIn.bind(this);
  }
  setUser(e){

    this.setState({[e.target.name]: e.target.value});
  }
  signIn(e){
    e.preventDefault();
    $.post('http://localhost:3000/api/login', this.state)
    .then(data=> localStorage.setItem('token', data.token));
  }

  render(){
    return(
      <form onSubmit={this.signIn}>
        <label htmlFor="email">E-Mail</label>
        <input onChange={this.setUser} name="email" type="text"/>
        <label htmlFor="password"> password</label>
        <input onChange={this.setUser} name="password" type="password" />
        <input type="submit" />
      </form>
    );
  }
}
