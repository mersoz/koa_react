import React from 'react';
import {Link} from 'react-router-dom';

export default class VisualNav extends React.Component{

  render(){
    return(
      <div>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/chat"> Chat </Link>
          </li>
        </ul>
      </div>
    );
  }

}
