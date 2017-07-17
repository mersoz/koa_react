import React from 'react';

export default class VisualNav extends React.Component{

  render(){
    return(
      <div>
        <ul>
          {this.props.routes}
        </ul>
      </div>
    );
  }

}
