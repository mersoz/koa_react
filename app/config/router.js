import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from '../components/chat/chat';
import Nav from '../components/nav/nav';
export default class Routes extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Nav />
          <Route path="/" component={Chat}/ >
        </div>
      </Router>
    );
  }
}
