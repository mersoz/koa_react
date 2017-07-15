import React from 'react';

export default class VisualChat extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

  }

  render(){
    const chat = this.props.chat.map((message, index)=>{
      console.log(message);
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
