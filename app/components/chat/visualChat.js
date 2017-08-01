import React from 'react';

export default class VisualChat extends React.Component{
  render(){
    const chat = this.props.chat.map((res, index)=>{
      return(
        <li key={index}>
          <p><strong>{res.sender}</strong>: {res.message.message}</p>
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
