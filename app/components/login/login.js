import React from 'react';
import $ from 'jquery';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <form>
        <label htmlFor="email">E-Mail</label>
        <input name="email" type="text"/>
        <label htmlFor="password"> password</label>
        <input name="password" type="password" />
      </form>
    );
  }
}
