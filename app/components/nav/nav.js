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
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }

  logOut() {
    localStorage.removeItem('token');
    this.setState({
      isLoggedIn: false
    });
  }

  render(){
    return(
      <VisualNav logout={this.logOut} auth={this.isAuthenticated()} callBack={this.update}/>
    );
  }
}
