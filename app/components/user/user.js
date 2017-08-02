import React from 'react';
import $ from 'jquery';

export default class User extends React.Component{
  constructor(){
    super();
    this.state = {

    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    $.get(`http://localhost:3000/api/users/${id}`)
    .then((res)=>{
      console.log(res);
    });
  }

  render(){
    return(
      <div>
      user
      </div>
    );
  }
}
