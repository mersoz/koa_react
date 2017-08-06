import React, {Component} from 'react';
import $ from 'jquery';
import VisualRegister from './VisualRegister';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      url: 'http://localhost:3000/api/register'
    };
    this.setUser = this.setUser.bind(this);
    this.register = this.register.bind(this);
  }

  setUser(e) {
    const user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user }, ()=> console.log(this.state));
  }

  register(e) {
    e.preventDefault();
    const user = this.state.user;
    $.ajax({
      url: this.state.url,
      type: 'POST',
      data: user,
      success: (res)=> {
        console.log(res);
      }
    });
  }

  render() {
    return(
      <VisualRegister setUser={this.setUser} register={this.register}/>
    );
  }
}
