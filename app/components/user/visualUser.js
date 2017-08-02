import {Component, React} from 'react';

export default class VisualUser extends Component {
  constructor(props){
    super(props);
    this.state= {};
  }

  render() {
    console.log(this.props.user)
    return(
      <div>
        user
      </div>
    );
  }
}
