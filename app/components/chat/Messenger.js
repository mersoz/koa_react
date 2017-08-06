import React from 'react';
import $ from 'jquery';

export default class Messenger extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: this.parseJwt(localStorage.getItem('token'))
    };
    this.isTyping = this.isTyping.bind(this);
  }

  parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  sendMsg(){
    this.props.socket.emit('message', {
      message: this.state.message,
      userId: this.state.user.id
    });
    $('#message').val('');
  }

  setMsg(e){
    this.setState({message: e.target.value}, ()=>{
      this.isTyping();
    });
  }

  isTyping() {
    if(this.state.message.length > 0){
      this.props.socket.emit('typing', {
        userId: this.state.user.id
      });
    }
  }


  render(){
    return(
      <form>
        <label htmlFor="sendMsg"> Send a message!</label>
        <input name="sendMsg" id="message" onChange={this.setMsg.bind(this)} />
        <button type="button" onClick={this.sendMsg.bind(this)}>Send</button>
      </form>
    );
  }
}
