import React from 'react';
import io from 'socket.io-client';
import $ from 'jquery';
export default class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chat: []
    };
  }

  componentDidMount(){
    const socket = io('http://localhost:3000');
    this.setState({socket});
    socket.emit('connection', {
      message: 'Hello from the other side'
    });

    socket.on('connections', (response)=>{
      console.log(response);
    });

    socket.on('response', (res)=>{
      this.setState({chat: this.state.chat.concat([res.message])}, ()=>{
        console.log(this.state);
      });
    });
  }

  sendMsg(){
    this.state.socket.emit('message', {
      message: this.state.message
    });
    $('#message').val('');
  }

  setMsg(e){
    this.setState({message: e.target.value});
  }

  render(){
    return(
      <div>
        <label htmlFor="sendMsg"> Send a message</label>
        <input name="sendMsg" id="message" onChange={this.setMsg.bind(this)} />
        <button type="button" onClick={this.sendMsg.bind(this)}>Send</button>
      </div>
    );
  }
}
