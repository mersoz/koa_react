import React from 'react';
import $ from 'jquery';
import VisaulUser from './visualUser';

export default class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: `http://localhost:3000/api/users/${props.match.params.id}`
    };
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount() {
    $.get(`http://localhost:3000/api/users/${this.props.match.params.id}`)
    .then((res)=>{
      this.setState({user: res});
    });
  }

  removeUser() {
    $.ajax({
      url: this.state.url,
      type: 'DELETE',
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
