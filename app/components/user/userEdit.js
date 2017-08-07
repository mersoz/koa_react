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
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    const token = this.state.token;
    $.ajax({
      url: this.state.url,
      type: 'GET',
      beforeSend: (request)=> {
        request.setRequestHeader('authorization', token);
      },
      success: res => this.setState({user: res})
    });
  }

  setUser(e) {
    const user = Object.assign({}, this.state.user, { [e.target.name]: e.target.value });
    this.setState({ user });
  }

  updateUser(e) {
    e.preventDefault();
    const user = this.state.user;
    const token = this.state.token;
    $.ajax({
      url: this.state.url,
      type: 'PUT',
      data: user,
      beforeSend: (request)=> {
        request.setRequestHeader('authorization', token);
      },
      success: () => {
        this.props.history.push(`/profile/${this.props.match.params.id}`);
      }
    });
  }

  render() {
    return(
      <VisualUserEdit user={this.state.user} setUser={this.setUser} updateUser={this.updateUser}/>
    );
  }
}
