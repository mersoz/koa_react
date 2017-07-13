import React from 'react';

export default class Chat extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <label htmlFor="sendMsg"> Send a message</label>
        <input name="sendMsg" />
      </div>
    );
  }
}
