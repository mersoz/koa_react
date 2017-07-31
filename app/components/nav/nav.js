import React from 'react';
import VisualNav from './visualNav';

export default class Nav extends React.Component{
  constructor(){
    super();
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }

  logOut() {
    console.log('removes');
    localStorage.removeItem('token');
  }

  render(){
    return(
      <VisualNav logout={this.logOut} auth={this.isAuthenticated()} callBack={this.update}/>
    );
  }
}
