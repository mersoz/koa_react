import React from 'react';
import io from 'socket.io-client';
export default class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const socket = io();
    console.log(socket);
    socket.emit('data', {
      message: 'Hello from the other side'
    });
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
