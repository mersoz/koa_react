import React from 'react';
import VisualNav from './visualNav';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component{
  constructor(){
    super();
    this.state = {
      routes: this.isAuthenticated() ? ['home', 'chat'] : ['login']
    };
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }

  componentDidMount() {
    console.log(this.isAuthenticated());
    this.isAuthenticated();
  }

  render(){
    const routes = this.state.routes.map((route, i)=>{
      return(
        <li key={i}>
          <Link to={route==='home'? '/' :`/${route}`}> {route}</Link>
        </li>
      );
    });
    return(
      <VisualNav routes={routes}/>
    );
  }
}
