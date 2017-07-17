import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from '../components/chat/chat';
import Nav from '../components/nav/nav';
import Login from '../components/login/login';
export default class Routes extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Chat}/ >
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
