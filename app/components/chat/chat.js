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
    socket.on('message', (response)=>{
      console.log(response);
    });
  }

  sendMsg(){
    this.state.socket.emit('message', {
      message: this.state.message
    });
  }

  async setMsg(e){
    this.setState({message: e.target.value});
  }

  render(){
    return(
      <div>
        <label htmlFor="sendMsg"> Send a message</label>
        <input name="sendMsg" onChange={this.setMsg.bind(this)} />
        <button type="button" onClick={this.sendMsg.bind(this)}>Send</button>
      </div>
    );
  }
}
