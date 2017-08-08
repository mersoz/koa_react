import React from 'react';

export default class VisualChat extends React.Component{
  render(){
    console.log(this.props.isTyping.join());
    const chat = this.props.chat.map((res, index)=>{
      return(
        <li key={index}>
          <p><strong>{res.sender}:</strong> {res.message.message}</p>
        </li>
      );
    });
    return(
      <div>
        <ul id="chat">
          {chat}
        </ul>
        {this.props.isTyping.length > 0 ? `${this.props.isTyping.join()} is typing`: ''}
      </div>
    );
  }
}
