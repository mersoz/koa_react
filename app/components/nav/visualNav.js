import React from 'react';
import {Link} from 'react-router-dom';

export default class VisualNav extends React.Component{

  render(){
    let routes = this.props.auth ? ['home', 'chat'] : ['login'];
    routes = routes.map((route, i)=>{
      return(
        <li key={i}>
          <Link to={route==='home'? '/' :`/${route}`}> {route}</Link>
        </li>
      );
    });

    return(
      <div>
        <ul>
          {routes}
          { this.props.auth ? <li onClick={this.props.logout}>log out</li>: '' }
        </ul>
      </div>
    );
  }

}
