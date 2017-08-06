import React from 'react';
import $ from 'jquery';
import VisaulUser from './visualUser';

export default class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: `http://localhost:3000/api/users/${props.match.params.id}`,
      token: `Bearer ${localStorage.getItem('token')}`
    };
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount() {
    const token = this.state.token;
    $.ajax({
      url: this.state.url,
      type: 'GET',
      beforeSend: function(request) {
        request.setRequestHeader('authorization', token);
      },
      success: res =>{
        this.setState({user: res});
      }
    });
  }

  removeUser() {
    $.ajax({
      url: this.state.url,
      type: 'DELETE',
      beforeSend: function(request) {
        request.setRequestHeader('authorization', this.state.token);
      },
      success: ()=>{
        localStorage.removeItem('token');
        this.props.history.push('/');
      }
    });
  }

  render(){
    return(
      <VisaulUser removeUser={this.removeUser} user={this.state.user ? this.state.user : null} />
    );
  }
}
