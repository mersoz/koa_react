import React, {Component} from 'react';
import $ from 'jquery';

export default class UserEdit extends Component{
  constructor(props) {
    super(props);
    this.state = {
      url: `http://localhost:3000/api/users/${props.match.params.id}`
    };
  }

  componentDidMount() {
    $.get(this.state.url)
    .then( res => this.setState({user: res}));
  }

  render() {
    return(
      <div>
        UserEdit
      </div>
    );
  }
}
