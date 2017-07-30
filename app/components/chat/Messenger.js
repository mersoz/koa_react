import React from 'react';
import $ from 'jquery';

export default class Messenger extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  sendMsg(){
    this.props.socket.emit('message', {
      message: this.state.message
    });
    $('#message').val('');
  }

  setMsg(e){
    this.setState({message: e.target.value});
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
