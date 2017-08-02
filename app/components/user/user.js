import React from 'react';
import $ from 'jquery';
import VisaulUser from './visualUser';

export default class User extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    $.get(`http://localhost:3000/api/users/${id}`)
    .then((res)=>{
      this.setState({user: res});
    });
  }

  render(){
    return(
      <VisaulUser user={this.state.user} />
    );
  }
}
