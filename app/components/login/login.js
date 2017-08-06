import React from 'react';
import $ from 'jquery';
import LoginVisual from './loginVisual';
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
    .then(data => {
      localStorage.setItem('token', data.token);
      this.props.history.push('/');
    });
  }

  render(){
    return(
      <LoginVisual setUser={this.setUser} signIn={this.signIn} />
    );
  }
}
