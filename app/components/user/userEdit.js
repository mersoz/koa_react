import React, {Component} from 'react';
import $ from 'jquery';

export default class UserEdit extends Component{
  constructor(props) {
    super(props);
    this.state = {
      url: `http://localhost:3000/api/users/${props.match.params.id}`,
      token: `Bearer ${localStorage.getItem('token')}`
    };
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

  render() {
    console.log(this.state);
    return(
      <div>
        UserEdit
      </div>
    );
  }
}
