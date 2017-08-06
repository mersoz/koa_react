import React, {Component} from 'react';
import $ from 'jquery';
import VisualRegister from './VisualRegister';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {};
    this.setUser = this.setUser.bind(this);
  }

  setUser(e) {
    this.setState({ user: {[e.target.name]: e.target.value}}, ()=> console.log(this.state));
  }

  render() {
    return(
      <VisualRegister setUser={this.setUser} />
    );
  }
}
