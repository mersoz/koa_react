import React from 'react';

export default class VisualNav extends React.Component{

  componentDidUpdate() {
    this.props.callBack();
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.routes}
          { this.props.auth ? <li onClick={this.props.logout}>log out</li>: '' }
        </ul>
      </div>
    );
  }

}
