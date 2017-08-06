import React, {Component} from 'react';
import $ from 'jquery';
import VisualUserEdit from './visualUserEdit';
export default class UserEdit extends Component{
  constructor(props) {
    super(props);
    this.state = {
      url: `http://localhost:3000/api/users/${props.match.params.id}`,
      token: `Bearer ${localStorage.getItem('token')}`
    };
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    const token = this.state.token;
    $.ajax({
      url: this.state.url,
      type: 'GET',
      beforeSend: function(request) {
        request.setRequestHeader('authorization', token);
      },
      success: res => this.setState({user: res})
    });
  }

  setUser(e) {
    this.setState({user: {[e.target.name]: e.target.value }});
  }

  render() {
    return(
      <VisualUserEdit user={this.state.user} setUser={this.setUser}/>
    );
  }
}
