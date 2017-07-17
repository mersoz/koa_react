import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from '../components/chat/chat';

export default class Routes extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route path="/" component={Chat}/ >
        </div>
      </Router>
    );
  }
}
