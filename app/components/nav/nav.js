import React from 'react';
import VisualNav from './visualNav';

export default class Nav extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn: this.isAuthenticated()
    };
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.render = this.render.bind(this);
    this.logOut = this.logOut.bind(this);
    this.getUserId = this.getUserId.bind(this);
    this.isValidToken = this.isValidToken.bind(this);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    if(token) this.isValidToken(token);
    try {
      if(token.match(/\./g).length) return true;
    } catch(err) {
      return false;
    }
  }

  isValidToken(token) {
    if(this.parseJwt(token).exp < parseInt(Date.now().toString().substring(0, 10))) localStorage.removeItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.setState({
      isLoggedIn: false
    });
  }

  getUserId() {
    return this.parseJwt(localStorage.getItem('token')).id;
  }

  parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  render(){
    return(
      <VisualNav logout={this.logOut} userId={this.isAuthenticated()? this.getUserId() : null} auth={this.isAuthenticated()} callBack={this.update}/>
    );
  }
}
