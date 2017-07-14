import React from 'react';
import io from 'socket.io-client';
export default class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const socket = io('http://localhost:3000');
    this.setState({socket});
    socket.emit('connection', {
      message: 'Hello from the other side'
    });
  }

  sendMsg(){
    this.state.socket.emit('message', {
      message: 'Sending a message'
    });
  }

  render(){
    return(
      <div>
        <label htmlFor="sendMsg"> Send a message</label>
        <input name="sendMsg" />
        <button type="button" onClick={this.sendMsg.bind(this)}>Send</button>
      </div>
    );
  }
}
