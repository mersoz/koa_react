import React from 'react';
import io from 'socket.io-client';
import VisualChat from './visualChat';
import Messenger from './Messenger';
export default class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chat: [],
      isTyping: []
    };
  }

  componentDidMount(){
    const socket = io('http://localhost:3000');
    this.setState({socket});
    socket.emit('connection');

    socket.on('connections', (response)=>{
      console.log(response);
    });

    socket.on('response', (res)=>{
      this.setState({chat: this.state.chat.concat([res])});
    });

    socket.on('typing', (res) => {
      this.setState({isTyping: this.state.isTyping.concat([res.user.username])});
    });
  }


  render(){
    return(
      <div>
        <VisualChat chat={this.state.chat} isTyping={this.state.isTyping}/>
        <Messenger socket={this.state.socket}/>
      </div>
    );
  }
}
