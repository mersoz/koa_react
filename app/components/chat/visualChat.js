import React from 'react';

export default class VisualChat extends React.Component{
  render(){
    const chat = this.props.chat.map((message, index)=>{
      return(
        <li key={index}>
          <p>{message.message}</p>
        </li>
      );
    });
    return(
      <ul>
        {chat}
      </ul>
    );
  }
}
