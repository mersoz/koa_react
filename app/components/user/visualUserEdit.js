import React, {Component} from 'react';

export default class VisualUserEdit extends Component {

  render() {
    return(
      <form>
      <label htmlFor="username">
        Username
      </label>
      <input type="text" name="username"/>
      <label htmlFor="email">
        email
      </label>
      <input type="text" name="email"/>
      <button>Update!</button>
      </form>
    );
  }
}
